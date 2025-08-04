import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import "../styles/buttons.css";

// IMPORT the images so Vite can bundle them
import sala from '../assets/images/sala.jpg';
import sala2 from '../assets/images/sala2.jpg';
import sala3 from '../assets/images/sala3.jpg';

const slides = [
    {
        src: sala,
        title: "Orgullosamente producto colombiano",
        description: "NO IMPORTA TU ESTILO, LO TENEMOS.",
    },
    {
        src: sala2,
        title: "Muebles con diseño único",
        description: "HECHOS PARA DURAR Y ENCANTAR.",
    },
    {
        src: sala3,
        title: "Comodidad y estilo en un solo lugar",
        description: "INSPÍRATE Y RENUEVA TU HOGAR.",
    },
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hero">
            {slides.map((slide, i) => (
                <img
                    key={i}
                    src={slide.src}
                    alt={slide.title} // más descriptivo
                    className={`hero-image ${i === index ? "active" : ""}`}
                    loading="lazy"
                />
            ))}
            <div className="hero-overlay">
                <h2 className="hero-title">
                    {slides[index].title
                        .split(" ")
                        .slice(0, -2)
                        .join(" ") + " "}
                    <span>{slides[index].title.split(" ").slice(-2).join(" ")}</span>
                </h2>
                <h3 className="hero-description">{slides[index].description}</h3>
                <div className="botones">
                    <Link to="/donde-comprar" className="btns-black">Compra aqui</Link>
                    <div className="hero-controls">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                className={`dot ${i === index ? "active" : ""}`}
                                onClick={() => setIndex(i)}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
