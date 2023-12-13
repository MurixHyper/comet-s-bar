import React from "react";
import Beverage from "../Beverage/Beverage";
import './Beverages.css';

const Beverages = ({items,onDelete, onEdit,changePrices,nameOfCategory, priceColor, setLastAdded, saveJSONData})=>{
    if(items.length > 0)
  return ( 
  <div className="beverages-card">
    <div className="beverages-title">{nameOfCategory}<hr/></div>
      <div className="beverages-cards">  
      {items.map((el) => (
        <Beverage 
        key={el.id} 
        beverage={el} 
        priceColor={priceColor}
        onDelete={onDelete}
        onEdit={onEdit}
        changePrices={changePrices}
        setLastAdded={setLastAdded}
        saveJSONData={saveJSONData}
        />))}  
    </div>
  </div>
  );
  else return(
    <div className="beverages-card">
      <h3 className="beverages-title">No beverages<hr/></h3>
    </div>
    )
}

export default Beverages;