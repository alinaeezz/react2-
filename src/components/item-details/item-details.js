import React, { Component } from 'react'

// Импорты и зависимости
import './item-details.css'
import SwapiService from "../../services/swapi-service"
import Spinner from "../spinner"

// Вспомогательный компонент для отображения отдельных полей информации
const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{ label }:</span>
            <span>{ item[field] }</span>
        </li>
    )
}

// Экспорт компонента Record для использования в других местах
export {
    Record
}

// Основной компонент для отображения информации об элементах
export default class ItemDetails extends Component {

    // Создание экземпляра сервиса для взаимодействия со сторонним API
    swapiService = new SwapiService()

    // Начальное состояние компонента
    state = {
        item: null, // Данные элемента
        image: null, // URL изображения элемента
        loading: true // Состояние загрузки
    }

    // Вызывается после монтирования компонента
    componentDidMount() {
        this.updateItem() // Запуск метода для загрузки данных
    }

    // Метод жизненного цикла для обработки изменений пропсов
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl) {
            this.updateItem() // Повторная загрузка данных
            this.setState({ loading: true }) // Сбрасываем состояние загрузки
        }
    }

    // Метод для обновления данных элемента
    updateItem = () => {
        const { itemId, getData, getImageUrl } = this.props
        if (!itemId) {
            return
        }

        getData(itemId) // Получение данных элемента
            .then((item) => {
                // Обновление состояния после загрузки данных
                this.setState({
                    item,
                    image: getImageUrl(item),
                    loading: false
                })
            })
    }

    // Метод для рендеринга
    render() {

        // Если данных нет, показываем сообщение
        if (!this.state.item)
            return <span>Select an item from a list</span>

        const { item, image, loading } = this.state

        const spinner = loading ? <Spinner /> : null // Анимация загрузки
        const content = !loading ? <ItemDetailsView item={item} image={image} context={this.props.children}/> : null // Основной контент

        return (
            <div className="item-details card">
                { spinner } 
                { content } 
            </div>
        )
    }
}

// Компонент для отображения информации о выбранном элементе
const ItemDetailsView = ({ item, image, context }) => {

    const { name, type } = item // Деструктуризация данных элемента

    return (
        <React.Fragment>
            {/* Отображение изображения элемента */}
            <img className="item-image" alt={`~-~${type}~-~`} src={ image } />

            <div className="card-body">
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    {
                        // Обход дочерних компонентов и их клонирование с новыми пропсами
                        React.Children.map(context, (child) => {
                            return React.cloneElement(child, { item })
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}
