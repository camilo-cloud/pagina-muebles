import { Link } from "react-router-dom";
import "./VisitUs.css";
import "../styles/buttons.css";
import backgroundImage from "../assets/images/referencia.png";

export default function VisitUs() {
    return (
        <div className="container-visitUs">
            <div className="title-button">
                <h2>Visita nuestro local hoy!</h2>
                <div className="btn-container">
                    <Link to="/donde-comprar" className="btns-black btn">VISÍTANOS</Link>
                </div>
            </div>
            <img src={backgroundImage} alt="imagen de fondo patrón diamantes" />
        </div>
    )
}