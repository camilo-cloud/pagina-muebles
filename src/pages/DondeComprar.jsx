import React from 'react';
import "./DondeComprar.css"; 
import "../styles/buttons.css";
import sofa2 from "../assets/images/sofas/sofa2.jpg";
import localPhoto from "../assets/images/local.PNG";


export default function DondeComprar() {
    const phoneNumber = "(123) 456 7890";
    const whatsappNumber = "+57 xxx xxxx xxxx"; 
    const emailAddress = "xxxxx@xxxxxxxx.com";
    const officeAddress = "Cra. 10 #1-69, Jamundí, Valle del Cauca";
    const operatingHours = "Lunes a Sábado, 9am - 6pm";


    // Function to open Google Maps directions
    const openGoogleMapsDirections = () => {
        const encodedAddress = encodeURIComponent(officeAddress);
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
    };

    return (
        <div className="donde-comprar-container">

            {/* Banner Section */}
            <section className="donde-comprar-banner">
                <div className="banner-content">
                    <h1>CONOCE NUESTRA SEDE</h1>
                </div>
                <div className="banner-image">
                    <img src={sofa2} alt="Sofá de Ejemplo" />
                </div>
            </section>

            {/* Info Section: Where to Buy? */}
            <section className="donde-comprar-info-intro">
                 <h2>¿Dónde Comprar?</h2>
                 <p>Visítanos en nuestra sede o contáctanos a través de los siguientes medios.</p>
            </section>

            {/* Map and Address Section */}
            <section className="donde-comprar-map-address">
                <div className="google-map-placeholder">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d995.8448454256645!2d-76.54526800000001!3d3.255567!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e309fcc39b07889%3A0xd834572c5d76dd9e!2sLa%20koztillota!5e0!3m2!1sen!2sco!4v1750874653593!5m2!1sen!2sco" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="address-info">
                    <p><strong>Dirección:</strong> {officeAddress}</p>
                </div>
            </section>

            {/* Contact Details and Hours */}
            <section className="donde-comprar-contact-hours">
                 <div className="contact-details">
                     {/* Phone */}
                     <p><strong>Teléfono:</strong> {phoneNumber} <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="contact-link">[Llamar]</a></p>
                     {/* WhatsApp */}
                     <p><strong>WhatsApp:</strong> {whatsappNumber} 
                        <a
                            href={`https://wa.me/${whatsappNumber.replace(/[\s()+-]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            [Escribir]
                        </a>
                    </p>
                     {/* Email */}
                     <p><strong>Email:</strong> {emailAddress} <a href={`mailto:${emailAddress}`} className="contact-link">[Contactar]</a></p>
                 </div>
                 <div className="hours-info">
                     <p><strong>Horario:</strong> {operatingHours}</p>
                 </div>
            </section>

            {/* Photo of the Local and How to Get There */}
            <section className="donde-comprar-local-photo">
                 <div className="local-photo">
                     <img src={localPhoto} alt="Foto de Nuestro Local" /> 
                 </div>
                 <div className="get-directions">
                     {/* Button to open Google Maps Directions */}
                     <button onClick={openGoogleMapsDirections} className="btns">¿Cómo llegar?</button>
                 </div>
            </section>
        </div>
    );
}
