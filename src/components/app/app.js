// Импорты библиотек и компонентов
import React, { Component } from 'react'

// Компоненты интерфейса и страницы
import Header from '../header'
import RandomPlanet from '../random-planet'

// Стили для основного приложения
import './app.css'

// Импорты для обработки ошибок и обработки состояний
import { ErrorIndicator, NotFoundIndicator } from "../errors"
import ErrorBoundary from "../error-boundary"

// Провайдер и сервисы для контекста
import { SwapiServiceProvider } from '../swapi-service-context'
import SwapiService from "../../services/swapi-service"

// Страницы и компоненты
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage, WelcomePage } from "../pages"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StarshipDetails from "../sw-components/starship-details";

// Основной компонент приложения
export default class App extends Component {

    // Начальное состояние приложения
    state = {
        selectedItem: null, // ID выбранного элемента
        hasError: false, // Флаг для обработки ошибок
        swapiService: new SwapiService(), // Сервис для работы с данными
        isLoggedIn: false // Статус авторизации
    }

    // Метод для обновления статуса авторизации
    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    // Метод обработки ошибок в жизненном цикле
    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true }) // Устанавливаем флаг ошибки
    }

    // Метод рендеринга
    render() {

        // Проверяем наличие ошибок и показываем компонент ErrorIndicator
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const { isLoggedIn, swapiService } = this.state // Деструктурируем состояние

        return (
            // Оборачиваем приложение в ErrorBoundary и провайдер контекста
            <ErrorBoundary>
                <SwapiServiceProvider value={swapiService} >
                    <Router>
                        <div className="stardb-app">
                            {/* Основные компоненты */}
                            <Header />
                            <RandomPlanet />

                            {/* Навигация и роутинг */}
                            <Switch>
                                {/* Главная страница */}
                                <Route path="/" component={WelcomePage} exact />

                                {/* Страницы с динамическим ID */}
                                <Route path="/people/:id?" component={PeoplePage} exact />
                                <Route path="/planets/:id?" component={PlanetsPage} exact />

                                {/* Страницы для звездолетов */}
                                <Route path="/starships" component={StarshipsPage} exact />
                                <Route path="/starships/:id" render={({ match }) => {
                                    const { id } = match.params
                                    return <StarshipDetails itemId={id} />
                                }} />

                                {/* Страница авторизации */}
                                <Route path="/login" render={() => (
                                    <LoginPage isLoggedIn={isLoggedIn}
                                               onLogin={() => this.onLogin()} />
                                )} exact />

                                {/* Страница с доступом по авторизации */}
                                <Route path="/secret" render={() => (
                                    <SecretPage isLoggedIn={isLoggedIn} />
                                )} exact />

                                {/* Страница при ненахождении маршрута */}
                                <Route component={NotFoundIndicator} />
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}
