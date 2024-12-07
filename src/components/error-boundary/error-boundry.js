// Импорты библиотек и компонентов
import React, { Component } from "react"
import { ErrorIndicator } from "../errors" // Компонент для отображения информации об ошибке

// Класс для обработки ошибок в приложении
export default class ErrorBoundary extends Component {

    // Состояние для отслеживания ошибок
    state = {
        hasError: false // Флаг, указывающий, произошла ли ошибка
    }

    // Метод жизненного цикла для обработки ошибок
    componentDidCatch(error, info) {
        // Устанавливаем состояние hasError в true при обнаружении ошибки
        this.setState({
            hasError: true
        })
    }

    // Метод рендеринга
    render() {
        // Проверяем наличие ошибки
        if (this.state.hasError) {
            // Если ошибка произошла, рендерим компонент ErrorIndicator
            return <ErrorIndicator />
        }

        // В противном случае рендерим дочерние компоненты
        return this.props.children
    }
}
