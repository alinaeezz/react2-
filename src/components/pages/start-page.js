import React from "react" // Импортируем React
import WelcomeHeader from "../welcome-header" // Импортируем компонент WelcomeHeader

// Основной компонент для отображения приветственной страницы
const WelcomePage = () => {
    return (
        <div className="jumbotron"> {/* Контейнер с классом jumbotron для стилизации */}
            <WelcomeHeader /> {/* Вставляем компонент приветствия */}
        </div>
    )
}

export default WelcomePage // Экспортируем компонент для использования в других частях приложения
