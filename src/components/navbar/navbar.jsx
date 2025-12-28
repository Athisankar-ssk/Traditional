import React from "react";
import './navbar.css'

const Navbar=()=>{
    return(
        <header className="header">
            <a href="" className="logo">logo</a>
            <nav className="navbar">
             <a href="">Home</a>
             <a href="">About</a>
             <a href="">Bull</a>
             <a href="">Vadivasal</a>
             <a href="">Contact</a>
            </nav>
        </header>
    );
}

export default Navbar;