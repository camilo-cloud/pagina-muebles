import SectionBanner from "../components/SectionBanner";
import productCards from "../data/productData";

export default function Sillas() {
    return (
        <SectionBanner
            title={productCards[0].title}
            image={productCards[0].image}
            color1={productCards[0].color1}
            color2={productCards[0].color2}
            imageOffset={-300} // ADDED: specific offset for sillas image
        />
    );
}
// This component imports SectionBanner and productCards, then renders the SectionBanner with specific props for the "Sillas" section.