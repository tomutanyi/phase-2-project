import { Link,Outlet } from "react-router-dom";
import {FaCartPlus} from 'react-icons/fa'
const  Landing= () => {
    return ( 
        <div>
        <nav>
        
        <Link to="/signUp" >signup</Link>
        <br />
        <Link to= "/">products</Link>
        <br />
        <Link to="/cart">
        <button>
              <FaCartPlus /><span>0</span>
        </button>
          </Link> <br/>
       

        
      </nav>
         <Outlet></Outlet>
        </div>
     );
}
 
export default Landing;