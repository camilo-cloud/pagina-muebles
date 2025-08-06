// Header.jsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import '../styles/buttons.css';
import chairIcon from '../assets/images/icono-silla-sin-fondo.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen((prev) => !prev);

    // References to the nav and hamburger button for detecting outside clicks
    const navRef = useRef(null);
    const buttonRef = useRef(null);

    // Effect to close the menu when clicking outside of the nav or hamburger
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                navRef.current &&
                !navRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
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

                <button ref={buttonRef} className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </button>

                <nav ref={navRef} className={`navbar ${menuOpen ? 'open' : ''}`}>
                    <ul className="navbar-list">
                        <li>
                            <Link to="/sillas" onClick={() => setMenuOpen(false)}>Sillas</Link>
                        </li>
                        <li>
                            <Link to="/mesas" onClick={() => setMenuOpen(false)}>Mesas</Link>
                        </li>
                        <li>
                            <Link to="/sofas" onClick={() => setMenuOpen(false)}>Sofás</Link>
                        </li>
                        {/* <li>
                            <Link to="/accesorios" onClick={() => setMenuOpen(false)}>Accesorios</Link>
                        </li> */}
                    </ul>
                    <Link to="/donde-comprar" className="btns" onClick={() => setMenuOpen(false)}>DONDE COMPRAR</Link> 
                </nav>
            </header>
        </>
    );
}

export default Header;
