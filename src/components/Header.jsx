// Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import '../styles/buttons.css';

// IMPORT logo so Vite bundles it
import chairIcon from '../assets/images/icono-silla-sin-fondo.png';

function Header() {
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
                    className={`title-container ${menuOpen ? 'small' : ''}`}
                >
                    <img
                        className="logo"
                        src={chairIcon}
                        alt="Ícono de silla - logo de MuebleArte"
                        loading="lazy"
                    />
                    <div className="title">
                        <h2>MuebleArte</h2>
                        <h3>Para el hogar</h3>
                    </div>
                </Link>

                <button className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </button>

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
                    <Link to="/donde-comprar" className="btns">DONDE COMPRAR</Link> 
                </nav>
            </header>
        </>
    );
}

export default Header;
