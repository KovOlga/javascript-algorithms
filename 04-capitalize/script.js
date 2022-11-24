/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    if (!(str === ' ') && !(str === '')) {
        const ableStr = str.trim();
        if (typeof ableStr === 'string') {
            const res = ableStr.split(' ').map((item) => item[0].toUpperCase() + item.slice(1)).join(' ');
            return res
        }
    } else {
        console.log('Пустая строка');
        return str;
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('  молодость всё простит')); // "Молодость Всё Простит"