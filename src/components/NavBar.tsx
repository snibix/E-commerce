import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ViewCart from "./ViewCart";

export default function NavBar() {
  const { isAuthenticated, logout } = useAuth();
  const [theme, setTheme] = useState<string>("light");

  // Détecter le thème préféré au chargement
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  // Basculer entre les thèmes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

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

        <div className="flex gap-3 items-center">
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
          <div className="ms-20">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle"
              title={theme === "light" ? "Mode sombre" : "Mode clair"}
            >
              {theme === "light" ? (
                // Icône lune pour passer en dark mode
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                // Icône soleil pour passer en light mode
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
