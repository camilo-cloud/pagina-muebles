// SectionBanner.jsx
import "./SectionBanner.css";

export default function SectionBanner({ title, image, color1, color2, imageOffset = 0 }) {
    return (
        <div
            className="section-banner"
            style={{
                "--bg-color1": color1,
                "--bg-color2": color2,
                "--image-offset": `${imageOffset}px` // ADDED: dynamic horizontal image shift
            }}
        >
            <h1 className="section-title">{title}</h1> {/* CHANGED: dynamic title */}
            <img className="flip-horizontal" src={image} alt={`portada ${title}`} />
        </div>
    );
}
