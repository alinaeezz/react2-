import React from "react" // Импортируем React
import { withRouter } from 'react-router-dom' // Импортируем withRouter для работы с маршрутизацией

// Импорты компонентов
import { PlanetList, PlanetDetails } from "../sw-components" // Компоненты для отображения информации о планетах
import Row from "../row" // Компонент Row для организации макета страницы

// Основной функциональный компонент для страницы планет (PlanetsPage)
const PlanetsPage = ({ history, match }) => {

    const { id } = match.params // Достаём id из параметров маршрута

    return (
        <Row
            left={<PlanetList onItemSelected={(id) => history.push(id)} />} // Слева отображаем список планет. При клике пользователь будет перенаправлен на выбранную планету
            right={<PlanetDetails itemId={id} />} // Справа отображаем детали планеты по переданному id
        />
    )
}

// Обёртка с маршрутизацией с использованием withRouter
export default withRouter(PlanetsPage) 
