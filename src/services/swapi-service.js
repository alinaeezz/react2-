// Класс SwapiService предназначен для работы с SWAPI и обработки данных
export default class SwapiService {

    // Базовый URL для API и базовый путь для изображений
    _apiBase = 'https://swapi.dev/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    // Метод для выполнения запросов к API
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        // Проверяем корректность ответа от сервера
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json(); // Возвращаем JSON из ответа
    }

    // Получаем всех персонажей и преобразуем их
    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson); // Преобразуем данные через _transformPerson
    }

    // Получаем конкретного персонажа по ID и преобразуем его
    getPerson = async (id) => {
        let person = await this.getResource(`/people/${id}/`);
        person = this._transformPerson(person);
        person.homeworld = await this._transformHomeworld(person.homeworld); // Преобразуем домашнюю планету
        return person;
    }

    // Получаем все планеты и преобразуем их, пропуская первую
    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet).slice(1);
    }

    // Получаем конкретную планету по ID и преобразуем данные
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    // Получаем все звездолёты и преобразуем их, пропуская первые два
    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship).slice(2, -1);
    }

    // Получаем конкретный звездолёт по ID и преобразуем данные
    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    // Получаем URL изображения для персонажа
    getPersonImage = ({ id }) => {
        return `${this._imageBase}/characters/${id}.jpg`;
    }

    // Получаем URL изображения для звездолёта
    getStarshipImage = ({ id }) => {
        return `${this._imageBase}/starships/${id}.jpg`;
    }

    // Получаем URL изображения для планеты
    getPlanetImage = ({ id }) => {
        return `${this._imageBase}/planets/${id}.jpg`;
    }

    // Извлекаем ID из URL
    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    // Преобразуем данные о планете
    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            climate: planet.climate,
            terrain: planet.terrain,
            type: "planet"
        };
    }

    // Преобразуем данные о звездолёте
    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity,
            type: "starship"
        };
    }

    // Преобразуем данные о человеке
    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            hairColor: person.hair_color,
            mass: person.mass,
            height: person.height,
            homeworld: person.homeworld,
            type: "person"
        };
    }

    // Преобразуем URL домашней планеты для конкретного персонажа
    _transformHomeworld = async (url) => {
        const idRegExp = /\/([0-9]*)\/$/;
        const planetId = url.match(idRegExp)[1];
        const planet = await this.getResource(`/planets/${planetId}/`);
        return await planet.name; // Возвращаем имя планеты
    }
}
