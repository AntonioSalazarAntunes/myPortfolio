import React, { useState } from 'react';
import "./navbar.css";
import logo from "../../icon_fundo_branco.png"
import { Link } from "react-router-dom";



export default function Navbar() {

    const [showLinks, setShowLinks] = useState(false);


    function handleClick() {
        setShowLinks(!showLinks)

    };



    return (
        <div className="Navbar">
            <div className="leftSide">
                <img src={logo} alt="logotipo" />
                <p>antoniosalazarantunes@gmail.com</p>

            </div>
            <div className="rightSide">
                <div className="links" id={showLinks ? "hidden" : ""}>

                    <Link to="/" className="ancora">Sobre mim</Link>
                    <Link to="/trabalhos" className="ancora">Trabalhos</Link>
                   
                </div>
                <button className="toggleButton" onClick={handleClick}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
        
            </div>
        </div>
        
    )
    

}
