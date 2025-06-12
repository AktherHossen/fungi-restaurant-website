
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { PlusCircle, Edit, Trash2, Eye, CheckCircle, Clock, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Order {
  id: string;
  customerName: string;
  items: string[];
  total: number;
  status: "pending" | "preparing" | "ready" | "delivered" | "cancelled";
  orderTime: string;
  deliveryMethod: "delivery" | "pickup";
  paymentMethod: string;
  customerInfo: {
    email: string;
    phone: string;
    address?: string;
  };
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  ingredients: string[];
  available: boolean;
  vegetarian?: boolean;
  vegan?: boolean;
}

interface Offer {
  id: string;
  title: string;
  description: string;
  discount: number;
  validUntil: string;
  active: boolean;
}

const Admin = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginPassword, setLoginPassword] = useState("");

  // Mock data
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "ORD-001",
      customerName: "Max Mustermann",
      items: ["2x Margherita", "1x Fungi Spezial"],
      total: 29.90,
      status: "pending",
      orderTime: "14:30",
      deliveryMethod: "delivery",
      paymentMethod: "Karte",
      customerInfo: {
        email: "max@example.com",
        phone: "+49 30 12345678",
        address: "Musterstraße 123, 12345 Berlin"
      }
    },
    {
      id: "ORD-002",
      customerName: "Anna Schmidt",
      items: ["1x Salami Classico", "1x Cola"],
      total: 12.00,
      status: "preparing",
      orderTime: "14:15",
      deliveryMethod: "pickup",
      paymentMethod: "Bar",
      customerInfo: {
        email: "anna@example.com",
        phone: "+49 30 87654321"
      }
    }
  ]);

  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: "1",
      name: "Margherita",
      description: "Klassische Pizza mit Tomatensauce, Mozzarella und frischem Basilikum",
      price: 8.50,
      category: "Pizza",
      ingredients: ["Tomatensauce", "Mozzarella", "Basilikum"],
      available: true,
      vegetarian: true
    },
    {
      id: "2",
      name: "Fungi Spezial",
      description: "Unsere Signature Pizza mit gemischten Pilzen, Mozzarella und Trüffelöl",
      price: 12.90,
      category: "Pizza",
      ingredients: ["Tomatensauce", "Mozzarella", "Champignons", "Steinpilze", "Trüffelöl"],
      available: true,
      vegetarian: true
    }
  ]);

  const [offers, setOffers] = useState<Offer[]>([
    {
      id: "1",
      title: "Pizza des Tages",
      description: "20% Rabatt auf alle Pilz-Pizzen",
      discount: 20,
      validUntil: "2024-12-31",
      active: true
    }
  ]);

  const handleLogin = () => {
    if (loginPassword === "admin123") {
      setIsAuthenticated(true);
      toast({
        title: "Anmeldung erfolgreich",
        description: "Willkommen im Admin-Bereich!"
      });
    } else {
      toast({
        title: "Falsches Passwort",
        description: "Bitte versuchen Sie es erneut.",
        variant: "destructive"
      });
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
    setOrders(prev => prev.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
    toast({
      title: "Status aktualisiert",
      description: `Bestellung ${orderId} wurde auf "${newStatus}" gesetzt.`
    });
  };

  const getStatusBadge = (status: Order["status"]) => {
    const statusConfig = {
      pending: { label: "Wartend", variant: "secondary" as const },
      preparing: { label: "Zubereitung", variant: "default" as const },
      ready: { label: "Bereit", variant: "outline" as const },
      delivered: { label: "Geliefert", variant: "outline" as const },
      cancelled: { label: "Storniert", variant: "destructive" as const }
    };
    
    const config = statusConfig[status];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">🍕 Admin Login</CardTitle>
            <CardDescription className="text-center">
              Geben Sie das Admin-Passwort ein
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="password">Passwort</Label>
              <Input
                id="password"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            <Button onClick={handleLogin} className="w-full bg-red-600 hover:bg-red-700">
              Anmelden
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Demo-Passwort: admin123
            </p>
            <div className="text-center">
              <Link to="/" className="text-red-600 hover:underline text-sm">
                Zurück zur Website
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-red-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">🍕 Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Link to="/" className="hover:text-yellow-300 transition-colors">
                Zur Website
              </Link>
              <Button
                variant="secondary"
                onClick={() => setIsAuthenticated(false)}
              >
                Abmelden
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders">Bestellungen</TabsTrigger>
            <TabsTrigger value="menu">Speisekarte</TabsTrigger>
            <TabsTrigger value="offers">Angebote</TabsTrigger>
            <TabsTrigger value="stats">Statistiken</TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Aktuelle Bestellungen</CardTitle>
                <CardDescription>Verwalten Sie eingehende Bestellungen</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <Card key={order.id} className="border-l-4 border-l-red-500">
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">{order.id}</h3>
                            <p className="text-gray-600">{order.customerName} • {order.orderTime}</p>
                          </div>
                          <div className="text-right">
                            {getStatusBadge(order.status)}
                            <p className="text-lg font-bold mt-1">€{order.total.toFixed(2)}</p>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Artikel:</p>
                            <p>{order.items.join(", ")}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Kontakt:</p>
                            <p>{order.customerInfo.email}</p>
                            <p>{order.customerInfo.phone}</p>
                            {order.customerInfo.address && (
                              <p className="text-sm">{order.customerInfo.address}</p>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateOrderStatus(order.id, "preparing")}
                            disabled={order.status !== "pending"}
                          >
                            <Clock className="w-4 h-4 mr-1" />
                            Zubereitung
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateOrderStatus(order.id, "ready")}
                            disabled={order.status !== "preparing"}
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Bereit
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateOrderStatus(order.id, "delivered")}
                            disabled={order.status !== "ready"}
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Geliefert
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => updateOrderStatus(order.id, "cancelled")}
                          >
                            <X className="w-4 h-4 mr-1" />
                            Stornieren
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Menu Management Tab */}
          <TabsContent value="menu">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Speisekarte verwalten</CardTitle>
                    <CardDescription>Artikel hinzufügen, bearbeiten oder entfernen</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-red-600 hover:bg-red-700">
                        <PlusCircle className="w-4 h-4 mr-2" />
                        Neuer Artikel
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Neuen Artikel hinzufügen</DialogTitle>
                        <DialogDescription>
                          Füllen Sie die Details für den neuen Menüartikel aus
                        </DialogDescription>
                      </DialogHeader>
                      {/* Add form fields here */}
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="itemName">Name</Label>
                          <Input id="itemName" placeholder="z.B. Pizza Margherita" />
                        </div>
                        <div>
                          <Label htmlFor="itemDescription">Beschreibung</Label>
                          <Textarea id="itemDescription" placeholder="Beschreibung des Artikels" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="itemPrice">Preis (€)</Label>
                            <Input id="itemPrice" type="number" step="0.01" placeholder="8.50" />
                          </div>
                          <div>
                            <Label htmlFor="itemCategory">Kategorie</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Wählen Sie eine Kategorie" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pizza">Pizza</SelectItem>
                                <SelectItem value="pasta">Pasta</SelectItem>
                                <SelectItem value="appetizers">Vorspeisen</SelectItem>
                                <SelectItem value="drinks">Getränke</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button className="w-full bg-red-600 hover:bg-red-700">
                          Artikel hinzufügen
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {menuItems.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold">{item.name}</h3>
                              {item.vegetarian && <Badge variant="outline" className="text-green-600">V</Badge>}
                              {item.vegan && <Badge variant="outline" className="text-green-800">VG</Badge>}
                            </div>
                            <p className="text-gray-600 mb-2">{item.description}</p>
                            <p className="text-sm text-gray-500">
                              Zutaten: {item.ingredients.join(", ")}
                            </p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <p className="text-lg font-bold">€{item.price.toFixed(2)}</p>
                              <div className="flex items-center space-x-2">
                                <Switch checked={item.available} />
                                <span className="text-sm">{item.available ? "Verfügbar" : "Nicht verfügbar"}</span>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="destructive">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Offers Tab */}
          <TabsContent value="offers">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Angebote verwalten</CardTitle>
                    <CardDescription>Aktuelle Rabatte und Sonderangebote</CardDescription>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Neues Angebot
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {offers.map((offer) => (
                    <Card key={offer.id}>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{offer.title}</h3>
                            <p className="text-gray-600 mb-2">{offer.description}</p>
                            <p className="text-sm text-gray-500">Gültig bis: {offer.validUntil}</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <Badge variant={offer.active ? "default" : "secondary"}>
                              {offer.discount}% Rabatt
                            </Badge>
                            <Switch checked={offer.active} />
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="destructive">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Statistics Tab */}
          <TabsContent value="stats">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm text-gray-600">Heute</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-sm text-gray-600">Bestellungen</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm text-gray-600">Umsatz heute</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">€248.60</div>
                  <p className="text-sm text-gray-600">+15% vs. gestern</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm text-gray-600">Beliebteste Pizza</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold">Margherita</div>
                  <p className="text-sm text-gray-600">8 mal bestellt</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm text-gray-600">Ø Wartezeit</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18 Min</div>
                  <p className="text-sm text-gray-600">Zubereitung</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
