import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>
                    © {new Date().getFullYear()} MuebleArte | Todos los derechos reservados | Creado por{" "}
                    <a className="designer" href="https://github.com/camilo-cloud" target="_blank" rel="noopener noreferrer">
                        Camilo Cuartas
                    </a>
                </p>
            </div>
        </footer>
    );
}