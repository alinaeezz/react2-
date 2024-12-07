import React from "react"

// Импорты вспомогательных функций HOC (Higher-Order Components) для функционала
import { withData, withSwapiService, withChildFunction, compose } from "../hoc-helpers"
import ItemList from "../item-list" // Основной компонент списка для отображения данных


// Определяем, как будет рендериться элемент для людей с отображением имени и пола
const renderNameAndGender = ({name, gender}) =>
    <span>{name}, &nbsp;{gender}</span>

// Определяем, как будет рендериться элемент для планет с отображением имени и населения
const renderNameAndPopulation = ({ name, population }) =>
    <span>{name}, &nbsp;{population} {population !== 'unknown' ? 'people' : null}</span>

// Определяем, как будет рендериться элемент для звездолетов с отображением имени и модели
const renderNameAndModel = ({ name, model }) =>
    <span>{name}, &nbsp;{model}</span>


// Преобразуем методы SWAPI для получения данных о людях
const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople // Получение списка всех людей
    }
}

// Преобразуем методы SWAPI для получения данных о планетах
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets // Получение списка всех планет
    }
}

// Преобразуем методы SWAPI для получения данных о звездолетах
const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships // Получение списка всех звездолетов
    }
}

// Создаем HOC-компонент для списка людей
const PersonList = compose(
    withSwapiService(mapPersonMethodsToProps), // Объединяем с сервисом для работы со SWAPI
    withData, // Добавляем обработку данных
    withChildFunction(renderNameAndGender) // Определяем, как отображать данные
)(ItemList)

// Создаем HOC-компонент для списка планет
const PlanetList = compose(
    withSwapiService(mapPlanetMethodsToProps), // Объединяем с сервисом для работы со SWAPI
    withData, // Добавляем обработку данных
    withChildFunction(renderNameAndPopulation) // Определяем, как отображать данные
)(ItemList)

// Создаем HOC-компонент для списка звездолетов
const StarshipList = compose(
    withSwapiService(mapStarshipMethodsToProps), // Объединяем с сервисом для работы со SWAPI
    withData, // Добавляем обработку данных
    withChildFunction(renderNameAndModel) // Определяем, как отображать данные
)(ItemList)

// Экспортируем все компоненты
export {
    PersonList, // Экспорт списка людей
    PlanetList, // Экспорт списка планет
    StarshipList // Экспорт списка звездолетов
}
