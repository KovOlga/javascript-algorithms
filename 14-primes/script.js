/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
    const primeArr = [];

    for (let j = 2; j <= num; j++) {
        let isPrime = true;

        for (let i = 2; i <= Math.floor(j / 2) && isPrime; i++) {
            if (j % i === 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            primeArr.push(j);
        }
    }

    return primeArr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(primes(2));
console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]