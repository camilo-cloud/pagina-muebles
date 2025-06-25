import "./ProductCardSales.css"
import '../styles/buttons.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



// Component that displays a product card for sales sections.
// Shows a product image, its title, and a "View More" button.
// Used to present individual products in lists or grids on sales pages.

export default function ProductCardSales({image, title}){
    const [showImagePopup, setShowImagePopup] = useState(false);
    const navigate = useNavigate();
    
    function revealImage(){
        setShowImagePopup(true);
    }

    function hideImagePopup(){
        setShowImagePopup(false);
    }
    function handleBuyButtonClick(event){
        hideImagePopup(); 
        navigate('/donde-comprar');
    }
    return (
        <>
            <div className="card-container">
                <img src={image} alt={`Imagen de ${title}`} />
                <p className="initial-title">{title}</p>
                <div className="card-info">
                    <h3>{title}</h3>
                    <button className="btns" onClick={revealImage}>Ver mas</button>
                </div>
            </div>
            {/* Popup (Lightbox) */}
            {showImagePopup && ( // Conditionally render if showImagePopup is true
                <div className="image-popup-overlay" onClick={hideImagePopup}> {/* Overlay to darken background and close */}
                    <div className="image-popup-content">
                        <img src={image} alt={`Large image of ${title}`} />
                         {/* Button to navigate to DondeComprar */}
                         <button
                            className="btns buy-button"
                            onClick={handleBuyButtonClick}
                        >
                            Donde Comprar
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}