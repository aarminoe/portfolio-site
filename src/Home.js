import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
        <div>
            <h1>home!</h1> 
            <Link to="about">About me</Link>
        </div>
    )
}

export default Home;