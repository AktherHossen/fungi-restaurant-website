
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Clock, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  ingredients: string[];
  vegetarian?: boolean;
  vegan?: boolean;
}

const Index = () => {
  const [menuItems] = useState<MenuItem[]>([
    {
      id: "1",
      name: "Margherita",
      description: "Klassische Pizza mit Tomatensauce, Mozzarella und frischem Basilikum",
      price: 8.50,
      category: "Pizza",
      ingredients: ["Tomatensauce", "Mozzarella", "Basilikum"],
      vegetarian: true
    },
    {
      id: "2", 
      name: "Fungi Spezial",
      description: "Unsere Signature Pizza mit gemischten Pilzen, Mozzarella und Trüffelöl",
      price: 12.90,
      category: "Pizza",
      ingredients: ["Tomatensauce", "Mozzarella", "Champignons", "Steinpilze", "Trüffelöl"],
      vegetarian: true
    },
    {
      id: "3",
      name: "Salami Classico",
      description: "Pizza mit italienischer Salami und Mozzarella",
      price: 9.50,
      category: "Pizza", 
      ingredients: ["Tomatensauce", "Mozzarella", "Salami"]
    },
    {
      id: "4",
      name: "Quattro Stagioni",
      description: "Vier Jahreszeiten mit Schinken, Pilzen, Artischocken und Oliven",
      price: 11.50,
      category: "Pizza",
      ingredients: ["Tomatensauce", "Mozzarella", "Schinken", "Pilze", "Artischocken", "Oliven"]
    }
  ]);

  const [cart, setCart] = useState<{[key: string]: number}>({});

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find(item => item.id === itemId);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const getCartItemCount = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-red-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold">🍕 Pizzeria Fungi</h1>
              <Badge variant="secondary" className="bg-yellow-500 text-black">
                Authentisch Italienisch
              </Badge>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link>
              <Link to="/menu" className="hover:text-yellow-300 transition-colors">Speisekarte</Link>
              <Link to="/order" className="hover:text-yellow-300 transition-colors">Bestellen</Link>
              <Link to="/admin" className="hover:text-yellow-300 transition-colors">Admin</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/order">
                <Button variant="secondary" className="relative">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Warenkorb
                  {getCartItemCount() > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-black">
                      {getCartItemCount()}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">Willkommen bei Pizzeria Fungi</h2>
          <p className="text-xl mb-8">Authentische italienische Pizza in Deutschland</p>
          <div className="flex justify-center space-x-4">
            <Link to="/order">
              <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
                Jetzt bestellen
              </Button>
            </Link>
            <Link to="/menu">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-red-600">
                Speisekarte ansehen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Öffnungszeiten</h3>
              <p className="text-gray-600">
                Mo-Do: 11:00 - 22:00<br />
                Fr-Sa: 11:00 - 23:00<br />
                So: 12:00 - 21:00
              </p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Adresse</h3>
              <p className="text-gray-600">
                Musterstraße 123<br />
                12345 Berlin<br />
                Deutschland
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Kontakt</h3>
              <p className="text-gray-600">
                Tel: +49 30 12345678<br />
                E-Mail: info@pizzeriafungi.de
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-800">Unsere Spezialitäten</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{item.name}</span>
                    <div className="flex space-x-1">
                      {item.vegetarian && <Badge variant="outline" className="text-green-600">Vegetarisch</Badge>}
                      {item.vegan && <Badge variant="outline" className="text-green-800">Vegan</Badge>}
                    </div>
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-600">€{item.price.toFixed(2)}</span>
                    <Button onClick={() => addToCart(item.id)} className="bg-red-600 hover:bg-red-700">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      In den Warenkorb
                    </Button>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">
                      <strong>Zutaten:</strong> {item.ingredients.join(", ")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Pizzeria Fungi</h3>
              <p className="text-gray-400">
                Ihre authentische italienische Pizzeria in Deutschland.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <div className="space-y-2">
                <Link to="/impressum" className="text-gray-400 hover:text-white block">Impressum</Link>
                <Link to="/datenschutz" className="text-gray-400 hover:text-white block">Datenschutzerklärung</Link>
                <Link to="/agb" className="text-gray-400 hover:text-white block">AGB</Link>
                <Link to="/widerruf" className="text-gray-400 hover:text-white block">Widerrufsrecht</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="text-gray-400 space-y-2">
                <p>Musterstraße 123</p>
                <p>12345 Berlin</p>
                <p>Tel: +49 30 12345678</p>
                <p>info@pizzeriafungi.de</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Folgen Sie uns</h4>
              <div className="text-gray-400 space-y-2">
                <p>Facebook</p>
                <p>Instagram</p>
                <p>TikTok</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Pizzeria Fungi. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
