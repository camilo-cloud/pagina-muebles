import SectionBanner from "../components/SectionBanner";
import productCards from "../data/productData";
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
                    <ProductCardSales image={productCards[0].image} title={"Silla1"}/>
                    <ProductCardSales image={productCards[0].image} title={"Silla2"}/>
                    <ProductCardSales image={productCards[0].image} title={"Silla3"}/>
                    <ProductCardSales image={productCards[0].image} title={"Silla4"}/>
                </div>
            </section>
        </>
        
    );
}
// This component imports SectionBanner and productCards, then renders the SectionBanner with specific props for the "Sillas" section.