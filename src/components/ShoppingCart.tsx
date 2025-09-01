import { TrashIcon } from "@heroicons/react/24/outline";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ShoppingCart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // Gérer la sélection d'un item
  const handleItemSelect = (itemId: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  // Sélectionner/désélectionner tous les items
  const handleSelectAll = () => {
    if (selectedItems.length === cart.items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cart.items.map((item) => item.id));
    }
  };

  // Gérer le changement de quantité
  const handleQuantityChange = (
    itemId: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      updateQuantity(itemId, newQuantity);
    }
  };

  // Supprimer les items sélectionnés
  const handleRemoveSelected = () => {
    selectedItems.forEach((itemId) => {
      removeFromCart(itemId);
    });
    setSelectedItems([]);
  };

  // Calculer le total des items sélectionnés
  const selectedTotal = cart.items
    .filter((item) => selectedItems.includes(item.id))
    .reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96 gap-4">
        <div className="text-6xl">🛒</div>
        <h2 className="text-2xl font-bold text-gray-600">
          Votre panier est vide
        </h2>
        <p className="text-gray-500">
          Ajoutez des produits pour commencer vos achats
        </p>
        <a
          href="/products"
          className="btn border-0 text-white text-lg p-4 transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
        >
          Continuer mes achats
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* En-tête avec actions */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Mon Panier ({cart.itemCount} articles)
        </h1>
        <div className="flex gap-2">
          {selectedItems.length > 0 && (
            <button
              onClick={handleRemoveSelected}
              className="btn btn-error btn-sm"
            >
              Supprimer ({selectedItems.length})
            </button>
          )}
          <button onClick={clearCart} className="btn btn-outline btn-sm">
            Vider le panier
          </button>
        </div>
      </div>

      {/* Tableau des produits */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={
                      selectedItems.length === cart.items.length &&
                      cart.items.length > 0
                    }
                    onChange={handleSelectAll}
                  />
                </label>
              </th>
              <th className="w-150">Produit</th>
              <th className="">Image</th>
              <th className="w-60">Prix</th>
              <th className="">Quantité</th>
              <th className="w-60">Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.items.map((item) => (
              <tr key={item.id} className="hover">
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleItemSelect(item.id)}
                    />
                  </label>
                </th>
                <td className="">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image || "/placeholder-image.jpg"}
                        alt={item.name}
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "https://via.placeholder.com/150?text=Image";
                        }}
                      />
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{item.price.toFixed(2)} €</td>
                <td className="">
                  <input
                    type="number"
                    className="input input-bordered"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e)}
                    min="1"
                    max="99"
                  />
                </td>
                <td className="font-bold text-blue-600 ">
                  {(item.price * item.quantity).toFixed(2)} €
                </td>
                <td>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 cursor-pointer hover:text-red-600"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Informations supplémentaires */}
      {selectedItems.length > 0 && (
        <div className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>
            {selectedItems.length} article{selectedItems.length > 1 ? "s" : ""}{" "}
            sélectionné{selectedItems.length > 1 ? "s" : ""} (Total:{" "}
            {selectedTotal.toFixed(2)} €)
          </span>
        </div>
      )}

      {/* Actions supplémentaires */}
      <div className="flex justify-center items-center pt-4 border-t">
        <a
          href="/products"
          className="btn border-0 text-white text-lg p-4 transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
        >
          ← Continuer mes achats
        </a>
      </div>
    </div>
  );
}
