// Импорты библиотек и стилей
import React from 'react' // Библиотека React
import { Link } from 'react-router-dom' // Импортируем Link для навигации по роутам
import './header.css' // Стили для шапки приложения

// Функциональный компонент для отображения навигационной шапки
const Header = () => {
    return (
        <div className="header d-flex"> {/* Основной контейнер шапки с классами для стилизации и Flexbox */}
            <h3>
                {/* Ссылка на главную страницу */}
                <Link to="/">StarDB</Link> 
            </h3>
            <ul className="d-flex"> {/* Навигационное меню */}
                {/* Ссылки для навигации по основным разделам приложения */}
                <li>
                    <Link to="/people/">People</Link> 
                </li>
                <li>
                    <Link to="/planets/">Planets</Link> 
                </li>
                <li>
                    <Link to="/starships/">Starships</Link> 
                </li>
                <li>
                    <Link to="/login">Login</Link> 
                </li>
                <li>
                    <Link to="/secret">Secret</Link> 
                </li>
            </ul>
        </div>
    )
}

// Экспортируем компонент Header для использования в других частях приложения
export default Header
