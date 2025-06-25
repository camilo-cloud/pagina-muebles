import "./SectionBanner.css";

export default function SectionBanner({ title, image, color1, color2, imageOffset = 0, flipImage = false}) {
    return (
        <div
            className="section-banner"
            style={{
                "--bg-color1": color1,
                "--bg-color2": color2,
                "--image-offset": `${imageOffset}px` // dynamic horizontal image shift
            }}
        >
            <h1 className="section-title">{title}</h1> 
            {/* Conditionally apply the 'flip-horizontal' class based on the 'flipImage' prop */}
            <img
                className={`section-banner-image ${flipImage ? 'flip-horizontal' : ''}`} 
                src={image}
                alt={`portada ${title}`}
            />
        </div>
    );
}
