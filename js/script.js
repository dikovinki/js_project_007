"use strict";

const arr = [1, 2, 3, 6, 8];
// нарушение логики нумерации приведет к ошибке свойства length.
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// Свойство .length как соотносится с нумерацией элементов массива
// = последний индекс +1
console.log(arr.length);

// method pop - работает с концом массива удаляя элементы начиная с конца
arr.pop();
// method push - добавляет элемент с конца
arr.push(25);
console.log(arr);
// СПОСОБЫ ПЕРЕБОРОВ ЭЛЕМЕНТОВ В МАССИВЕ

// FOR (...)
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// FOR (... OF ...)
for (let value of arr) {
    console.log(value);
}
// Самый используемый в метод FOR EACH работает с call-back functions
// т.к. ее можно настроить 3 аргумента
// item - элемент котор мы будем перебирать (можно назвать как угодно)
// i - порядковый номер
// ссылка на тот массив кот. мы перебираем arr
const arra = [1, 2, 3, 6, 8];
arra.forEach(function(item, i, arra) {
    console.log(`${i}: ${item} внутри массива ${arra}`);
});

