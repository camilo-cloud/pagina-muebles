import SectionBanner from "../components/SectionBanner";
import productCards from "../data/productData";
import mesas from "../data/mesaData";
import sillas from "../data/sillaData";
import sofas from "../data/sofaData";
import ProductCardSales from "../components/ProductCardSales";
import "./Catalog.css";
import "../styles/ProductCardStyles.css";

export default function Catalog() {
  return (
    <div className="catalog-page">
      <SectionBanner
    title="Catálogo"
    image={productCards[0].image}
    color1="#2e2e2e"
    color2="#f5f5f5"
    imageOffset={-400}
    flipImage={true}
  />

      <section className="container">
        <h2>Mesas</h2>
        <div className="container-product-cards">
          {mesas.map((mesa) => (
            <ProductCardSales key={mesa.name} title={mesa.name} image={mesa.image} />
          ))}
        </div>

        <h2>Sillas</h2>
        <div className="container-product-cards">
          {sillas.map((silla) => (
            <ProductCardSales key={silla.name} title={silla.name} image={silla.image} />
          ))}
        </div>

        <h2>Sofás</h2>
        <div className="container-product-cards">
          {sofas.map((sofa) => (
            <ProductCardSales key={sofa.name} title={sofa.name} image={sofa.image} />
          ))}
        </div>
      </section>
    </div>
  );
}

// This component displays the catalog page, showing tables, chairs, and sofas grouped with their product cards.
