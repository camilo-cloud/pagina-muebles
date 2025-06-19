import "./ProductCardSales.css"
import '../styles/buttons.css';


export default function ProductCardSales({image, title}){
    return (
    
            <div className="card-container">
                <img src={image} alt="Silla1" />
                <p className="initial-title">{title}</p>
                <div className="card-info">
                    <h3>{title}</h3>
                    <button className="btns">Ver mas</button>
                </div>
            </div>
    )
}