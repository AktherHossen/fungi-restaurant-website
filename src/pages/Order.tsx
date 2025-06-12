
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  notes: string;
}

const Order = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<CartItem[]>([
    { id: "1", name: "Margherita", price: 8.50, quantity: 2 },
    { id: "2", name: "Fungi Spezial", price: 12.90, quantity: 1 }
  ]);

  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: ""
  });

  const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "pickup">("delivery");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash" | "paypal">("card");

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getDeliveryFee = () => {
    return deliveryMethod === "delivery" ? 2.50 : 0;
  };

  const getTotal = () => {
    return getSubtotal() + getDeliveryFee();
  };

  const handleSubmitOrder = () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      toast({
        title: "Unvollständige Daten",
        description: "Bitte füllen Sie alle erforderlichen Felder aus.",
        variant: "destructive"
      });
      return;
    }

    if (deliveryMethod === "delivery" && (!customerInfo.address || !customerInfo.city || !customerInfo.postalCode)) {
      toast({
        title: "Lieferadresse erforderlich",
        description: "Bitte geben Sie eine vollständige Lieferadresse an.",
        variant: "destructive"
      });
      return;
    }

    // Simulate order submission
    toast({
      title: "Bestellung erfolgreich!",
      description: `Ihre Bestellung über €${getTotal().toFixed(2)} wurde aufgegeben. Sie erhalten eine Bestätigung per E-Mail.`,
    });

    // Reset form
    setCart([]);
    setCustomerInfo({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      notes: ""
    });
  };

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
              <Link to="/order" className="hover:text-yellow-300 transition-colors font-semibold">Bestellen</Link>
              <Link to="/admin" className="hover:text-yellow-300 transition-colors">Admin</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-red-800">Ihre Bestellung</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Cart */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Warenkorb</CardTitle>
                <CardDescription>Überprüfen Sie Ihre Artikel</CardDescription>
              </CardHeader>
              <CardContent>
                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">Ihr Warenkorb ist leer</p>
                    <Link to="/menu">
                      <Button className="bg-red-600 hover:bg-red-700">
                        Zur Speisekarte
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center p-4 border rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-gray-600">€{item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}

                    {/* Order Summary */}
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Zwischensumme:</span>
                        <span>€{getSubtotal().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Liefergebühr:</span>
                        <span>€{getDeliveryFee().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>Gesamt:</span>
                        <span>€{getTotal().toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Bestellinformationen</CardTitle>
                <CardDescription>Geben Sie Ihre Kontaktdaten ein</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Delivery Method */}
                <div>
                  <Label className="text-base font-semibold">Lieferart</Label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <Button
                      variant={deliveryMethod === "delivery" ? "default" : "outline"}
                      onClick={() => setDeliveryMethod("delivery")}
                      className={deliveryMethod === "delivery" ? "bg-red-600 hover:bg-red-700" : ""}
                    >
                      Lieferung (€2.50)
                    </Button>
                    <Button
                      variant={deliveryMethod === "pickup" ? "default" : "outline"}
                      onClick={() => setDeliveryMethod("pickup")}
                      className={deliveryMethod === "pickup" ? "bg-red-600 hover:bg-red-700" : ""}
                    >
                      Abholung
                    </Button>
                  </div>
                </div>

                {/* Customer Information */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                    required
                  />
                </div>

                {deliveryMethod === "delivery" && (
                  <>
                    <div>
                      <Label htmlFor="address">Straße und Hausnummer *</Label>
                      <Input
                        id="address"
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="postalCode">PLZ *</Label>
                        <Input
                          id="postalCode"
                          value={customerInfo.postalCode}
                          onChange={(e) => setCustomerInfo(prev => ({ ...prev, postalCode: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">Stadt *</Label>
                        <Input
                          id="city"
                          value={customerInfo.city}
                          onChange={(e) => setCustomerInfo(prev => ({ ...prev, city: e.target.value }))}
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <Label htmlFor="notes">Anmerkungen</Label>
                  <Textarea
                    id="notes"
                    placeholder="Allergien, Wünsche, Lieferhinweise..."
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, notes: e.target.value }))}
                  />
                </div>

                {/* Payment Method */}
                <div>
                  <Label className="text-base font-semibold">Zahlungsart</Label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <Button
                      variant={paymentMethod === "card" ? "default" : "outline"}
                      onClick={() => setPaymentMethod("card")}
                      className={paymentMethod === "card" ? "bg-red-600 hover:bg-red-700" : ""}
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Karte
                    </Button>
                    <Button
                      variant={paymentMethod === "paypal" ? "default" : "outline"}
                      onClick={() => setPaymentMethod("paypal")}
                      className={paymentMethod === "paypal" ? "bg-red-600 hover:bg-red-700" : ""}
                    >
                      PayPal
                    </Button>
                    <Button
                      variant={paymentMethod === "cash" ? "default" : "outline"}
                      onClick={() => setPaymentMethod("cash")}
                      className={paymentMethod === "cash" ? "bg-red-600 hover:bg-red-700" : ""}
                    >
                      Bar
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={handleSubmitOrder}
                  disabled={cart.length === 0}
                  className="w-full bg-red-600 hover:bg-red-700 text-lg py-3"
                >
                  Jetzt bestellen - €{getTotal().toFixed(2)}
                </Button>

                <p className="text-xs text-gray-500 mt-4">
                  * Pflichtfelder. Mit der Bestellung akzeptieren Sie unsere{" "}
                  <Link to="/agb" className="text-red-600 hover:underline">AGB</Link> und{" "}
                  <Link to="/datenschutz" className="text-red-600 hover:underline">Datenschutzerklärung</Link>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
