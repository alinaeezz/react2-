import React from "react"

// Импорты стилей и изображения
import './welcome-header.css'
import intro from './welcome-header.jpg'

// Функциональный компонент WelcomeHeader
const WelcomeHeader = () => {
    return (
        <div className="row mb2 w-header"> {/* Основной контейнер с классами для стилей */}
            <div className="col-md-6"> {/* Левая половина страницы */}
                <div className="description"> {/* Описание сайта */}
                    <h1 className="display-4">Star Data Base</h1> {/* Заголовок */}
                    <p className="lead">Welcome to our website.</p> {/* Краткое приветствие */}
                    <p className="lead">
                        Here you can see illustrations of person, planets, and spaceships from the
                        Star Wars movie series and a little information about them.
                    </p> {/* Дополнительное описание */}
                    <hr className="my-4" /> {/* Горизонтальная линия-разделитель */}
                    <p className="minor">
                        © Copyright 2020. Developer - <a href="https://ythosa.github.io">Ythosa</a>. {/* Информация об авторских правах */}
                    </p>
                </div>
            </div>
            <div className="col-md-6"> {/* Правая половина страницы */}
                <div className="intro-img"> {/* Блок с изображением */}
                    <img src={intro} alt="intro" /> {/* Вставляем изображение */}
                </div>
            </div>
        </div>
    )
}

export default WelcomeHeader
