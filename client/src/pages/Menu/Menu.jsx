import React, {useState, useEffect} from 'react';
import Beverages from '../../components/Beverages/Beverages';
import AddItem from '../../components/AddItem/AddItem';
import Hookahs from '../../components/Hookahs/Hookahs';
import axios from 'axios';
import './Menu.css';

const Menu = () => {
  const[beverages, setBeverages] = useState([]);
  const[hookahs, setHookahs]=useState([]);
  const[lastAdded,setLastAdded]=useState(-1);
  useEffect(() => {
    if(lastAdded !== -1)
    {
      const timeoutId = setTimeout(() =>
      {
        setLastAdded(-1);
      },2000);
      return() => clearTimeout(timeoutId);
    }
  }, [lastAdded]);

  useEffect(() => {
    loadServerData();
  }, []);

  const loadServerData = async () => {
    try {
      const beveragesResponse = await axios.get('/api/beverages');
      const hookahsResponse = await axios.get('/api/hookahs');

      setBeverages(beveragesResponse.data);
      setHookahs(hookahsResponse.data);
    } catch (error) {
      console.error('Error loading server data:', error);
    }
  };

  const saveServerData = async () => {
    try {
      // Сохраняем каждый напиток по отдельности
      for (const beverage of beverages) {
        await axios.post('/api/beverages', beverage);
      }

      // Сохраняем каждый кальян по отдельности
      for (const hookah of hookahs) {
        await axios.post('/api/hookahs', hookah);
      }

      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Error saving server data:', error);
    }
  };

  const saveFile = async (path, data) => {
    await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });
  };

  const addBeverage = (beverage) => {
    const id = beverages.length + 1;
    setBeverages([...beverages, { id, ...beverage }]);
  };

  const editBeverage = (beverage) => {
  setBeverages((prevBeverages) => {
    const updatedBeverages = [...prevBeverages];
    updatedBeverages[beverage.id - 1] = beverage;
    return updatedBeverages;
  }); 
};

  const deleteBeverage = (id) => {
    setBeverages(beverages.filter((el) => el.id !== id));
  };

  const changePrices = (id) => {
    const updatedBeverages = beverages.map((el) => {
      if (id === el.id) {
        return { ...el, price: parseFloat((el.price + 0.1).toFixed(2)) };
      } else {
        return { ...el, price: (0<el.price && el.price<=0.1)? 0.1: parseFloat((el.price - 0.09).toFixed(2)) };
      }
    });
    setBeverages(updatedBeverages);
  };

  const priceColor = (id) => {
    return lastAdded===-1?"beveragePrice":lastAdded===id?"beveragePrice beveragePriceUp":"beveragePrice beveragePriceDown"
  }

  return (
    <div className="menu-container">
      <header>Menu<hr/></header>
      <div className="menu-main-div">
        <main className="menu-main">
        {beverages && beverages.length > 0 && (
            <Beverages
              items={beverages.filter(beverage => beverage.category === "coctail")}
              onDelete={deleteBeverage}
              onEdit={editBeverage}
              priceColor={priceColor}
              setLastAdded={setLastAdded}
              changePrices={changePrices}
              nameOfCategory={"Coctails"}
            />
          )}
           {beverages && beverages.length > 0 && (
            <Beverages
              items={beverages.filter(beverage => beverage.category === "shot")}
              onDelete={deleteBeverage}
              onEdit={editBeverage}
              priceColor={priceColor}
              setLastAdded={setLastAdded}
              changePrices={changePrices}
              nameOfCategory={"Shots"}
            />
          )}
        </main>
        <aside className="menu-aside">
          <AddItem onAdd={addBeverage} buttonText={"Add"} divForm={"div-form-add"} saveServerData={saveServerData}/>
        </aside>
      </div>
    </div>
  );
};

export default Menu;
