/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */

import React, { useState } from 'react';
import './App.css';
import Card from './components/card/card';
import Cart from './components/cart/cart';

// Import data en variale 
const { getData } = require('./db/db');
const wallpapers = getData();

function App() {
  const [ cartItems, setCartItems ] = useState([]);
    
  const onAdd = (wallpaper) => {
    const exist = cartItems.find((x) => x.id === wallpaper.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => {
          x.id === wallpaper.id ? {
            ...exist, quantity: exist.quantity + 1 
          } : x
        })
      );
    } else {
      setCartItems([...cartItems, { ...wallpaper, quantity:1 }]);
    }
  };
  
  const onRemove = (wallpaper) => {
    const exist = cartItems.find((x) => x.id === wallpaper.id)

    if (exist.quantity === 1){
      setCartItems(cartItems.filter(
        x => x.id !== wallpaper.id
      ))
    } else {
      setCartItems(cartItems.map(
        x=> x.id === wallpaper.id ? {
          ...exist, quantity: exist.quantity - 1
        } : x
      ))
    }
  };

  return (
  <>
    <h2 className="heading">Order Wallpaper</h2>
    <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
    <div className="cards__container">
      {wallpapers.map((wallpaper) => {
        return <Card wallpaper={wallpaper} key={wallpaper.id} />;
      })}
  </div>
  </>);
}

export default App;
