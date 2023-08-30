import { Link,Outlet } from "react-router-dom";
import {FaCartPlus} from 'react-icons/fa'
const  Landing= () => {
    return ( 
        <div>
        <nav>
        <Link to="/signUp" >signup</Link>
        <br />
        <Link to= "/">products</Link>

        <button><FaCartPlus />
        <span>0</span>
        </button>
      </nav>
         <Outlet></Outlet>
        </div>
     );
}
 
export default Landing;