console.log(typeof 8) //number
console.log(typeof NaN) //number
console.log(typeof 'String') //string
console.log(typeof true) //bolean
console.log(typeof { age: 25 }) //object
console.log(typeof a) //undefined
console.log(typeof(() => {})) //function
console.log(typeof null) //object
console.log(typeof Infinity) //number

let name = 'Vova';
if (typeof name === "string") {
    console.log(`Привет, ${name}`);
} else {
    console.log("Ошибка, не тот тип данных ")
}

let helloName = typeof name === "string" ? (`Привет, ${name}`) : ("Ошибка, не тот тип данных ");
console.log(helloName)

let n = 9;
let fDayOff;
switch (n) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        fDayOff = true;
        break;
    case 6:
    case 7:
        fDayOff = false;
        break;
    default:
        console.log("введите значение от 1 до 7");
        break;
}
if (fDayOff) {
    console.log("это будний день!")
} else {
    console.log("это выходной день!")
}