console.log('===============================HW1================================')
let sumPrompt = 0;
let x = prompt(4)
let sumPrompt2 = 0;

console.log(x);
for (let index = 0; index <= +x; index++) {
    sumPrompt += index ** 2
}
console.log(sumPrompt)

console.log('===============================HW2================================')

function avg2(a, b) {
    return (a + b) / 2;
}
let a = avg2(2, 3);
console.log(a);


console.log('===============================HW3================================')
let mas = [
    [1, 6, 3, '6'],
    [10, 15, 13, '10']
];
let mas2 = mas.flat(Infinity);
let masFilter = mas2.filter(el => typeof el === 'number' && el % 2 === 0);
const reducer1 = (previousValue, currentValue) => previousValue + currentValue;
console.log(masFilter.reduce(reducer1));
/*
let mas = [
    [1, 6, 3, '6'],
    [10, 15, 13, '10']
];
let sum3 = 0;
debugger;
for (let i = 0; i < mas.length; i++) {
    for (let y = 0; y < mas[i].length; y++) {
        if (typeof mas[i][y] == "number") {
            if (mas[i][y] % 2 == 0) {
                sum3 = sum3 + mas[i][y];
            }
        }
    }
}
console.log(sum3)
*/

console.log('===============================HW4================================')
let userObject = {
    123: 356
}
let userKey = prompt('User Key')
while (true) {

    if (Object.keys(userObject).includes(userKey)) {
        userKey = prompt('User Key');
    } else {
        let = userValue = prompt('User Value');
        newValuesInObject(userKey, userValue, userObject);
        break;
    }
}

function newValuesInObject(key, value, obj) {
    obj[key] = value;
}
console.log(userObject)


console.log('===============================HW5================================')
let flag = true;
while (flag) {
    if (flag === confirm('Перейти по cсылке?')) {
        break;
    }
}

console.log('===============================HW6================================')
let arr = [3, 5, 19, 1, 7, 23, 14, 9];
arr.sort((a, b) => b - a);


const array1 = [3, 5, 19, 1, 7, 23, 14, 9];
const reducer = (previousValue, currentValue) => previousValue + currentValue;


let arr3 = [-15, -5, 3, 5, 12, 9, 23, 17];
let filteredArr = arr3.filter(el => el > 0);

const arr4 = [1, 2, 3, 5, 'sasha', 'masha', undefined];
const arr5 = [];
for (let i = 0; i < arr4.length; i++) {
    if (typeof arr4[i] === 'number') {
        arr5.push(arr4[i] + 10);
    }
}

console.log(arr);
console.log(array1.reduce(reducer));
console.log(filteredArr);
console.log(arr5);






console.log('===============================HW7================================')
let currentDate = new Date();
console.log(currentDate)













console.log('===============================HW8================================')