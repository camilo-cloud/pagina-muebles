import "./ProductCard.css";

export default function ProductCard({ name, image, color1, color2 }) {
    return (
        <div className="product-card" >
            <div
                className="product-card-image-wrapper"
                style={{
                    background: `linear-gradient(to bottom, ${color1} 70%, ${color2} 30%)`
                }}
            >
                <img className="product-card-image" src={image} alt={`Imagen de ${name.toLowerCase()}`} />
            </div>
            <h3 className="product-card-title">{name}</h3>
        </div>

    )
}