
import { Link } from "react-router-dom";

const AGB = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-red-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold">🍕 Pizzeria Fungi</Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link>
              <Link to="/menu" className="hover:text-yellow-300 transition-colors">Speisekarte</Link>
              <Link to="/order" className="hover:text-yellow-300 transition-colors">Bestellen</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-red-800">Allgemeine Geschäftsbedingungen (AGB)</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">§ 1 Geltungsbereich</h2>
            <p className="mb-4">Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") der Pizzeria Fungi GmbH (nachfolgend "Anbieter") gelten für alle Lieferungen von Speisen und Getränken. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich zu.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">§ 2 Vertragspartner</h2>
            <p className="mb-4">Der Vertrag kommt zustande mit:</p>
            <div className="bg-gray-50 p-4 rounded mb-4">
              <p>Pizzeria Fungi GmbH<br />
              Musterstraße 123<br />
              12345 Berlin<br />
              Deutschland</p>
              <p className="mt-2">Telefon: +49 30 12345678<br />
              E-Mail: info@pizzeriafungi.de<br />
              Geschäftsführer: Mario Rossi<br />
              Handelsregister: HRB 12345, Amtsgericht Berlin<br />
              USt-IdNr.: DE123456789</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">§ 3 Vertragsschluss</h2>
            <p className="mb-4">3.1 Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern einen unverbindlichen Online-Katalog dar.</p>
            <p className="mb-4">3.2 Durch Anklicken des Buttons "Jetzt bestellen" geben Sie eine verbindliche Bestellung der im Warenkorb enthaltenen Waren ab.</p>
            <p className="mb-4">3.3 Der Anbieter bestätigt den Eingang der Bestellung unmittelbar durch eine automatisch generierte E-Mail. Diese Bestellbestätigung stellt noch nicht die Annahme des Vertragsangebotes dar.</p>
            <p className="mb-4">3.4 Der Vertrag kommt erst zustande, wenn der Anbieter die Bestellung durch eine weitere E-Mail, Telefax oder telefonisch innerhalb von 2 Tagen bestätigt oder die Ware liefert.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">§ 4 Preise und Zahlungsbedingungen</h2>
            <p className="mb-4">4.1 Die angegebenen Preise enthalten die gesetzliche Umsatzsteuer und sonstige Preisbestandteile.</p>
            <p className="mb-4">4.2 Die Lieferkosten sind nicht in den Produktpreisen enthalten und werden im Bestellvorgang gesondert ausgewiesen.</p>
            <p className="mb-4">4.3 Die Zahlung erfolgt wahlweise per:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Barzahlung bei Lieferung</li>
              <li>Kreditkarte</li>
              <li>PayPal</li>
              <li>EC-Karte bei Abholung</li>
            </ul>
            <p className="mb-4">4.4 Bei Auswahl der Zahlungsart "Barzahlung bei Lieferung" wird der Kaufpreis fällig, wenn die Ware geliefert und übergeben wird.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">§ 5 Lieferung und Liefergebiet</h2>
            <p className="mb-4">5.1 Die Lieferung erfolgt im Umkreis von 5 km um unser Restaurant.</p>
            <p className="mb-4">5.2 Die Lieferzeit beträgt in der Regel 30-45 Minuten und kann an Sonn- und Feiertagen sowie bei erhöhtem Bestellaufkommen verlängert werden.</p>
            <p className="mb-4">5.3 Der Mindestbestellwert für Lieferungen beträgt 15,00 €.</p>
            <p className="mb-4">5.4 Die Liefergebühr beträgt 2,50 € und wird beim Bestellvorgang ausgewiesen.</p>
            <p className="mb-4">5.5 Bei Abholung entfällt die Liefergebühr. Abholung ist nach telefonischer Absprache möglich.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">§ 6 Eigentumsvorbehalt</h2>
            <p className="mb-4">Die gelieferte Ware bleibt bis zur vollständigen Bezahlung des Kaufpreises Eigentum des Anbieters.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">§ 7 Gewährleistung</h2>
            <p className="mb-4">7.1 Es gelten die gesetzlichen Gewährleistungsregelungen.</p>
            <p className="mb-4">7.2 Als Verbraucher werden Sie gebeten, die Ware bei Lieferung umgehend auf Vollständigkeit und offensichtliche Mängel zu überprüfen und uns Beanstandungen schnellstmöglich mitzuteilen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">§ 8 Widerrufsrecht</h2>
            <p className="mb-4">8.1 Verbrauchern steht ein Widerrufsrecht nach folgender Maßgabe zu:</p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <h3 className="font-semibold mb-2">Widerrufsbelehrung</h3>
              <p className="mb-2"><strong>Widerrufsrecht</strong></p>
              <p className="mb-2">Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
              <p className="mb-2">Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.</p>
            </div>
            
            <p className="mb-4">8.2 Das Widerrufsrecht erlischt bei Verträgen zur Lieferung von Waren, die schnell verderben können oder deren Verfalldatum schnell überschritten würde.</p>
            <p className="mb-4">8.3 Da es sich bei unseren Produkten um frisch zubereitete Speisen handelt, ist ein Widerruf nach Lieferung aus hygienischen Gründen ausgeschlossen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">§ 9 Datenschutz</h2>
            <p className="mb-4">Die Verarbeitung personenbezogener Daten erfolgt entsprechend unserer Datenschutzerklärung, die unter <Link to="/datenschutz" className="text-red-600 hover:underline">https://pizzeriafungi.de/datenschutz</Link> abrufbar ist.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">§ 10 Streitbeilegung</h2>
            <p className="mb-4">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a></p>
            <p className="mb-4">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">§ 11 Schlussbestimmungen</h2>
            <p className="mb-4">11.1 Auf alle Rechtsverhältnisse zwischen uns und dem Kunden findet das Recht der Bundesrepublik Deutschland Anwendung. Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als nicht der gewährte Schutz durch zwingende Bestimmungen des Rechts des Staates, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat, entzogen wird.</p>
            <p className="mb-4">11.2 Sind Sie Kaufmann, eine juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen mit Sitz in der Bundesrepublik Deutschland, ist ausschließlicher Gerichtsstand unser Geschäftssitz. Haben Sie Ihren Sitz außerhalb der Bundesrepublik Deutschland, so ist unser Geschäftssitz ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag, wenn der Vertrag oder Ansprüche aus dem Vertrag Ihrer beruflichen oder gewerblichen Tätigkeit zugerechnet werden können.</p>
            <p className="mb-4">11.3 Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder nach Vertragsschluss unwirksam oder undurchführbar werden, so wird dadurch die Wirksamkeit der AGB im Übrigen nicht berührt.</p>
          </section>

          <p className="text-sm text-gray-600 mt-8">
            <strong>Stand:</strong> Dezember 2024
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-red-600 hover:underline">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AGB;
