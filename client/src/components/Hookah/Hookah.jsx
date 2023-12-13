import React from "react";
import './Hookah.css';

const Hookah = ({hookah}) =>{
    return(
        <div className="hookah-card">
            <h2 className="hookah-title">{hookah.title}</h2>
            <p className="hookah-recipe">{hookah.ingrs}</p>
        </div>
    )
}

export default Hookah;