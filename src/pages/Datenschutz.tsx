
import { Link } from "react-router-dom";

const Datenschutz = () => {
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
        <h1 className="text-4xl font-bold mb-8 text-red-800">Datenschutzerklärung</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
            <p className="mb-4">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
            
            <h3 className="text-xl font-semibold mb-2">Datenerfassung auf unserer Website</h3>
            <p className="mb-4"><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
            <p className="mb-4">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
            
            <p className="mb-4"><strong>Wie erfassen wir Ihre Daten?</strong></p>
            <p className="mb-4">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
            <p className="mb-4">Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-semibold mb-2">Datenschutz</h3>
            <p className="mb-4">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.</p>
            <p className="mb-4">Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
            
            <h3 className="text-xl font-semibold mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <div className="bg-gray-50 p-4 rounded mb-4">
              <p>Pizzeria Fungi GmbH<br />
              Mario Rossi<br />
              Musterstraße 123<br />
              12345 Berlin</p>
              <p className="mt-2">Telefon: +49 30 12345678<br />
              E-Mail: info@pizzeriafungi.de</p>
            </div>
            <p className="mb-4">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">3. Datenerfassung auf unserer Website</h2>
            
            <h3 className="text-xl font-semibold mb-2">Cookies</h3>
            <p className="mb-4">Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.</p>
            <p className="mb-4">Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.</p>
            
            <h3 className="text-xl font-semibold mb-2">Server-Log-Dateien</h3>
            <p className="mb-4">Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mb-4">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
            
            <h3 className="text-xl font-semibold mb-2">Kontaktformular</h3>
            <p className="mb-4">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">4. Bestelldaten</h2>
            <p className="mb-4">Für die Bearbeitung Ihrer Bestellungen erheben wir folgende personenbezogene Daten:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name und Vorname</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Lieferadresse (bei Lieferung)</li>
              <li>Bestelldaten und -präferenzen</li>
            </ul>
            <p className="mb-4">Diese Daten werden ausschließlich zur Bearbeitung Ihrer Bestellung verwendet und nach Abschluss der Bestellung entsprechend den gesetzlichen Aufbewahrungsfristen gespeichert.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">5. Zahlungsdienstleister</h2>
            <p className="mb-4">Auf dieser Website bieten wir verschiedene Zahlungsmethoden an. Bei der Nutzung von Zahlungsdienstleistern (wie PayPal, Stripe, etc.) werden Ihre Zahlungsdaten direkt an den jeweiligen Zahlungsdienstleister übermittelt. Bitte beachten Sie die Datenschutzerklärungen der jeweiligen Anbieter.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">6. Ihre Rechte</h2>
            <p className="mb-4">Sie haben jederzeit das Recht:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
              <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
              <li>Einschränkung der Datenverarbeitung zu verlangen</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten zu erheben</li>
              <li>Datenübertragbarkeit zu verlangen</li>
            </ul>
            <p className="mb-4">Bei Fragen können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">7. Widerspruch gegen Werbe-E-Mails</h2>
            <p className="mb-4">Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>
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

export default Datenschutz;
