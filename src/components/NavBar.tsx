import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar bg-base-200 shadow-sm flex flex-col h-15 justify-center">
      <div className="flex w-[1200px] mx-auto justify-between">
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
              {/* <li>
                <Link to="/offers" className="hover:text-blue-600">
                  Promotions
                </Link>
              </li> */}
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

        <div>
          {/* Cart Dropdown */}
          {/* <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
               
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
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
          </div> */}

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
