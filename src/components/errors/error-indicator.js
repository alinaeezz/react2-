// Импорты библиотек и стилей
import React from 'react'
import './error-indicator.css' // Стили для компонента
import icon from './death-star.png' // Иконка для визуализации ошибки

// Функциональный компонент для отображения информации об ошибке
const ErrorIndicator = () => {
    return (
        <div className="error-indicator"> {/* Основной контейнер для отображения информации об ошибке */}
            <img src={icon} alt="error icon" /> {/* Иконка, отображающая визуальный индикатор ошибки */}
            <span className="boom">BOOM!</span> {/* Текст-индикатор ошибки */}
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    )
}

// Экспорт компонента
export default ErrorIndicator
