import { Link } from "react-router-dom";
import "../styles/buttons.css"
import "./AboutOurStyleSection.css"
import Sofa from "../assets/images/sofa3.jpeg";

export default function AboutOurStyleSection() {
    return (
        <section className="about-our-style">
            <h2>COMPARA NUESTRO ESTILO</h2>
            <div className="style-container">
                <div className="style-description">
                    <p>
                        Fusionamos tradición y modernidad en cada pieza, cuidando cada unión y acabado para que tu espacio refleje autenticidad y calidez.
                    </p>
                    <Link to="/catalog" className="btns-black">VER CATÁLOGO</Link>
                </div>
                <div className="style-image">
                    <img src={Sofa} alt="Estilos de sofá" />
                </div>
            </div>
        </section>
    )
}