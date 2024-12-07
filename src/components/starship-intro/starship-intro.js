import React from 'react' // Импортируем React
import intro from './starship-intro.jpg' // Импортируем изображение для приветственного блока
import './starship-intro.css' // Подключаем CSS-стили для стилизации компонента

// Компонент StarshipIntro: отвечает за визуальное представление интро для страницы со звездолетами
const StarshipIntro = () => {
    return (
        <div className="intro-img"> {/* Основной контейнер для изображения */}
            <div className="ii"> {/* Вложенный контейнер для стилизации */}
                <img src={intro} alt="Starships" /> {/* Отображаем изображение */}
            </div>
        </div>
    )
}

export default StarshipIntro // Экспортируем компонент для использования в других частях приложения
