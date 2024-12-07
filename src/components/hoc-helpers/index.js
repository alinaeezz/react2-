// Импорты вспомогательных функций и HOCs (Higher Order Components)

// Импорты
import withData from "./with-data" // HOC для обработки данных
import withSwapiService from "./with-swapi-service" // HOC для работы с сервисом API SWAPI
import compose from "./compose" // Функция для композиции HOCs
import withChildFunction from "./with-child-function" // HOC для обработки дочерних функций

// Экспортируем все импорты как объект, чтобы использовать их в других частях приложения
export {
    withData,
    withSwapiService,
    withChildFunction,
    compose,
}
