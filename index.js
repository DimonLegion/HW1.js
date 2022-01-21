console.log('===============================HW1================================')

function myBind(func, context, rest) {
    return function(...args) {
        let indexArgs = 0;
        rest.forEach((element, index) => {
            if (element === undefined && indexArgs < args.length) {
                rest[index] = args[indexArgs]
                indexArgs++;
            }
        });
        let sortedRest = rest.filter(el => typeof(el) !== 'undefined')
        return func.apply(context, sortedRest);
    }
}

var pow5 = myBind(Math.pow, Math, [undefined, 5]);
var cube = myBind(Math.pow, Math, [undefined, 3]);
console.log(pow5(2));
console.log(cube(3));


var chessMin = myBind(Math.min, Math, [undefined, 4, undefined, 5, undefined, 8, undefined, 9])
console.log(chessMin(3, 15, -1)) // вызывает Math.min(-1, 4, -5, 5, 3, 8, 15, 9), результат -5

var zeroPrompt = myBind(prompt, window, [undefined, "0"])
var someNumber = zeroPrompt("Введите число")

let testBind = myBind((...params) => params.join(''), null, [undefined, 'b', undefined, undefined, 'e', 'f'])('a', 'c', 'd') === 'abcdef'

console.log(someNumber);
console.log(testBind);


console.log('===============================HW2================================')

function countKeys() {
    return Object.keys(this).length;
}
console.log(countKeys.call(user2));


console.log('===============================HW3================================')

let valObject0 = {
    value: [1, '2', 4, 8, '8', 3, 10, null, false]
}

function NewArray() {
    let get = [];
    for (let i = 0; i < this.value.lenght; i++) {
        let a = this.value[i];
        if ((typeof a == 'number') && (a < 10) && (a % 2 == 0)) {
            get.push(a);
        }
    }
    return get;
}
console.log(NewArray.call(valObject0));

console.log('===============================HW5================================')
let user = {
    birthdayDate: new Date("2000-10-03")
}

console.log("birthdayDate.toLocalString=>", user.birthdayDate.toLocaleString());

function whenlateBirthday() {
    let now = new Date();
    let lateBirthday = user.birthdayDate;
    if (now.getMonth() > user.birthdayDate.getMonth() || (now.getMonth() === user.birthdayDate.getMonth() && now.getDate() > user.birthdayDate.getDate())) {
        lateBirthday.setFullYear(now.getFullYear())
    } else {
        lateBirthday.setFullYear(now.getFullYear() - 1)
    }
    console.log("whenlateBirthday", (now - lateBirthday) / (1000 * 60 * 60 * 24))
}
whenlateBirthday()