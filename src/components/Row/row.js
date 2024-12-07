import React from "react" // Импортируем React
import PropTypes from 'prop-types' // Импортируем PropTypes для валидации пропсов

// Компонент Row: обёртка для двух колонок с разным содержимым
const Row = ({ left, right }) => {
    return (
        <div className="row mb2"> {/* Основной контейнер для двух колонок */}
            <div className="col-md-6"> {/* Левая колонка */}
                { left } {/* Содержимое передаётся через пропс */}
            </div>
            <div className="col-md-6"> {/* Правая колонка */}
                { right } {/* Содержимое передаётся через пропс */}
            </div>
        </div>
    )
}

// Валидация пропсов с использованием PropTypes
Row.propTypes = {
    left: PropTypes.node, // Проверяем, что пропс left является React-элементом
    right: PropTypes.node // Проверяем, что пропс right является React-элементом
}

export default Row // Экспортируем компонент для использования в других частях приложения
