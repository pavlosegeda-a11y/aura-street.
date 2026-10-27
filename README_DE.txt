AURA STREET — WEBSITE STARTER (DEUTSCH)

WICHTIG
- Die Website ist eine Vorlage, noch kein veröffentlichter Online-Shop.
- Produkte, Preise, Markenname, Kontakt und Rechtstexte sind Platzhalter/Demo-Inhalte.
- Der Checkout funktioniert erst nach Einrichtung eines Stripe-Kontos und eines geheimen API-Schlüssels.
- Niemals den geheimen Stripe-Schlüssel in öffentliche HTML-/JavaScript-Dateien schreiben.
- Vor dem Livegang rechtliche Pflichtangaben, Widerruf, Datenschutz, Versand, Steuern und Verbraucherinformationen prüfen.

LOKAL STARTEN
1. Node.js installieren (LTS-Version).
2. Diesen Ordner im Terminal öffnen.
3. `npm install` ausführen.
4. `.env.example` in `.env` kopieren.
5. Im Stripe-Dashboard einen TEST-Schlüssel erstellen und in `.env` bei STRIPE_SECRET_KEY eintragen.
6. BASE_URL=http://localhost:4242 lassen.
7. `npm start` ausführen.
8. Im Browser http://localhost:4242 öffnen.

STRIPE
- Der Server erstellt eine Stripe Checkout Session für die zwei Demo-Produkte.
- Die Demo-Preise sind 24,00 € und 49,00 €; ersetze sie in server.js und index.html.
- Für echte Zahlungen brauchst du einen passenden Stripe-Account, Live-Schlüssel, eine veröffentlichte HTTPS-Domain und korrekte Geschäfts-/Steuerangaben.
- Für einen zuverlässigen Shop sollten zusätzlich Stripe-Webhooks, Bestellverwaltung, Versand-/Lieferabläufe, E-Mail-Bestätigungen und sichere Lagerbestandsprüfung eingerichtet werden.
- Ein erfolgreicher Redirect allein ist kein Zahlungsnachweis. Prüfe Zahlungen serverseitig über Stripe/Webhooks.

ANPASSEN
- Markenname/Text: public/index.html
- Farben/Layout: public/styles.css
- Kontakt-E-Mail: public/main.js
- Produkte/Preise: server.js UND public/index.html
- Rechtstexte: public/impressum.html, public/datenschutz.html, public/widerruf.html

BILDER
Die Produktabbildungen sind bewusst CSS-Illustrationen. Ersetze sie vor dem Verkauf durch eigene oder lizenzierte Produktfotos.

VERÖFFENTLICHUNG
Du brauchst einen Hosting-Anbieter, der Node.js unterstützt, und eine Domain. Richte dort Umgebungsvariablen STRIPE_SECRET_KEY und BASE_URL ein und aktiviere HTTPS. Teste den gesamten Ablauf mit Stripe-Testdaten, bevor du Live-Zahlungen aktivierst.
