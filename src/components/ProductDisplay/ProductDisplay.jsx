import React, { useContext,useState } from 'react'
import './ProductDisplay.css'
import start_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim repellendus impedit porro
            aliquam unde magni similique dignissimos doloribus illo pariatur! Exercitationem perspiciatis provident
            quasi deserunt, sed ipsa.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div className={selectedSize === 'S' ? 'selected' : ''} onClick={() => handleSizeClick('S')}>S</div>
                    <div className={selectedSize === 'M' ? 'selected' : ''} onClick={() => handleSizeClick('M')}>M</div>
                    <div className={selectedSize === 'L' ? 'selected' : ''} onClick={() => handleSizeClick('L')}>L</div>
                    <div className={selectedSize === 'XL' ? 'selected' : ''} onClick={() => handleSizeClick('XL')}>XL</div>
                    <div className={selectedSize === 'XXL' ? 'selected' : ''} onClick={() => handleSizeClick('XXL')}>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductDisplay