import earringsBeige from '../assets/earrings_beige.jpg';
import earringsBlack from '../assets/earrings_black.jpg';
import earringsSphere from '../assets/earrings_sphere.jpg';
import earringsBronze from '../assets/earrings_bronze.jpg';
import earringsLong from '../assets/earrings_long.jpg';
import earringsPink from '../assets/earrings_pink.jpg';


function Gallery() {
    return (
        <div className="gallery">
            <div className="row">
                <div className="imageCard">
                    <img src={earringsBeige} alt="Beige Petal Earrings" className="img" />
                    <h2 className="imgHeader">Beige Petal Earrings</h2>
                    <p className="pricetag">$29.99</p>
                    <button className="buy-btn">Add to cart</button>
                </div>
                <div className="imageCard">
                    <img src={earringsBlack} alt="Black Drop Earrings" className="img" />
                    <h2 className="imgHeader">Black Drop Earrings</h2>
                    <p className="pricetag">$24.99</p>
                    <button className="buy-btn">Add to cart</button>
                </div>
                <div className="imageCard">
                    <img src={earringsSphere} alt="Gold Sphere Earrings" className="img" />
                    <h2 className="imgHeader">Gold Sphere Earrings</h2>
                    <p className="pricetag">$14.99</p>
                    <button className="buy-btn">Add to cart</button>
                </div>
            </div>
            <div className="row">
                <div className="imageCard">
                    <img src={earringsBronze} alt="Rose Drop Earrings" className="img" />
                    <h2 className="imgHeader">Rose Drop Earrings</h2>
                    <p className="pricetag">$29.99</p>
                    <button className="buy-btn">Add to cart</button>
                </div>
                <div className="imageCard">
                    <img src={earringsLong} alt="Pink Longer Earrings" className="img" />
                    <h2 className="imgHeader">Pink Longer Earrings</h2>
                    <p className="pricetag">$34.99</p>
                    <button className="buy-btn">Add to cart</button>
                </div>
                <div className="imageCard">
                    <img src={earringsPink} alt="Pink Petal Earrings" className="img" />
                    <h2 className="imgHeader">Pink Petal Earrings</h2>
                    <p className="pricetag">$39.99</p>
                    <button className="buy-btn">Add to cart</button>
                </div>
            </div>
        </div>
      );
}

export default Gallery;