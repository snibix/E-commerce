import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <ShoppingBagIcon className="h-7 w-10" />
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 w-50 shadow"
      >
        <div className="card-body text-center">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $899</span>
          <div className="card-actions flex justify-center">
            <Link to="/cart">
              <button className="btn border-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 text-xl">
                View cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
