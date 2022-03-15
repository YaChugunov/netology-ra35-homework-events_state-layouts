import React from 'react';

export default function ShopCard(props) {
  const titleButton = 'Add to cart';
  const { card } = props;

  return (
    <div className="card-container">
      <header className="card-container-header">
        <h3 className="card-title">{card.name}</h3>
        <span className="product-color">{card.color}</span>
      </header>
      <main className="card-content">
        <div className="card-img__wrap">
          <img className="card-image" src={card.img} alt={card.name} />
        </div>
      </main>
      <footer className="card-footer">
        <span className="card-price">{'$' + card.price}</span>
        <button className="add-to-cart__btn">{titleButton}</button>
      </footer>
    </div>
  );
}
