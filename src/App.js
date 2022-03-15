import React, { useState } from 'react';

// --- --- --- --- ---
// Компонент вывода иконки
//
// Props (передаются из компонента Store):
// onSwitch - обработчик выбора вида
// icon - иконка material icons
//
export default function IconSwitch(props) {
  return (
    <div className="icon-menu__wrap">
      <span className="material-icons" onClick={props.onSwitch}>
        {props.icon}
      </span>
    </div>
  )
}

import ListView from './components/List/ListView';
import CardsView from './components/Card/CardsView';

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
      controlIcon: "view_list",
      storeView: "list",
    };
  // Жесткая привязка к компоненту
  // this.onSwitch = this.onSwitch.bind(this);
  }
  //
  // Обработчик клика на иконке отображения магазина
  onSwitch = (event) => {
    let icon = event.target.textContent;
    let view;
    icon === "view_list" ? (icon = "view_module") : (icon = "view_list");
    icon === "view_list" ? (view = "list") : (view = "cards");
    this.setState({ controlIcon: icon, storeView: view });
  }
  //
  // Рендер основного компонента
  render() {
    return (
      <div className={"container"}>
        <IconSwitch  
          icon={this.state.controlIcon}
          onSwitch={this.onSwitch}
        />
        {this.state.storeView === "list" ? (
          <CardsView cards={this.state.products} />
        ) : (
          <ListView items={this.state.products} />
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
