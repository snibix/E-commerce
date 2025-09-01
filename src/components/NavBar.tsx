import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ViewCart from "./ViewCart";

export default function NavBar() {
  const { isAuthenticated, logout } = useAuth();

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
          {/* Cart Dropdown - Composant mis à jour */}
          <ViewCart />

          <div className="dropdown dropdown-end">
            {isAuthenticated ? (
              <>
                <div
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
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-50 p-2 shadow"
                >
                  <li>
                    <button onClick={logout}>Déconnexion</button>
                  </li>
                </ul>
              </>
            ) : (
              <>
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
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
