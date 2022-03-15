import React, { useState } from 'react';

// --- --- --- --- ---
// Компонент вывода кнопок фильтрации
//
// Props (передаются из компонента Store):
// onSelectFilter - обработчик выбора фильтра
// filters - весь набор фильтров
// selected - активный фильтр
//
import './IconSwitch.css';
export default function IconSwitch(props) {
  return (
    <div className="icon-menu__wrap">
      <span className="material-icons" onClick={props.handleClick}>
        {props.icon}
      </span>
    </div>
  )
}
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
// --- --- --- --- ---
// Компонент вывода карточек списком
//
// Props (передаются из компонента Store):
//
//
import './ListView.css';
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



// --- --- --- --- ---
// Основной компонент
// 
// 
class Store extends React.Component {
  // Начальные значения состояний
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: "Nike Metcon 2",
          price: "130",
          color: "red",
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
        }, {
          name: "Nike Metcon 2",
          price: "130",
          color: "green",
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
        }, {
          name: "Nike Metcon 2",
          price: "130",
          color: "blue",
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
        }, {
          name: "Nike Metcon 2",
          price: "130",
          color: "black",
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
        }, {
          name: "Nike free run",
          price: "170",
          color: "black",
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
        }, {
          name: "Nike Metcon 3",
          price: "150",
          color: "green",
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
        }
      ],
      menuIcon: "view_list",
      storeView: "list",
    };
  // Почему-то сначала без жесткой привязки к компоненту не работало, а потом заработало :)
  this.handleClick = this.handleClick.bind(this);
}
  // Первый рендер, чтобы вывести ВСЕ карточки
  // UNSAFE сделал в соответствии с warning в консоли
  //
  UNSAFE_componentWillMount() {

  }
  //
  // Обработчик клика на кнопке фильтров
  handleClick = (e) => {
    let icon = e.target.textContent;
    let view;
    icon === "view_list" ? (icon = "view_module") : (icon = "view_list");
    icon === "view_list" ? (view = "list") : (view = "module");
    console.log("icon", icon);
    this.setState({ menuIcon: icon, storeView: view });
  }
  //
  // Рендер компонента
  render() {
    return (
      <div className="app">
        <IconSwitch  
          icon={this.state.menuIcon}
          handleClick={this.handleClick}
        />
        {this.state.storeView === "list" ? (
          <ListView products={this.state.products} />
        ) : (
          <CardsView products={this.state.products} />
        )}
      </div>
    );
  }
}
//
// Финальный вывод
import './App.css';
export default function App() {
  return <Store />;
}
