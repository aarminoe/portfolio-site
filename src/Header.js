import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import { Link } from "react-router-dom";

function Header() {
    return(
        <div className="App">
            <Link to="/">Home</Link>
            <Link to="/about">About me</Link>
            <Link to='/experience'>Professional Experience</Link>
            <Link to='/projects'>Technical Projects</Link>
        </div>
    )
}

export default Header;