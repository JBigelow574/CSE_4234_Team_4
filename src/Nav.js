import React from "react";
import { Link } from "react-router-dom";

function Nav(){

    return (
        
            <div>
                <nav className="navbar navbar-default"> 
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand">Revent</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/list">Product Details</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                            <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                        </ul>
                    </div>          
                </nav>
            </div>
        
    );
}

export default Nav;