// Импорты страниц из локальных путей
import PeoplePage from "./people-page" // Страница людей (People)
import PlanetsPage from "./planets-page" // Страница планет (Planets)
import StarshipsPage from "./starships-page" // Страница звездолётов (Starships)
import SecretPage from "./secret-page" // Страница с секретным доступом
import LoginPage from "./login-page" // Страница авторизации (Login)
import WelcomePage from "./start-page" // Стартовая страница (Welcome)

// Экспорт всех страниц в одном объекте для удобного импорта в других частях приложения
export {
    PeoplePage, // Экспорт страницы людей
    PlanetsPage, // Экспорт страницы планет
    StarshipsPage, // Экспорт страницы звездолётов
    SecretPage, // Экспорт секретной страницы
    LoginPage, // Экспорт страницы авторизации
    WelcomePage // Экспорт стартовой страницы
}
