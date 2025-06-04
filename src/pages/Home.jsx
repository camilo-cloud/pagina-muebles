import { Link } from "react-router-dom";
import Hero from "../components/Hero"
import '../styles/buttons.css';
import './Home.css';
import ProductCard from "./ProductCard";
import useFadeInOnScroll from "../components/useFadeInOnScroll";
import AboutOurMaterials from "../components/AboutOurMaterials";
import AboutOurStyleSection from "../components/AboutOurStyleSection";
import VisitUs from "../components/VisitUs";
import ContactSection from "../components/ContactSection";



//imágenes
import sofaImage from '../assets/images/sofa.jpg';
import sillaMadera from '../assets/images/silla-madera.png';
import sofaGrande from '../assets/images/sofa-grande.png';
import mesa from '../assets/images/mesa.png';
import repisa from '../assets/images/repisa.png';



export default function Home() {

    const productCards = [
        {
            name: "Sillas",
            image: sillaMadera,
            color1: "#615e5d",
            color2: "#4d4c4c",
            route: "/sillas"
        },
        {
            name: "Mesas",
            image: mesa,
            color1: "rgb(129, 220, 243)",
            color2: "rgb(85, 175, 197)",
            route: "/mesas"
        },
        {
            name: "Sofás",
            image: sofaGrande,
            color1: "#d1aa55",
            color2: "#c49a41",
            route: "/sofas"
        },
        {
            name: "Accesorios",
            image: repisa,
            color1: "#87f7c2",
            color2: "#53f1a7",
            route: "/accesorios"
        }
    ];


    const [midRef, midVisible] = useFadeInOnScroll();
    const [cardsRef, cardsVisible] = useFadeInOnScroll();
    const [aboutRef, aboutVisible] = useFadeInOnScroll();

    return (
        <>
            <Hero />

            {/* Mid Section */}
            <section
                ref={midRef}
                className={`container-home-midsection fade-in-section ${midVisible ? 'visible' : ''}`}
            >
                <div className="left-card">
                    <div className="diamond-divider-wrapper">
                        <span className="diamond-shape"></span>
                    </div>
                    <h2 className="left-card-title">Hechos a mano en Colombia</h2>
                    <button className="btns">OBSERVA LA DIFERENCIA</button>
                </div>
                <div className="right-card">
                    <img className="right-card-img" src={sofaImage} alt="Sofá" />
                    <div className="right-card-text-button">
                        <h2 className="right-card-title">EXPLORA NUESTRA GRAN COLECCIÓN DE MUEBLES</h2>
                        <button className="btns">VERLOS TODOS</button>
                    </div>

                </div>
            </section>

            {/* Product Cards Section */}
            <div
                ref={cardsRef}
                className={`product-cards-section fade-in-section ${cardsVisible ? 'visible' : ''}`}
            >
                {productCards.map(card => (
                    <Link to={card.route} key={card.name} style={{ textDecoration: "none" }}>
                        <ProductCard
                            name={card.name}
                            image={card.image}
                            color1={card.color1}
                            color2={card.color2}
                        />
                    </Link>
                ))}
            </div>

            {/* About Our Materials Section */}
            <div ref={aboutRef}
                className={` fade-in-section ${aboutVisible ? 'visible' : ''}`}>
                <AboutOurMaterials />

            </div>

            {/* Section Separator */}
            <div className="section-separator">
                <span className="diamond-shape-large"></span>
            </div>

            <AboutOurStyleSection />
            <VisitUs />
            <ContactSection />
        </>

    )
}