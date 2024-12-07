// Создаем функцию compose для композиции функций (функциональное программирование)

// compose принимает набор функций и возвращает новую функцию-композицию
const compose = (...funcs) => (comp) => {
    // Используем reduceRight для последовательного применения функций справа налево
    return funcs.reduceRight((prevResult, fn) => fn(prevResult), comp)
}

// Экспортируем compose для повторного использования в других частях приложения
export default compose
