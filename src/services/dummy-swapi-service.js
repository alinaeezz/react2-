// Класс DummySwapiService для имитации данных и методов, похожих на данные SWAPI
export default class DummySwapiService {

    // Массив тестовых данных о людях
    _people = [
        {
            id: 1,
            name: 'Bilbo Baggins [TEST DATA]',
            gender: 'male',
            birthYear: 'long ago',
            eyeColor: 'dark brown'
        },
        {
            id: 2,
            name: 'Frodo Baggins [TEST DATA]',
            gender: 'male',
            birthYear: 'long ago',
            eyeColor: 'dark brown'
        }
    ];

    // Массив тестовых данных о планетах
    _planets = [
        {
            id: 1,
            name: 'Earth [TEST DATA]',
            population: '7.530.000.000',
            rotationPeriod: '23 hours 56 seconds',
            diameter: '12.742 km'
        },
        {
            id: 2,
            name: 'Venus [TEST DATA]',
            population: 'not known',
            rotationPeriod: '243 days',
            diameter: '12.104 km'
        }
    ];

    // Массив тестовых данных о звездолётах
    _starships = [
        {
            id: 1,
            name: 'USS Enterprise [TEST DATA]',
            model: 'NCC-1701-C',
            manufacturer: 'Northrop Grumman Shipbuilding',
            costInCredits: 'not known',
            length: 'approx 300 meters',
            crew: 1000,
            passengers: 50,
            cargoCapacity: 100
        }
    ];

    // Метод для получения списка всех людей
    getAllPeople = async () => {
        return this._people; // Возвращаем массив людей
    }

    // Метод для получения данных конкретного человека
    getPerson = async () => {
        return this._people[0]; // Возвращаем первого человека
    }

    // Метод для получения всех планет
    getAllPlanets = async () => {
        return this._planets; // Возвращаем массив планет
    }

    // Метод для получения данных конкретной планеты
    getPlanet = async () => {
        return this._planets[0]; // Возвращаем первую планету
    }

    // Метод для получения всех звездолётов
    getAllStarships = async () => {
        return this._starships; // Возвращаем массив звездолётов
    }

    // Метод для получения данных конкретного звездолёта
    getStarship = async () => {
        return this._starships[0]; // Возвращаем первый звездолёт
    };

    // Метод для получения URL изображения для людей
    getPersonImage = () => {
        return `https://placeimg.com/400/500/people`; // Генерация тестового изображения
    }

    // Метод для получения URL изображения для звездолётов
    getStarshipImage = () => {
        return `https://placeimg.com/600/400/tech`; // Генерация тестового изображения
    }

    // Метод для получения URL изображения для планет
    getPlanetImage = () => {
        return `https://placeimg.com/400/400/nature`; // Генерация тестового изображения
    }
}
