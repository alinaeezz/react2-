import React from 'react' // Импортируем React
import './spinner.css' // Подключаем CSS-стили для анимации спиннера

// Компонент Spinner: отвечает за визуальное представление загрузки
const Spinner = () => {
    return (
        <div className="lds-css"> {/* Основной контейнер для анимации */}
            <div className="lds-double-ring"> {/* Контейнер анимации в виде двух колец */}
                <div></div> {/* Первая половина анимации */}
                <div></div> {/* Вторая половина анимации */}
            </div>
        </div>
    )
}

export default Spinner // Экспортируем компонент для повторного использования в других частях приложения
