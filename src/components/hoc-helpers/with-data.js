// Импорты библиотек и компонентов
import React, { Component } from "react" // Импорты React и Component
import Spinner from "../spinner" // Компонент-спиннер для индикации загрузки
import { ErrorIndicator } from "../errors" // Компонент для отображения информации об ошибке

// Создаем HOC (Higher Order Component) для обработки данных и управления их состоянием
const withData = (View) => {
    return class extends Component {
        // Состояние для хранения данных, статуса загрузки и ошибок
        state = {
            data: null,
            loading: true,
            error: false,
        }

        // Метод жизненного цикла: срабатывает, когда свойства компонента изменяются
        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update()
            }
        }

        // Метод жизненного цикла: срабатывает после монтирования компонента
        componentDidMount() {
            this.update()
        }

        // Метод для обновления данных
        update() {
            this.setState({
                loading: true, // Показываем индикатор загрузки
                error: false, // Сбрасываем ошибку
            })

            this.props.getData() // Вызываем метод для получения данных
                .then((data) => {
                    // Если данные успешно загружены, обновляем состояние
                    this.setState({ data, loading: false })
                })
                .catch(() => {
                    // В случае ошибки устанавливаем флаг ошибки
                    this.setState({ error: true, loading: false })
                })
        }

        // Основной метод рендеринга
        render() {
            const { data, error, loading } = this.state

            if (loading) return <Spinner /> // Если идет загрузка, показываем спиннер
            if (error) return <ErrorIndicator /> // Если произошла ошибка, показываем компонент ошибки

            // Если данные загружены, передаем их в обернутый компонент
            return <View { ...this.props } data={ data } />
        }
    }
}

// Экспортируем HOC
export default withData
