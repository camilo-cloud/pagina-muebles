import "./AboutOurMaterials.css";
import "../styles/buttons.css";



export default function AboutOurMaterials() {
    return (
        <div className="container-about-our-materials">
            <div className="about-our-materials-header">
                <h2>Materiales Que Cuentan Historias</h2>
                <button className="btns">NUESTRO CATÁLOGO</button>
            </div>
            <div className="about-our-materials-cards">
                <div className="card-about-our-materials">
                    <div className="card-icon"></div>
                    <h3 className="card-title">Seleccionada a Mano</h3>
                    <p className="card-text">
                        Cada tabla se escoge cuidadosamente para garantizar la mejor veta, durabilidad y belleza.
                    </p>
                </div>
                <div className="card-about-our-materials">
                    <div className="card-icon"></div>
                    <h3 className="card-title">Acabados Naturales</h3>
                    <p className="card-text">
                        Usamos ceras y aceites vegetales que realzan la textura sin ocultar la esencia de la madera.                </p>
                </div>
                <div className="card-about-our-materials">
                    <div className="card-icon"></div>
                    <h3 className="card-title third-title">Trabajo Con Alma</h3>
                    <p className="card-text third-text">
                        Nuestros artesanos ponen su experiencia y cuidado en cada unión, creando piezas únicas con propósito.                </p>
                </div>
            </div>

        </div>

    )
}