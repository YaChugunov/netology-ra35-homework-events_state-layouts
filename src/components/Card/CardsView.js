import React from 'react';

// --- --- --- --- ---
// Компонент вывода карточек сеткой
//
// Props (передаются из компонента Store):
//
//
import ShopCard from './ShopCard';

import './CardsView.css';
export default function CardsView(props) {
  return (
    <ul className="products-card">
      {props.cards.map((card) => {
        return (
          <li className="products-list-item">
            <ShopCard card={card} />
          </li>
        );
      })}
    </ul>
  );
}
