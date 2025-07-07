import { Link } from "react-router-dom";
import './ContactSection.css';


export default function ContactSection() {
    return (
        <section className="contact-section">
            <div className="contact-left">
                <div className="contact-info">
                    <div className="contact-box">
                        <p className="contact-number">Número Teléfono</p>
                        <span className="contact-label">Muebles</span>
                    </div>
                    <div className="contact-box">
                        <p className="contact-number">Número Teléfono</p>
                        <span className="contact-label">Accesorios</span>
                    </div>
                </div>

                <div className="contact-links">
                    <div className="contact-links-left">
                        <h4>¿QUIÉNES SOMOS?</h4>
                        <Link to="/empresa">Nuestra Empresa</Link>
                        <Link to="/donde-comprar">Contacto</Link>
                    </div>
                    <div className='contact-links-right'>
                        <h4>CATÁLOGO</h4>
                        <Link to="/mesas">Mesas</Link>
                        <Link to="/sillas">Sillas</Link>
                        <Link to="/sofas">Sofás</Link>
                        <Link to="/accesorios">Accesorios</Link>
                    </div>
                </div>
            </div>

            <div className="contact-right">
                <h2>Recibe Noticias y Actualizaciones</h2>
                <p>Suscríbete a nuestra lista de correo.</p>
                <form
                    action="https://formspree.io/f/xrbqnnzb"
                    method="POST"
                    className="email-form"
                >
                    <input
                        type="email"
                        name="email"
                        placeholder="Ingresa tu correo electrónico..."
                        required
                    />
                    <button type="submit">ENVIAR</button>
                </form>
            </div>
        </section>
    );
}
