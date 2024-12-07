import React from "react" // Импортируем React
import { withRouter } from 'react-router-dom' // Импортируем withRouter для работы с маршрутизацией

// Импорты компонентов
import { PersonDetails, PersonList } from "../sw-components" // Компоненты для отображения информации о персонажах
import Row from "../row" // Компонент Row для организации макета страницы

// Основной компонент страницы людей (PeoplePage)
const PeoplePage = ({ history, match }) => {

    const { id } = match.params // Достаём id из параметров маршрута

    return (
        <Row
            left={<PersonList onItemSelected={(id) => history.push(id)} />} // Слева отображаем список персонажей. При клике перенаправляем на соответствующую страницу
            right={<PersonDetails itemId={id} />} // Справа отображаем детали персонажа по id
        />
    )
}

// Обёртка с маршрутизацией с использованием withRouter
export default withRouter(PeoplePage) 
