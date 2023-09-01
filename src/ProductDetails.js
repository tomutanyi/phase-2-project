import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

const ProductDetails = ({addToCart}) =>{
    let { index } = useParams();
    const [product, setProduct] = useState([])
useEffect(() => {
    try {
        fetch("http://ecommerce.muersolutions.com/api/v1/products",{
            method:"GET",
            headers:{"Content-Security-Policy":"upgrade-insecure-requests"}
        })
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
    <div className="details-container">
       <div className="picture">
       <img
          src={product.product_full_image}
          alt={product.product_name}
          className="detail-image"
        />
         </div>
        <div className='additional-details'>
            <p className="detail-name">{product.product_name}</p> <br />
            <h5 className="detail-description">Description: {product.product_description}</h5> <br />
            <h5 className="detail-created">Created On: {product.created}</h5> <br />
            <p className="detail-description">Rank: {product.ranking}</p> <br />
            <h2 className="detail-price">${product.unit_price}</h2> 
            <button onClick={()=>addToCart(product)} className="add-to-cart-button">Add to Cart</button>
       </div>
    </div>
)
}
export default ProductDetails;