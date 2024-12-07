// Импортируем React
import React from 'react';

// Импортируем ReactDOM для взаимодействия с DOM
import ReactDOM from 'react-dom';

// Импортируем главный компонент приложения
import App from './components/app';

// Используем метод ReactDOM.render для рендеринга основного компонента приложения в DOM
ReactDOM.render(
  <App />, // Основной компонент приложения
  document.getElementById('root') // Привязка к элементу с ID "root" в index.html
);
