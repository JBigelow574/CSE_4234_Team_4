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
                            <li><a href="/">Home</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="list">Product Details</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                    </div>          
                </nav>
            </div>
        
    );
}

export default Nav;