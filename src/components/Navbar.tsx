import { useEffect, useState } from "react";
import "../styles/Navbar.css";

export const Navbar = () => {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    // Cantidad provisoria de productos en el carrito
    const cartCount = 0;

    // Aplicar el tema seleccionado
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark((previousTheme) => !previousTheme);
    };

    return (
        <header className="navbar">
            <div className="navbar__container">

                {/* Logo */}
                <a href="/" className="navbar__brand">
                    <div className="navbar__logo">
                        SA
                    </div>

                    <span className="navbar__brand-name">
                        Solange Aimery
                    </span>
                </a>

                {/* Acciones */}
                <div className="navbar__actions">

                    {/* Carrito */}
                    <button
                        className="navbar__cart-button"
                        aria-label={`Carrito de compras: ${cartCount} productos`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="23"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>

                        <span className="navbar__cart-count">
                            {cartCount}
                        </span>
                    </button>

                    {/* Selector de tema */}
                    <button
                        className="navbar__theme-button"
                        onClick={toggleTheme}
                        aria-label={
                            isDark
                                ? "Activar modo claro"
                                : "Activar modo oscuro"
                        }
                        aria-pressed={isDark}
                        title={isDark ? "Modo claro" : "Modo oscuro"}
                    >
                        {isDark ? (
                            // Sol
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="4" />
                                <path d="M12 2v2" />
                                <path d="M12 20v2" />
                                <path d="m4.93 4.93 1.42 1.42" />
                                <path d="m17.65 17.65 1.42 1.42" />
                                <path d="M2 12h2" />
                                <path d="M20 12h2" />
                                <path d="m6.35 17.65-1.42 1.42" />
                                <path d="m19.07 4.93-1.42 1.42" />
                            </svg>
                        ) : (
                            // Luna
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6.5 6.5 0 0 0 8.268 8.268c.344-.215.825-.003.803.401" />
                            </svg>
                        )}
                    </button>

                </div>
            </div>
        </header>
    );
};