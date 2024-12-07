import React from "react" // Импортируем React
import { StarshipList } from "../sw-components" // Импортируем компонент для отображения списка кораблей
import { withRouter } from 'react-router-dom' // Импортируем withRouter для доступа к навигации через history
import Row from "../row"; // Импортируем компонент Row для создания двухпанельного интерфейса
import StarshipIntro from "../starship-intro" // Импортируем компонент, который будет отображаться справа

// Главный компонент для отображения страницы со звездолетами
const StarshipsPage = ({ history }) => {
    return (
        <Row
            left={
                <StarshipList 
                    onItemSelected={(itemId) => history.push(itemId)} // При клике на элемент из списка выполняем навигацию
                />
            }
            right={
                <StarshipIntro /> // Компонент для отображения информации о выбранном звездолёте
            }
        />
    )
}

export default withRouter(StarshipsPage) // Экспортируем компонент с возможностью навигации
