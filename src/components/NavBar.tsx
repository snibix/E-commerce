import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar bg-base-200 shadow-sm flex flex-col h-15 justify-center">
      <div className="flex w-[1200px] mx-auto justify-between items-center">
        <div className="flex">
          <Link
            to="/"
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-4xl"
          >
            D&J
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/" className="hover:text-blue-600">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-600">
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-blue-600">
                  Catégories
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-blue-600">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-5">
          {/* Cart Dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <ShoppingBagIcon className="h-7 w-10" />
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
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

          {/* Profile Dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-8 rounded">
                <img
                  alt="Profile"
                  src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/login" className="justify-between">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup">Inscription</Link>
              </li>
            </ul>
            {/* <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/orders">Mes commandes</Link>
              </li>
              <li>
                <Link to="/wishlist">Liste de souhaits</Link>
              </li>
              <li>
                <Link to="/settings">Paramètres</Link>
              </li>
              <li>
                <button>Déconnexion</button>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
