/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 * 
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 * 
*/

function palindrome(str) {
    // for (let i = 0; i < Math.floor(str.length / 2); i++) {
    //     if (str[i].toLowerCase() !== str[str.length - i - 1].toLowerCase()) return false;
    // }
    // return true;
    const regExp = /\W/g;
    const toLowerCaseStr = str.toLowerCase();
    toLowerCaseStr.replace(regExp, '');
    const reversedStr = toLowerCaseStr.split('').reverse().join('')
    return toLowerCaseStr === reversedStr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(palindrome('топ от!'));
console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false

/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 * 
 * palindrome('О, лета тело!'); // true
 * 
*/