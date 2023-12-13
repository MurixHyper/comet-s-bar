import React, { useState } from "react";
import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5';
import AddItem from '../AddItem/AddItem';
import './Beverage.css';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  color: 'black',
  borderRadius: 10,
  transition: 0.75,
  backgroundColor: 'rgb(0, 255, 255)',
  '&:active': {
    backgroundColor: 'rgb(0, 200, 200)',
  },
  '&:hover':{
    backgroundColor: 'rgb(0, 200, 200)'
  }
});

const Beverage=({beverage, priceColor, onDelete, onEdit, setLastAdded,changePrices, saveJSONData})=>{
    const[editForm,setEditForm]=useState(false);

    // const handleEdit = () => {
    //   // ... (ваш код редактирования)
    //   onEdit(updatedItem); // Вызываем функцию редактирования
    //   saveJSONData(); // Сразу сохраняем данные после редактирования
    // };
  
    const handleDelete = () => {
      onDelete(beverage.id);
      saveJSONData();
    };

    return(
      <Card className="beverage-card" style={{ width: '18rem' }}>
        <Card.Body style={{display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    gap: '50px'}}> 
          <div className="beverage-card-body">
            <Card.Title>{beverage.title}</Card.Title>       
            <Card.Text className="beverage-text">{beverage.ingrs}</Card.Text>
            <Card.Text className={priceColor(beverage.id)}>{beverage.price+'$'}</Card.Text>
          </div>
          <div className="coctail">
            {editForm===true && <AddItem coctail={beverage} onAdd={onEdit} buttonText={"Edit"} divForm={"div-form-edit"}/>}
          </div>
          <div className="beverage-buttons">
            <StyledButton className="beverage-buttonBuy" onClick={()=>{
              changePrices(beverage.id)
              setLastAdded(beverage.id)}}>Buy</StyledButton>
            <div className="beverage-deleteEditIcons">
              <IoCloseCircleSharp onClick={handleDelete} className="beverage-delete-icon"/>
              <IoHammerSharp onClick={()=>{
                setEditForm(!editForm)}} className="beverage-edit-icon"/>
            </div>
          </div>
        </Card.Body>
      </Card>
    )
  }

  export default Beverage