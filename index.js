console.log('===============================HW1================================')
let names = 'Вася;Петя;Вова;Олег';
const newArr = names.split(';');
console.log(newArr);

console.log('===============================HW2================================')
let nameForHello = 'Василий'
let testHello;

function hello2(name) {
    let helloName = typeof name === "string" ? `Привет ${nameForHello}` : `Привет,гость`
    console.log(helloName);
}
hello2(nameForHello);
hello2(testHello);

console.log('===============================HW3================================')

function addOneForAll(...numbers) {
    let numbersMass = [];
    for (i = 0; i < numbers.length; i++) {
        numbersMass.push(numbers[i] + 1);
    }
    return numbersMass;
}
const val = addOneForAll(1, 2, 3, 4);
console.log(val);

console.log('===============================HW4================================')
var i = 0;
while (true) {
    if (Math.random() > 0.9) {
        alert(++i);
        break;
    } else i++;
}
console.log('===============================HW5================================')
let chessBoard = "";
let size = 8;

for (let lineCounter = 1; lineCounter < size; lineCounter++) {

    if (lineCounter % 2 === 0) {
        for (let charCounter = 1; charCounter < size; charCounter++) {
            let evenOdd = (charCounter % 2 === 0);
            switch (evenOdd) {
                case true:
                    (chessBoard += "#");
                    break;
                case false:
                    (chessBoard += " ");
                    break;
            }
        }
    } else {
        for (let charCounter = 1; charCounter < size; charCounter++) {
            let evenOdd = (charCounter % 2 === 0);
            switch (evenOdd) {
                case true:
                    (chessBoard += " ");
                    break;
                case false:
                    (chessBoard += "#");
                    break;
            }
        }
    }
    chessBoard += "\n";
}
console.log(chessBoard);


console.log('===============================HW6================================')
let arr6 = []

for (let i = 0; i < 7; i++) {
    arr6[i] = Math.pow(i, 3);
}

console.log(arr6)