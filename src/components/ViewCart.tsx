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
        className="card card-compact dropdown-content bg-base-100 z-1 w-52 shadow"
      >
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <Link to="/cart" className="btn btn-primary btn-block">
              View cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
