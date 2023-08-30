import { Component } from "react"
import { FaAddressBook } from "react-icons/fa"

// clicking on checkout adds everything from 
// the cart to the checkout page

// it also removes everything present in the cart

// The checkout page has a payment process 
// and address field. After 
// confirming checkout it adds the prices of all items
// and generates a receipt which is passed to a Component

// called orders

// first and last name
// country 
// county
// Address
// payment method


const Checkout = () => {
    return ( 
        <div>
            <label>First Name</label>
            <input placeholder="First Name"/>
            <label>Last Name</label>
            <input placeholder="Last Name"/>
            <label>Telephone number</label>
            <input placeholder="Telephone number"/>
            <label>Country</label>
            <input placeholder="Country"/>
            <label>County</label>
            <input placeholder="County"/>
            <label>City</label>
            <input placeholder="City"/>
            <label>Address</label>
            <input placeholder="Address"/>
            <label>Payment Method</label>
            <input placeholder="Payment Method"/>
            
        </div>


     );
}
 
export default ;