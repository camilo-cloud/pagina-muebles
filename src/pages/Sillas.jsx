import SectionBanner from "../components/SectionBanner";
import productCards from "../data/productData";
import sillas from "../data/sillaData";
import ProductCardSales from "../components/ProductCardSales";
import "./Sillas.css"

export default function Sillas() {
    
    
    return (
        <>
            <SectionBanner
            title={productCards[0].title}
            image={productCards[0].image}
            color1={productCards[0].color1}
            color2={productCards[0].color2}
            imageOffset={-300} // ADDED: specific offset for sillas image
            />
            <section className="container">
                <h2>La mejor selección de Sillas</h2>
                <div className="container-chairs">
                    {sillas.map(silla => (
                        <ProductCardSales 
                            key={silla.name} 
                            title={silla.name} 
                            image={silla.image} />
                    ))}
                </div>
            </section>
        </>
        
    );
}
// This component imports SectionBanner and productCards, then renders the SectionBanner with specific props for the "Sillas" section.