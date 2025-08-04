import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import '../styles/buttons.css';
import './Home.css';
import ProductCard from "./ProductCard";
import useFadeInOnScroll from "../components/useFadeInOnScroll";
import AboutOurMaterials from "../components/AboutOurMaterials";
import AboutOurStyleSection from "../components/AboutOurStyleSection";
import VisitUs from "../components/VisitUs";
import ContactSection from "../components/ContactSection";

import productCards from "../data/productData"; // Importing productCards from shared data file      

export default function Home() {
    // REMOVED: local hardcoded productCards array (now imported from productData.js)

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
                    <Link className="btns" to="/catalog">OBSERVA LA DIFERENCIA</Link>
                </div>
                <div className="right-card">
                    <img className="right-card-img" src={productCards[2].image} alt="Sofá" />
                    <div className="right-card-text-button">
                        <h2 className="right-card-title">EXPLORA NUESTRA GRAN COLECCIÓN DE MUEBLES</h2>
                        <Link className="btns" to="/catalog">VERLOS TODOS</Link>
                    </div>
                </div>
            </section>

            {/* Product Cards Section */}
            <div
                ref={cardsRef}
                className={`product-cards-section fade-in-section ${cardsVisible ? 'visible' : ''}`}
            >
                {/* CHANGED: productCards now comes from shared data file */}
                {productCards.map(card => (
                    <Link to={card.route} key={card.title} style={{ textDecoration: "none" }}>
                        <ProductCard
                            title={card.title}
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
