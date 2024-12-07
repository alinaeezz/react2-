import React from 'react'

// Создание контекста с помощью React.createContext
// Деструктурируем 'Provider' и 'Consumer' из созданного контекста
const {
  Provider: SwapiServiceProvider, // Компонент-провайдер
  Consumer: SwapiServiceConsumer // Компонент-потребитель
} = React.createContext()

// Экспортируем компоненты-провайдер и потребитель
export {
  SwapiServiceProvider,
  SwapiServiceConsumer
}
