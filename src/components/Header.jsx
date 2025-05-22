import { Link } from 'react-router-dom';
import "./Header.css"
import '../styles/buttons.css'

function Header() {
    return (
        <>
            <div className="bar">
                <Link to="/empresa">Nuestra compañía</Link>
            </div>
            <header className='header'>
                <Link to="/" className='contenedor-titulo'>
                    <img className='logo' src="/src/assets/images/icono-silla-sin-fondo.png" alt="logo" />
                    <div className="titulo">
                        <h2>MuebleArte</h2>
                        <h3>Para el hogar</h3>
                    </div>
                </Link>
                <nav className='navegador'>
                    <ul className='navegador-ul'>
                        <li><Link to="/mesas">Mesas</Link></li>
                        <li><Link to="/sillas">Sillas</Link></li>
                        <li><Link to="/accesorios">Accesorios</Link></li>
                    </ul>
                    <button className='btns'>DONDE COMPRAR</button>
                </nav>
            </header>
        </>
    );
}

export default Header;
