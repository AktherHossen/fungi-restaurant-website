
import { Link } from "react-router-dom";

const Widerruf = () => {
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
        <h1 className="text-4xl font-bold mb-8 text-red-800">Widerrufsrecht & Widerrufsformular</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Widerrufsbelehrung</h2>
            
            <h3 className="text-xl font-semibold mb-2">Widerrufsrecht</h3>
            <p className="mb-4">Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
            <p className="mb-4">Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat.</p>
            
            <p className="mb-4">Um Ihr Widerrufsrecht auszuüben, müssen Sie uns</p>
            <div className="bg-gray-50 p-4 rounded mb-4">
              <p>Pizzeria Fungi GmbH<br />
              Musterstraße 123<br />
              12345 Berlin<br />
              Deutschland</p>
              <p className="mt-2">E-Mail: info@pizzeriafungi.de<br />
              Telefon: +49 30 12345678</p>
            </div>
            <p className="mb-4">mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>
            
            <p className="mb-4">Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Folgen des Widerrufs</h2>
            <p className="mb-4">Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.</p>
            <p className="mb-4">Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Besonderheiten bei Lebensmitteln</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <h3 className="font-semibold mb-2">Wichtiger Hinweis</h3>
              <p>Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die schnell verderben können oder deren Verfalldatum schnell überschritten würde.</p>
              <p className="mt-2">Da wir frisch zubereitete Speisen und verderbliche Lebensmittel liefern, erlischt das Widerrufsrecht bei diesen Produkten bereits mit der Lieferung aus hygienischen und gesundheitlichen Gründen.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Muster-Widerrufsformular</h2>
            <p className="mb-4">(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)</p>
            
            <div className="bg-gray-50 p-6 rounded border">
              <p className="mb-4">An:</p>
              <p className="mb-4">Pizzeria Fungi GmbH<br />
              Musterstraße 123<br />
              12345 Berlin<br />
              Deutschland<br />
              E-Mail: info@pizzeriafungi.de</p>
              
              <p className="mb-4">Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*) / die Erbringung der folgenden Dienstleistung (*)</p>
              
              <div className="space-y-4 my-6">
                <div className="border-b border-gray-300 pb-2">
                  <label className="text-sm text-gray-600">Bestellt am (*) / erhalten am (*)</label>
                </div>
                <div className="border-b border-gray-300 pb-2">
                  <label className="text-sm text-gray-600">Name des/der Verbraucher(s)</label>
                </div>
                <div className="border-b border-gray-300 pb-2">
                  <label className="text-sm text-gray-600">Anschrift des/der Verbraucher(s)</label>
                </div>
                <div className="border-b border-gray-300 pb-2">
                  <label className="text-sm text-gray-600">Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</label>
                </div>
                <div className="border-b border-gray-300 pb-2">
                  <label className="text-sm text-gray-600">Datum</label>
                </div>
              </div>
              
              <p className="text-sm text-gray-600">(*) Unzutreffendes streichen.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Kontakt für Widerruf</h2>
            <p className="mb-4">Für Fragen zum Widerrufsrecht oder zur Abwicklung eines Widerrufs können Sie uns kontaktieren:</p>
            <div className="bg-gray-50 p-4 rounded">
              <p><strong>E-Mail:</strong> info@pizzeriafungi.de</p>
              <p><strong>Telefon:</strong> +49 30 12345678</p>
              <p><strong>Öffnungszeiten:</strong><br />
              Mo-Do: 11:00 - 22:00 Uhr<br />
              Fr-Sa: 11:00 - 23:00 Uhr<br />
              So: 12:00 - 21:00 Uhr</p>
            </div>
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

export default Widerruf;
