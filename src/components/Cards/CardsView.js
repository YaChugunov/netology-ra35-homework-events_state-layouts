import React from 'react';
// --- --- --- --- ---
// Компонент вывода карточек сеткой
//
// Props (передаются из компонента Store):
//
//
import './CardsView.css';
//const USID = require("usid");
//const usid = new USID();
export default function CardsView(props) {
  return (
    <ul className="products-module">
      {props.products.map((product) => {
        return (
          <li key={usid.rand()} className="products-list-item">
            <ShopCard item={product} />
          </li>
        );
      })}
    </ul>
  );
}
