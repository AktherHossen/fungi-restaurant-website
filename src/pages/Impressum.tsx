
import { Link } from "react-router-dom";

const Impressum = () => {
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
        <h1 className="text-4xl font-bold mb-8 text-red-800">Impressum</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-2">
              <p><strong>Pizzeria Fungi GmbH</strong></p>
              <p>Musterstraße 123</p>
              <p>12345 Berlin</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Vertreten durch</h2>
            <p>Geschäftsführer: Mario Rossi</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Kontakt</h2>
            <div className="space-y-2">
              <p><strong>Telefon:</strong> +49 30 12345678</p>
              <p><strong>E-Mail:</strong> info@pizzeriafungi.de</p>
              <p><strong>Website:</strong> www.pizzeriafungi.de</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Registereintrag</h2>
            <div className="space-y-2">
              <p><strong>Eintragung im Handelsregister:</strong></p>
              <p>Registergericht: Amtsgericht Berlin</p>
              <p>Registernummer: HRB 12345</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p><strong>DE123456789</strong></p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Wirtschafts-ID</h2>
            <p>Wirtschafts-Identifikationsnummer: DE123456789</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Aufsichtsbehörde</h2>
            <div className="space-y-2">
              <p>Bezirksamt Berlin Mitte</p>
              <p>Gesundheitsamt</p>
              <p>Karl-Marx-Allee 31</p>
              <p>10178 Berlin</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <div className="space-y-2">
              <p><strong>Berufsbezeichnung:</strong> Gastronom</p>
              <p><strong>Zuständige Kammer:</strong> IHK Berlin</p>
              <p><strong>Verliehen durch:</strong> Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">EU-Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
            <p><a href="https://ec.europa.eu/consumers/odr/" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a></p>
            <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Haftung für Inhalte</h2>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Haftung für Links</h2>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
            <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Urheberrecht</h2>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
            <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
          </section>
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

export default Impressum;
