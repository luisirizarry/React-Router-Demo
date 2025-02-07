import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">Home</Link>
            <Link to="/eat">Eat</Link>
            <Link to="/drink">Drink</Link>
        </nav>
    )
}

export default NavBar;