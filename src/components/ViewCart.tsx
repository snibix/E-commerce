import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Ajustez le chemin

export default function ViewCart() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (e: MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    removeFromCart(id);
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>

          {cart.itemCount > 0 && (
            <span className="badge badge-sm indicator-item bg-red-500 text-white border-0">
              {cart.itemCount}
            </span>
          )}
        </div>
      </div>

      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-80 bg-base-100 shadow-xl"
      >
        <div className="card-body">
          <span className="font-bold text-lg">
            {cart.itemCount} Article{cart.itemCount > 1 ? "s" : ""}
          </span>

          {cart.items.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              Votre panier est vide
            </p>
          ) : (
            <>
              <div className="max-h-60 overflow-y-auto space-y-3">
                {cart.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 bg-base-200 rounded-lg"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {item.price.toFixed(2)} €
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          className="btn btn-xs btn-outline"
                        >
                          -
                        </button>
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className="btn btn-xs btn-outline"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="font-bold text-sm">
                        {(item.price * item.quantity).toFixed(2)} €
                      </span>
                      <button
                        onClick={(e) => handleRemoveItem(e, item.id)}
                        className="btn btn-xs btn-error btn-outline"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-3">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-lg text-blue-600">
                    {cart.total.toFixed(2)} €
                  </span>
                </div>
                <div className="card-actions">
                  <Link
                    to="/cart"
                    className="btn border-0 text-white text-md p-4 transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 "
                  >
                    Voir le panier
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
