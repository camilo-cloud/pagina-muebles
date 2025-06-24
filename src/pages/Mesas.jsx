import SectionBanner from "../components/SectionBanner";
import productCards from "../data/productData";
import mesas from "../data/mesaData";
import ProductCardSales from "../components/ProductCardSales";
import "../styles/ProductCardStyles.css"

export default function Mesas() {
    
    
    return (
        <>
            <SectionBanner
            title="Mesas clásicas"
            image={productCards[1].image}
            color1={productCards[1].color1}
            color2={productCards[1].color2}
            imageOffset={-400} 
            />
            <section className="container">
                <h2>La mejor selección de Mesas</h2>
                <div className="container-product-cards">
                    {mesas.map(mesa => (
                        <ProductCardSales 
                            key={mesa.name} 
                            title={mesa.name} 
                            image={mesa.image} />
                    ))}
                </div>
            </section>
        </>
        
    );
}
// This component imports SectionBanner and productCards, then renders the SectionBanner with specific props for the "mesas" section.