require("dotenv").config();

const express = require("express");
const Stripe = require("stripe");
const path = require("path");

const app = express();
const port = process.env.PORT || 4242;

const stripeKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeKey ? new Stripe(stripeKey) : null;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const products = {
  "shirt-01": {
    name: "T-Shirt (Demo)",
    price: 2400,
    currency: "eur"
  },
  "hoodie-01": {
    name: "Hoodie (Demo)",
    price: 4900,
    currency: "eur"
  },
  "design-01": {
    name: "Design-Service – Erstgespräch",
    price: 0,
    currency: "eur"
  }
};

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/create-checkout-session", async (req, res) => {
  try {
    if (!stripe) {
      return res.status(503).json({
        error: "Stripe ist noch nicht eingerichtet."
      });
    }

    const { productId } = req.body || {};
    const product = products[productId];

    if (!product || product.price <= 0) {
      return res.status(400).json({
        error: "Dieses Produkt kann hier nicht direkt bezahlt werden."
      });
    }

    const baseUrl =
      process.env.BASE_URL || `http://localhost:${port}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: product.currency,
            product_data: {
              name: product.name
            },
            unit_amount: product.price
          },
          quantity: 1
        }
      ],
      success_url:
        `${baseUrl}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/?checkout=cancelled`
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe-Fehler:", error.message);
    res.status(500).json({
      error: "Die Zahlung konnte nicht gestartet werden."
    });
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Website läuft auf Port ${port}`);
});
