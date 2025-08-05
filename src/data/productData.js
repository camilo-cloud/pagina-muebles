

import sillaMadera from "../assets/images/silla-madera.png";
import mesa from "../assets/images/mesa.png";
import sofaGrande from "../assets/images/sofa-grande.png";
import repisa from "../assets/images/repisa.png";

const productCards = [
    {
        title: "Sillas Clásicas",
        image: sillaMadera,
        color1: "#615e5d",
        color2: "#4d4c4c",
        route: "/sillas"
    },
    {
        title: "Mesas",
        image: mesa,
        color1: "rgb(129, 220, 243)",
        color2: "rgb(85, 175, 197)",
        route: "/mesas"
    },
    {
        title: "Sofás",
        image: sofaGrande,
        color1: "#d1aa55",
        color2: "#c49a41",
        route: "/sofas"
    },
    {
        title: "Accesorios",
        image: repisa,
        color1: "#87f7c2",
        color2: "#53f1a7",
        route: "/accesorios"
    }
];

export default productCards;
