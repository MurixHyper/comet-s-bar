import React from "react";
import logo from '../../assets/comets.png';
import './MenuHeader.css';

const MenuHeader = ({text})=>{
    return(
        <div className="menuheader-header">
            <img src={logo} alt="" />
            <h1>{text}</h1>
         </div>
    )
}

export default MenuHeader;