import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

const ProductDetails = ({addToCart}) => {
    let { index } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        try {

           <div className="product">
           <img
              src={product.product_full_image}
              alt={product.product_name}
              className="product-image"
            />
            <p className="product-name">{product.product_name}</p>
            <h2 className="product-price">${product.unit_price}</h2> 
            <h6>Description: {product.product_description}</h6>
            <p>Rank: {product.ranking}</p>
            <h6>Created On: {product.created}</h6>
            <button onClick={()=>addToCart(product)} className="add-to-cart-button">Add to Cart</button>
           </div>
            

        </div>
    )
}

export default ProductDetails;
