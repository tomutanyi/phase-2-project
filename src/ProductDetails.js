import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

const ProductDetails = ({addToCart}) => {
    let { index } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        try {
            fetch('http://ecommerce.muersolutions.com/api/v1/products', {
                method: 'GET',
                headers: {
                  'Content-Security-Policy': 'upgrade-insecure-requests'
                }
              })
            .then(res => res.json())
            .then(data => setProduct(data[index]))
            .catch(error => alert(error));   
        } catch (error) {
            alert(error);   
        }
    }, [index]);

    if (!product) {
        return <div>Loading...</div>
    }

    return (
        <div className="product-container">
            <div className="product">
                <img
                    src={product.product_full_image}
                    alt={product.product_name}
                    className="product-image"
                />
                <p className="product-name">{product.product_name}</p>
                <p className="product-price">${product.unit_price}</p> 
                <p>{product.product_description}</p>
                <p>Rank: {product.ranking}</p>
                <p>{product.created}</p>
                <button onClick={() => addToCart(product)} className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetails;
