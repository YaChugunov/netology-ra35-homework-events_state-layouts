import React, { useState } from 'react';

// --- --- --- --- ---
// Компонент вывода кнопок фильтрации
//
// Props (передаются из компонента Portfolio):
// onSelectFilter - обработчик выбора фильтра
// filters - весь набор фильтров
// selected - активный фильтр
//
import './Toolbar.css';
export default function Toolbar(props) {
  return (
    <div className="toolbar">
      {props.filters.map((filter) => {
        const className =
        filter === props.selected ? 'toolbar-item selected' : 'toolbar-item';
        return(
          <button key={filter} className={className} onClick={() => props.onSelectFilter(filter)}>{filter}</button>
        )
      })}
    </div>
  )
}
// --- --- --- --- ---
// Компонент вывода карточек проектов
//
// Props (передаются из компонента Portfolio):
// projects - список уже отфильтрованных карточек
//
import './ProjectList.css';
function getAltFromUrl(url) {
  const path = url.split('/');
  return path.pop().split('.')[0];
}
export default function ProjectsList(props) {
  let projects = props.projects.map((item) => item);
  return (
    <div className="project-list clearfix">
      {projects.map((item) => (
        <img
          className="project-list-item"
          src={item.img}
          alt={item.category}
          key={getAltFromUrl(item.img)}
        />
      ))}
    </div>
  );
}
// --- --- --- --- ---
// Основной компонент
// 
// 
class Portfolio extends React.Component {
  // Начальные значения состояний
  constructor(props) {
    super(props);
    this.state = {
      allFilters: ['All', 'Websites', 'Flayers', 'Business Cards'],
      allProjects: [
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg',
          category: 'Business Cards',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg',
          category: 'Business Cards',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
          category: 'Business Cards',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png',
          category: 'Flayers',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg',
          category: 'Business Cards',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png',
          category: 'Flayers',
        },
      ],
      filteredProjects: [],
      selectedFilter: 'All'
    };
  // Почему-то сначала без жесткой привязки к компоненту не работало, а потом заработало :)
  this.handleClick = this.handleClick.bind(this);
  }
  // Первый рендер, чтобы вывести ВСЕ карточки
  // UNSAFE сделал в соответствии с warning в консоли
  //
  UNSAFE_componentWillMount() {
    const { allProjects } = this.state;
    this.setState({ filteredProjects: allProjects });
  }
  //
  // Обработчик клика на кнопке фильтров
  handleClick = (filter) => {
    console.log('Фильтр: ' + filter);
    const { allProjects, selectedFilter } = this.state;
    if (filter !== 'All') {
      const filteredProjects = allProjects.filter(
        (project) => project.category === filter
      );  
      this.setState({ filteredProjects });
      this.setState({ selectedFilter: filter });
    }
    else {
      this.setState({ filteredProjects: allProjects });
    }
  }
  //
  // Рендер компонента
  render() {
    return (
      <div className="app">
        <Toolbar filters={this.state.allFilters} onSelectFilter={this.handleClick} selected={this.state.selectedFilter} />
        <ProjectsList projects={this.state.filteredProjects} />
      </div>
    );
  }
}
//
// Финальный вывод
import './App.css';
export default function App() {
  return <Portfolio />;
}
