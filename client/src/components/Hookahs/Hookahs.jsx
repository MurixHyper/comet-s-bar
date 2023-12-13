import React from "react";
import Hookah from "../Hookah/Hookah";
import './Hookahs.css';

const Hookahs = ({hookahs}) =>{
    return(
        <div className="hookahs-menu">
            <h2 className="hookahs-header">Hookah:<hr/></h2>
            <div className="hook">
                {hookahs.map((el)=>(
                    <Hookah
                    key={el.id}
                    hookah={el}
                    />))}
            </div>
        </div>
    )
}

export default Hookahs;