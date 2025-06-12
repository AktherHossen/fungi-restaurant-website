
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  ingredients: string[];
  vegetarian?: boolean;
  vegan?: boolean;
  allergens?: string[];
}

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const menuItems: MenuItem[] = [
    // Pizzas
    {
      id: "1",
      name: "Margherita",
      description: "Klassische Pizza mit Tomatensauce, Mozzarella und frischem Basilikum",
      price: 8.50,
      category: "Pizza",
      ingredients: ["Tomatensauce", "Mozzarella", "Basilikum"],
      vegetarian: true,
      allergens: ["Gluten", "Milch"]
    },
    {
      id: "2",
      name: "Fungi Spezial",
      description: "Unsere Signature Pizza mit gemischten Pilzen, Mozzarella und Trüffelöl",
      price: 12.90,
      category: "Pizza",
      ingredients: ["Tomatensauce", "Mozzarella", "Champignons", "Steinpilze", "Trüffelöl"],
      vegetarian: true,
      allergens: ["Gluten", "Milch"]
    },
    {
      id: "3",
      name: "Salami Classico",
      description: "Pizza mit italienischer Salami und Mozzarella",
      price: 9.50,
      category: "Pizza",
      ingredients: ["Tomatensauce", "Mozzarella", "Salami"],
      allergens: ["Gluten", "Milch"]
    },
    {
      id: "4",
      name: "Quattro Stagioni",
      description: "Vier Jahreszeiten mit Schinken, Pilzen, Artischocken und Oliven",
      price: 11.50,
      category: "Pizza",
      ingredients: ["Tomatensauce", "Mozzarella", "Schinken", "Pilze", "Artischocken", "Oliven"],
      allergens: ["Gluten", "Milch"]
    },
    {
      id: "5",
      name: "Vegana Suprema",
      description: "Vegane Pizza mit Cashew-Käse, Gemüse und Kräutern",
      price: 10.90,
      category: "Pizza",
      ingredients: ["Tomatensauce", "Cashew-Käse", "Paprika", "Zucchini", "Rucola"],
      vegetarian: true,
      vegan: true,
      allergens: ["Gluten", "Nüsse"]
    },
    // Appetizers
    {
      id: "6",
      name: "Bruschetta Classica",
      description: "Geröstetes Brot mit Tomaten, Basilikum und Knoblauch",
      price: 6.50,
      category: "Vorspeisen",
      ingredients: ["Brot", "Tomaten", "Basilikum", "Knoblauch", "Olivenöl"],
      vegetarian: true,
      allergens: ["Gluten"]
    },
    {
      id: "7",
      name: "Antipasti Misti",
      description: "Gemischte italienische Vorspeisen mit Oliven, Käse und Schinken",
      price: 12.50,
      category: "Vorspeisen",
      ingredients: ["Oliven", "Mozzarella", "Prosciutto", "Tomaten", "Rucola"],
      allergens: ["Milch"]
    },
    // Pasta
    {
      id: "8",
      name: "Spaghetti Carbonara",
      description: "Klassische Carbonara mit Ei, Speck und Parmesan",
      price: 9.90,
      category: "Pasta",
      ingredients: ["Spaghetti", "Ei", "Speck", "Parmesan", "Schwarzer Pfeffer"],
      allergens: ["Gluten", "Milch", "Ei"]
    },
    {
      id: "9",
      name: "Penne Arrabbiata",
      description: "Scharfe Tomatensauce mit Chili und Knoblauch",
      price: 8.50,
      category: "Pasta",
      ingredients: ["Penne", "Tomatensauce", "Chili", "Knoblauch", "Petersilie"],
      vegetarian: true,
      vegan: true,
      allergens: ["Gluten"]
    },
    // Drinks
    {
      id: "10",
      name: "Coca Cola",
      description: "0,33l Flasche",
      price: 2.50,
      category: "Getränke",
      ingredients: ["Kohlensäure", "Zucker", "Koffein"],
      vegetarian: true,
      vegan: true
    },
    {
      id: "11",
      name: "Birra Moretti",
      description: "Italienisches Bier 0,33l",
      price: 3.50,
      category: "Getränke",
      ingredients: ["Wasser", "Hopfen", "Malz", "Hefe"],
      vegetarian: true,
      vegan: true,
      allergens: ["Gluten"]
    }
  ];

  const categories = ["Alle", "Pizza", "Pasta", "Vorspeisen", "Getränke"];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Alle" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
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
              <Link to="/" className="text-3xl font-bold">🍕 Pizzeria Fungi</Link>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link>
              <Link to="/menu" className="hover:text-yellow-300 transition-colors font-semibold">Speisekarte</Link>
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

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-red-800">Unsere Speisekarte</h1>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Pizza, Pasta oder Getränk suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-red-600 hover:bg-red-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span>{item.name}</span>
                  <div className="flex flex-wrap gap-1">
                    {item.vegetarian && (
                      <Badge variant="outline" className="text-green-600 text-xs">
                        Vegetarisch
                      </Badge>
                    )}
                    {item.vegan && (
                      <Badge variant="outline" className="text-green-800 text-xs">
                        Vegan
                      </Badge>
                    )}
                  </div>
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-600">€{item.price.toFixed(2)}</span>
                    <Button onClick={() => addToCart(item.id)} className="bg-red-600 hover:bg-red-700">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Hinzufügen
                    </Button>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Zutaten:</strong> {item.ingredients.join(", ")}
                    </p>
                    {item.allergens && item.allergens.length > 0 && (
                      <p className="text-xs text-red-600">
                        <strong>Allergene:</strong> {item.allergens.join(", ")}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Keine Artikel gefunden. Versuchen Sie einen anderen Suchbegriff.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
