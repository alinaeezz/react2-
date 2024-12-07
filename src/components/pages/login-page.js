import React from "react" // Импортируем React

// Компонент страницы входа (LoginPage)
const LoginPage = ({ isLoggedIn, onLogin }) => {

    // Локальная функция для условного рендеринга контента страницы
    const content = (isLoggedIn) => {
        if (isLoggedIn) // Если пользователь вошёл
            return (
                <React.Fragment>
                    {/* Сообщение при успешном входе */}
                    <h5 align="center">You can see a secret page!!! Do it as quickly as possible!!!</h5>
                </React.Fragment>
            )

        return (
            <React.Fragment>
                {/* Сообщение и кнопка для входа */}
                <h5>Login to see secret page!!!</h5>
                <br/>
                <button className="btn btn-primary" onClick={onLogin}>
                    Login
                </button>
            </React.Fragment>
        )
    }

    return (
        <div className="jumbotron">
            { content(isLoggedIn) } {/* Вставляем условный контент */}
        </div>
    )
}

export default LoginPage // Экспортируем компонент для использования в других частях приложения
