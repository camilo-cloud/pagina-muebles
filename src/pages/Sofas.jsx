import SectionBanner from "../components/SectionBanner";
import productCards from "../data/productData";
import sofas from "../data/sofaData";
import ProductCardSales from "../components/ProductCardSales";
import "../styles/ProductCardStyles.css"

export default function Sofas() {
    
    
    return (
        <>
            <SectionBanner
            title={productCards[2].title}
            image={productCards[2].image}
            color1={productCards[2].color1}
            color2={productCards[2].color2}
            imageOffset={-400} 
            />
            <section className="container">
                <h2>La mejor selección de Sofás</h2>
                <div className="container-product-cards">
                    {sofas.map(sofa => (
                        <ProductCardSales 
                            key={sofa.name} 
                            title={sofa.name} 
                            image={sofa.image} />
                    ))}
                </div>
            </section>
        </>
        
    );
}
