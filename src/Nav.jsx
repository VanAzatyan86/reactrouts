import { NavLink } from "react-router-dom";

export default function Nav({spanValue}){
    return(
        <nav>
            <ul>
               <li><NavLink to="/products">products</NavLink></li>
                <li><NavLink to="/Cart">Cart</NavLink></li>
                <span className="addSpan">{spanValue}</span>
               <li><NavLink to="/logIn"> Log in</NavLink></li>
              <li><NavLink to="/register">Register</NavLink></li>
              </ul>
        </nav>
    )
}