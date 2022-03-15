import React from 'react';

// --- --- --- --- ---
// Компонент вывода карточек списком
//
// Props (передаются из компонента Store в App.js):
//
//
import './components/List/ListView.css';
export default function ListView(props) {
  return (
    <ul className="products-list">
      {props.products.map((product) => {
        return (
          <li key={usid.rand()} className="products-list-item">
            <ShopItem item={product} />
          </li>
        );
      })}
    </ul>
  );
}
