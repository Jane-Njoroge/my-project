import React from 'react';
import items from '../data/items'; // Assume items is an array of item objects

const ItemList = () => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;