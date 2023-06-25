import React from "react";
import { Link } from "react-router-dom";

function Nav(){

    return (

        <div>
             <nav className="navbar navbar-default">
              <Link to="/">Home</Link> 
              <Link to="/login">Login</Link> 
              <Link to="/signup">Sign up here</Link> 
          
              </nav>
        </div>
    );
}

export default Nav;