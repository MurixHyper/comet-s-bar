import React from 'react';
import comets from '../../assets/comets.png';
import Minilogo from '../Minilogo/Minilogo';
import SocialMedia from '../SocialMedia/SocialMedia';
import './Main.css';
const Main= ()=>{
    return(
        <div className="main-div">
            <div className="main-cover-image">
                <div className="main-logodiv">
                    <img className="main-image" src={comets} alt="" />
                    <div className="main-text">
                        <h2>Comet.S</h2>
                        <p>Invest in your emotions</p>
                    </div>
                </div>
            </div>
            <Minilogo/>
            <div className="main-footer">
                <div className="main-phone">
                    <p>+40759323255</p>
                </div>
                <SocialMedia/>
            </div>
        </div>
    )
}

export default Main;