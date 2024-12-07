import React from "react" // Импортируем React
import { Redirect } from "react-router-dom" // Импортируем Redirect для перенаправления пользователя на другую страницу

// Компонент для отображения секретной страницы
const SecretPage = ({ isLoggedIn }) => {
    // Проверяем, авторизован ли пользователь
    if (isLoggedIn) { 
        return (
            <div className="jumbotron text-center"> {/* Отображаем контент страницы, если пользователь авторизован */}
                <h5>This page is full of secrets!!!</h5>
            </div>
        )
    }

    // Если пользователь не авторизован, перенаправляем его на страницу входа
    return <Redirect to="/login" />
}

export default SecretPage // Экспортируем компонент для дальнейшего использования
