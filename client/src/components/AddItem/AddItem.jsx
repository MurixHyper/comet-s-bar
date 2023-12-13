import React, { useState, useRef } from "react";
import {Button, buttonClasses, TextField,Select,MenuItem,FormControl,InputLabel} from '@mui/material';
import { styled } from '@mui/system';

const StyledForm = styled('form')({
  display: 'flex',
  backgroundColor: '#1a1a1a',
  borderRadius: 15,
  flexDirection: 'column',
  gap: '15px',
  padding: '15px',
});

const StyledTextField = styled(TextField)({
  width: '100%',
  border: 'none',
  '& label.Mui-focused': {
    color: 'blueviolet',
    borderColor: 'blueviolet',
    borderRadius: 10,
  },
  '& input:focus':{
    borderColor: 'blueviolet',
    borderRadius: 10,
  },
  '& label': {
    color: 'white',
  },
  '& input': {
    color: 'white',
    borderRadius: 10,
    backgroundColor: '#312f2f',
  },
});

const StyledButton = styled(Button)({
  backgroundColor: 'blueviolet',
  borderRadius: 10,
  [`&.${buttonClasses.root}`]:{transition: '0.75s'},
  color: 'white',
  '&:hover':{
    backgroundColor: 'rgb(115, 37, 189)'
  },
  '&:active': {
    backgroundColor: 'blueviolet',
  },
});

const StyledFormControl = styled(FormControl)({
  '& input':{
    backgroundColor: 'bluviolet'
  },
  
})

const StyledSelect=styled(Select)({
  backgroundColor: '#312f2f',
  color: 'white',
  borderRadius: 10,
  '&label':{
  color:'white'
  },
})

const AddItem = ({ coctail, onAdd, buttonText, divForm }) => {
  const [formData, setFormData] = useState({
    title: "",
    ingrs: "",
    price: 1,
    category: ""
  });

  const myFormRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'price' ? Number(value) : value
    }));
  };

  const handleCategoryChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      category: e.target.value
    }));
  };

  const handleAdd = () => {
    const coctailToAdd = {
      title: formData.title,
      ingrs: formData.ingrs,
      price: formData.price,
      category: formData.category
    };

    if (coctail) {
      coctailToAdd.id = coctail.id;
    }

    onAdd(coctailToAdd);
    myFormRef.current.reset();
  };
  console.log(buttonClasses);
  return (
    <div className={divForm}>
      <StyledForm ref={myFormRef}>
        <StyledTextField
          label="Title"
          type="text"
          name="title"
          placeholder="Enter title"
          onChange={handleChange}
          value={formData.title}
        />
        <StyledTextField
          label="Recipe"
          type="text"
          name="ingrs"
          placeholder="Enter recipe"
          onChange={handleChange}
          value={formData.ingrs}
        />
        <StyledTextField
          label="Price"
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          value={formData.price}
        />
        <StyledFormControl>
          <InputLabel>Category</InputLabel>
          <StyledSelect
            value={formData.category}
            onChange={handleCategoryChange}
            label="Category"
          >
            <MenuItem value="coctail">Coctail</MenuItem>
            <MenuItem value="shot">Shot</MenuItem>
          </StyledSelect>
        </StyledFormControl>
        <StyledButton variant="contained" type="button" onClick={handleAdd}>
          {buttonText}
        </StyledButton>
      </StyledForm>
    </div>
  );
};

export default AddItem;
