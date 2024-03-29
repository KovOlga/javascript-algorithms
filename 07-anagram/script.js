/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    const loweredFirstStr = str1.toLowerCase();
    const loweredSecondStr = str2.toLowerCase();

    if (loweredFirstStr === loweredSecondStr) {
        return false;
    } else {
        const sortedFirstStr = loweredFirstStr.split('').sort().join('');
        const sortedSecondStr = loweredSecondStr.split('').sort().join('');

        console.log(sortedFirstStr === sortedSecondStr)

        return sortedFirstStr === sortedSecondStr;
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false