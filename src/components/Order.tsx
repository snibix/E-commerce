import { useCart } from "../context/CartContext"; // Ajustez le chemin selon votre structure

export default function Order() {
  const { cart } = useCart();

  // Calcul des taxes (par exemple 8.5% du subtotal)
  const taxRate = 0.085;
  const subtotal = cart.total;
  const taxes = subtotal * taxRate;
  const total = subtotal + taxes;

  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="flex justify-between w-full">
        <p className="w-50 text-md font-semibold">
          Subtotal ({cart.itemCount} article{cart.itemCount > 1 ? "s" : ""})
        </p>
        <span className="text-md">{subtotal.toFixed(2)} €</span>
      </div>

      <div className="flex justify-between">
        <p className="text-md">Taxes (8.5%)</p>
        <span className="text-md">{taxes.toFixed(2)} €</span>
      </div>

      <div className="flex justify-between">
        <p className="text-md">Livraison</p>
        <span className="text-md text-green-600">Gratuite</span>
      </div>

      <div className="divider my-2"></div>

      <div className="flex justify-between">
        <p className="text-lg font-semibold">Total</p>
        <span className="text-left text-md font-bold text-blue-600">
          {total.toFixed(2)} €
        </span>
      </div>

      <div className="mt-6">
        <button
          className="btn border-0 text-white text-md p-4 transition-all duration-300 bg-gradient-to-r from-blue-600 w-full to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-center"
          disabled={cart.items.length === 0}
        >
          {cart.items.length === 0 ? "Panier vide" : "Procéder au paiement"}
        </button>
      </div>

      {cart.items.length > 0 && (
        <div className="text-sm text-gray-500 text-center mt-2">
          Paiement sécurisé • Livraison sous 48h
        </div>
      )}
    </div>
  );
}
