import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";


const ProductDetails = () =>{
    let { index } = useParams();
    const [product, setProduct] = useState([])

    useEffect(() => {
        try {
        fetch(`http://ecommerce.muersolutions.com/api/v1/products`)
        .then(res => res.json())
        .then(data => setProduct(data[index]))   
        } catch (error) {
            alert(error);   
        }
        
    },[index])

    if (!product){
        return <div>loading...</div>
    }
    return (
        <div>
           <img
              src={product.product_full_image}
              alt={product.product_name}
              className="product-image"
            />
            <p className="product-name">{product.product_name}</p>
            <p className="product-price">${product.unit_price}</p> 
            <p>{product.product_description}</p>
            <p>{product.ranking}</p>
            <p>{product.created}</p>
            <button className="add-to-cart-button">Add to Cart</button>
            
        </div>
    )
}

export default ProductDetails;