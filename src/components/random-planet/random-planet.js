import React, { Component } from 'react' // Импортируем React и Component
import PropTypes from 'prop-types' // Импортируем PropTypes для валидации пропсов

import Spinner from '../spinner' // Компонент для индикации загрузки
import SwapiService from '../../services/swapi-service' // Сервис для работы со SWAPI
import { ErrorIndicator } from "../errors" // Компонент для обработки ошибок

import './random-planet.css' // Импортируем стили для компонента

// Классический компонент для отображения случайной информации о планете
export default class RandomPlanet extends Component {

    // Значение по умолчанию для интервала обновления данных
    static defaultProps = {
        updateInterval: 3000
    }

    // Пропсы, которые ожидает компонент
    static propTypes = {
        updateInterval: PropTypes.number
    }

    swapiService = new SwapiService() // Создаём экземпляр сервиса

    // Начальное состояние компонента
    state = {
        planet: {}, // Информация о планете
        loading: true, // Состояние загрузки
        error: false // Состояние ошибки
    };

    // Метод, выполняющийся после монтирования компонента
    componentDidMount() {
        const { updateInterval } = this.props
        this.updatePlanet() // Начинаем обновлять данные сразу после монтирования
        this.interval = setInterval(this.updatePlanet, updateInterval) // Настраиваем интервал для обновления
    }

    // Метод, выполняющийся перед размонтированием компонента
    componentWillUnmount() {
        clearInterval(this.interval) // Очищаем интервал, чтобы избежать утечек памяти
    }

    // Метод обработки успешного ответа от сервера
    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    // Метод обработки ошибки
    onError = (err) => {
        this.setState({
            loading: false,
            error: true
        });
    }

    // Метод для обновления информации о случайной планете
    updatePlanet = () => {
        let id = 20
        while (id === 20) {
            id = Math.floor(Math.random() * 19) + 2 // Генерация случайного id для планеты
        }

        this.swapiService
            .getPlanet(id) // Получаем данные о планете
            .then(this.onPlanetLoaded) // Обрабатываем данные
            .catch((err) => this.onError()) // Обрабатываем ошибку
    }

    render() {
        const { planet, loading, error } = this.state // Деструктурируем состояние

        const hasData = !(loading || error) // Проверяем, есть ли данные и нет ли ошибок

        const errorMessage = error ? <ErrorIndicator /> : null // Компонент для отображения ошибки
        const spinner = loading ? <Spinner /> : null // Компонент для отображения индикатора загрузки
        const content = hasData ? <PlanetView planet={planet}/> : null // Компонент, отображающий данные

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage} {/* Отображаем сообщение об ошибке, если есть */}
                {spinner} {/* Отображаем спиннер, если данные ещё загружаются */}
                {content} {/* Отображаем данные, если они доступны */}
            </div>
        );
    }
}

// Компонент для отображения информации о планете
const PlanetView = ({ planet }) => {

    const { id, name, population, rotationPeriod, diameter } = planet // Деструктурируем данные о планете

    return (
        <React.Fragment>
            {/* Изображение планеты */}
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
                 alt={'Planet'}/>
            <div>
                <h4>{name}</h4> {/* Название планеты */}
                <ul className="list-group list-group-flush">
                    {/* Отображаем информацию о населении, период вращения и диаметре */}
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
