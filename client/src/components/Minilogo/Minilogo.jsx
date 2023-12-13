import React from "react"
import minilogo from '../../assets/minilogo.png';
import './Minilogo.css';

const Minilogo = () =>{
    return(
        <div className="div-minilogo">
          <img className="minilogo" src={minilogo} alt=""/>
          <hr/>
        </div>
    )
}

export default Minilogo;