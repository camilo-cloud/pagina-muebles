// Header.jsx
// ---------------------------------------------------------------------
// ADDED from line 1 – hook for menu state
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import '../styles/buttons.css';

function Header() {
    // ADDED from line 7 – state & toggle handler
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
        <>
            <div className="bar">
                <Link to="/empresa">Nuestra compañía</Link>
            </div>

            <header className="header">
                <Link
                    to="/"
                    className={`title-container ${menuOpen ? 'small' : ''}`} // <-- clase condicional
                >

                    <img
                        className="logo"
                        src="/src/assets/images/icono-silla-sin-fondo.png"
                        alt="logo"
                    />
                    <div className="title">
                        <h2>MuebleArte</h2>
                        <h3>Para el hogar</h3>
                    </div>
                </Link>

                {/* ADDED from line 26 – hamburger button */}
                <button className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </button>

                {/* CHANGED from line 31 – nav gets dynamic class */}
                <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
                    <ul className="navbar-list">
                        <li>
                            <Link to="/sillas">Sillas</Link>
                        </li>
                        <li>
                            <Link to="/mesas">Mesas</Link>
                        </li>
                        <li>
                            <Link to="/sofas">Sofás</Link>
                        </li>
                        <li>
                            <Link to="/accesorios">Accesorios</Link>
                        </li>
                    </ul>
                    <button className="btns">DONDE COMPRAR</button>
                </nav>
            </header>
        </>
    );
}

export default Header;
