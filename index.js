console.log('===============================HW1================================')
let table = document.getElementById('Multitable');
for (let i = 1; i < 10; i++) {
    let tr = document.createElement('div');
    tr.className = 'tr';
    table.appendChild(tr);

    for (let j = 1; j < 10; j++) {
        let td = document.createElement('div');
        td.className = 'td';
        tr.appendChild(td);
        td.innerText = ` ${i*j}`;
    }
}

console.log('===============================HW2================================')
Array.prototype.getUnique = function() {
    let result = [];
    for (const numbers of arr) {
        if (!result.includes(numbers)) {
            result.push(numbers);
        }
    }
    return result;
};
const arr = [1, 1, 2, 2, 3, 123321, 122312, 123, 1, 1, 2, 3, 1, 1, 2];
const newArr = arr.getUnique();
console.log(newArr);

console.log('===============================HW3================================')
let count0 = 0

function counter(count) {
    return function() {
        return count0 = count + count0;
    }();
}
console.log(counter(10));
console.log(counter(11));
console.log(counter(12));

console.log('===============================HW4================================')
class Calculator {
    constructor() {
        this.a;
        this.b;
        this.c;
    };
    setAction() {
        this.c = prompt('enter plus, minus, divide, multiply');
        console.log(this);
    }
    read() {
        this.a = prompt('first number');
        this.b = prompt('second number');
    }
    doAction() {
        switch (this.c) {
            case '+':
                return +this.a + +this.b;
            case '-':
                return +this.a - +this.b
            case '/':
                return +this.a / +this.b
            case '*':
                return +this.a * +this.b
            default:
                break;
        }
    }

}
let calc = new Calculator();
calc.read();
calc.setAction();
let result = calc.doAction();
console.log(result);