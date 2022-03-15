import React from 'react';

// --- --- --- --- ---
// Компонент вывода карточек списком
//
// Props (передаются из компонента Store в App.js):
//
//
import ShopItem from './ShopItem';

import './ListView.css';
export default function ListView(props) {
  return (
    <ul className="products-list">
      {props.items.map((item) => {
        return (
          <li className="products-list-item">
            <ShopItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}
