//import { Link } from "react-router-dom";
const Cart = ({inCart,onRemove}) => {
    return ( 
        <div className="product-container">
            {inCart.map((product,index)=>{
                return <div className="product" key={index}>
                    <img
                    src={product.product_full_image}
                    alt={product.product_name}
                    className="product-image"/>
                     <p className="product-name">{product.product_name}</p>
                     <p className="product-price">${product.unit_price}</p> 
                     <p>{product.product_description}</p>
                     <p>rank: {product.ranking}</p>
                     <p>{product.created}</p>
                     <button onClick={()=>onRemove(product)}>Remove</button>
                     </div>
            })}
        </div>
    );
}
export default Cart;