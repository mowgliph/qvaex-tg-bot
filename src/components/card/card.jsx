import React, { useState } from 'react'
import './card.css';
import Button from '../buttons/button';

function Card({ wallpaper }) {
  const [ count, setCount ] = useState(0);  
  const { id, title, image, price } = wallpaper;

  const handleIncrement = () => {
    setCount(count+1);
  }

  const handleDecrement = () => {
    setCount(count-1);
  }
  
  return (
    <div className="card">
      <span 
      className={`${count !== 0 ? "card__badge": "card__badge--hidden"}`}>
        {count}
      </span>
      <div className="image__container">
        <img src={image} alt={title} />
      </div>
      <h4 className="card__title">
        {title} . <span className="card__price">
          {price}
        </span>
      </h4>
      <div className="btn__container">
        <Button title={'+'} type={'add'} onClick={handleIncrement} />
        {count !== 0 ? (
          <Button title={'-'} type={'remove'} onClick={handleDecrement} />
        ) : (
          " "
        )}
      </div>
    </div>
  );
}

export default Card