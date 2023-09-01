const Footer = () => {
    return (

      <footer className="footer">
      <div className="footer-content">
          <div className="footer-section left">
              <h3>Customer Service</h3>
              <ul>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Shipping & Returns</a></li>
                  <li><a href="#">Track Your Order</a></li>
              </ul>
          </div>
          <div className="footer-section center">
              <h3>Shop With Us</h3>
              <ul>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">Brands</a></li>
                  <li><a href="#">Deals & Discounts</a></li>
                  <li><a href="#">Gift Cards</a></li>
              </ul>
          </div>
          <div className="footer-section right">
              <h3>Stay Connected</h3>
              <ul>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Newsletter</a></li>
                  <li><a href="#">Social Media</a></li>
              </ul>
          </div>
      </div>
      <div className="footer-bottom">
          <p>&copy; 2023 Kikapu.com. All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
  </footer>
        
    
    );
}
 
export default Footer;