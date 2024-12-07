// Импорты библиотек и стилей
import React from 'react'
import './not-found-indicator.css' // Стили для отображения страницы 404
import icon from './death-star.png' // Иконка, используемая в качестве визуального индикатора ошибки

// Функциональный компонент для отображения страницы ошибки "404 - Страница не найдена"
const NotFoundIndicator = () => {
    return (
        <div className="jumbotron"> {/* Основной контейнер с классом jumbotron для стилизации */}
            <div className="not-found-indicator d-flex"> {/* Основной контейнер-индикатор с горизонтальным расположением */}
                <div>
                    <img src={icon} alt="error icon" /> {/* Вставляем иконку с изображением */}
                </div>
                <div className="not-found-description"> {/* Описание ошибки */}
                    <span className="boom">Error 404</span> {/* Заголовок ошибки */}
                    <span>
                        Oops... We can't find this page :(
                    </span>
                    <span>
                        We are sorry, but the page you tried to go to doesn't exist.
                    </span>
                </div>
            </div>
        </div>
    )
}

// Экспорт компонента для дальнейшего использования
export default NotFoundIndicator
