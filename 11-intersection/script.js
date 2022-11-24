/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    // console.log(arr1);
    // console.log(arr2);
    const intersectionArr = [];

    arr1.forEach((arr1Item) => {
        // console.log(arr1Item + ' arr1Item //////')
        let newItem = arr2.find(function (arr2Item) {
            // console.log(arr2Item + ' arr2Item');
            // console.log(arr1Item === arr2Item);
            return arr1Item === arr2Item;
        })
        // console.log(intersectionArr);
        // console.log(newItem + ' newItem');
        if (newItem === undefined) {
            return intersectionArr;
        }
        for (let i = 0; i < intersectionArr.length; i++) {
            if (newItem === intersectionArr[i]) {
                return intersectionArr;
            }
        }
        intersectionArr.push(newItem);
        // console.log(intersectionArr);
        return intersectionArr;
    });
    return intersectionArr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []