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
// Самый используемый в JS метод FOR EACH работает с call-back functions
// т.к. ее можно настроить 3 аргумента
// item - элемент котор мы будем перебирать (можно назвать как угодно)
// i - порядковый номер
// ссылка на тот массив кот. мы перебираем arr
const arra = [1, 2, 3, 6, 8];
arra.forEach(function(item, i, arra) {
    console.log(`${i}: ${item} внутри массива ${arra}`);
});

const description = {
    name: 'WTF?',
    height: 2,
    structure: 'cube',
    values: {
        background: 'multicolor',
        borderWidth: 5,
        numberOf: 42

    },
    makeTest: function() {
        console.log("TEST TEST TEST");
    }
};

// создаем свой сбственный метод
description.makeTest();
// встроенный метод в языке
console.log(Object.keys(description).length);

var u=0, age = 1;

// while (1) {
//   if (u==true) {
//     console.log('Happy Birthday');
//     break;
//   }
//   else
//     u++;
// }

// SPLIT, JOIN, SORT
// SPLIT - способ перебора через известный заданый разделитель например запятая
// формирует массив на основании строк
const str = prompt("", "");
// промт работает только с браузером
const products = str.split(", ");
products.sort();
console.log(products.join('; '));
// JOIN - формирует строку на основании массива
// например список имен
// SORT - сортирует массив как строки в том числе и цифры

const ebatKopat = [2, 56, 11, 8, 99];
ebatKopat.sort();
console.log(ebatKopat);
// что-бы сортировал например числа по порядку применим функцию
// со встроенным алгоритмом быстрой сортировки
function compareNum(a, b) {
    return a- b;
}
// ПСЕВДОМАССИВ ЭТО СТРУКТУРА идентичная массиву но не использующая методы
