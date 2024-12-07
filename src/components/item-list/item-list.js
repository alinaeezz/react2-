import React from 'react'
import PropTypes from 'prop-types'

// Импорты и зависимости
import './item-list.css'

// Компонент ItemList - отвечает за отображение списка элементов
const ItemList = (props) =>  {

    // Деструктуризация пропсов
    const { data, onItemSelected, children: renderLabel } = props

    // Генерация списка элементов на основе переданных данных
    const items = data.map((item) => {
        const { id } = item // Извлечение ID элемента
        const label = renderLabel(item) // Генерация меток для каждого элемента с использованием функции из пропсов

        return (
            <li className="list-group-item"
                key={ id } // Уникальный ключ для каждого элемента
                onClick={ () => onItemSelected(id) }> {/* Обработчик клика по элементу */}
                { label } {/* Отображение метки */}
            </li>
        )
    })

    return (
        <ul className="item-list list-group"> {/* Основной контейнер списка */}
            { items } {/* Рендеринг списка элементов */}
        </ul>
    )
}

// Значения по умолчанию для пропсов
ItemList.defaultProps = {
    onItemSelected: () => {}
}

// Определение типов пропсов для валидации
ItemList.propTypes = {
    onItemSelected: PropTypes.func, // Функция, вызываемая при клике на элемент
    data: PropTypes.arrayOf(PropTypes.object).isRequired, // Ожидаемые данные - массив объектов
    children: PropTypes.func.isRequired // Ожидаем функцию для рендеринга меток элементов
}

// Экспорт компонента
export default ItemList
