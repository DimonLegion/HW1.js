console.log('===============================HW1================================')
    // const studentsArr = [];
    // const incomingStudents = [{
    //         name: 'Сергей',
    //         surname: 'Войлов',
    //         ratingPoint: 1000,
    //         schoolPoint: 1000,
    //         course: 2,
    //     },
    //     {
    //         name: 'Татьяна',
    //         surname: 'Коваленко',
    //         ratingPoint: 880,
    //         schoolPoint: 700,
    //         course: 1,
    //     },
    //     {
    //         name: 'Анна',
    //         surname: 'Кугир',
    //         ratingPoint: 1430,
    //         schoolPoint: 1200,
    //         course: 3,
    //     },
    //     {
    //         name: 'Станислав',
    //         surname: 'Щелоков',
    //         ratingPoint: 1130,
    //         schoolPoint: 1060,
    //         course: 2,
    //     },
    //     {
    //         name: 'Денис',
    //         surname: 'Хрущ',
    //         ratingPoint: 1000,
    //         schoolPoint: 990,
    //         course: 4,
    //     },
    //     {
    //         name: 'Татьяна',
    //         surname: 'Капустник',
    //         ratingPoint: 650,
    //         schoolPoint: 500,
    //         course: 3,
    //     },
    //     {
    //         name: 'Максим',
    //         surname: 'Меженский',
    //         ratingPoint: 990,
    //         schoolPoint: 1100,
    //         course: 1,
    //     },
    //     {
    //         name: 'Денис',
    //         surname: 'Марченко',
    //         ratingPoint: 570,
    //         schoolPoint: 1300,
    //         course: 4,
    //     },
    //     {
    //         name: 'Антон',
    //         surname: 'Завадский',
    //         ratingPoint: 1090,
    //         schoolPoint: 1010,
    //         course: 3
    //     },
    //     {
    //         name: 'Игорь',
    //         surname: 'Куштым',
    //         ratingPoint: 870,
    //         schoolPoint: 790,
    //         course: 1,
    //     },
    //     {
    //         name: 'Инна',
    //         surname: 'Скакунова',
    //         ratingPoint: 1560,
    //         schoolPoint: 200,
    //         course: 2,
    //     },
    // ];

// class Student {

//     constructor(enrollee) {
//         this.obj = Object.assign({ id: studentsArr.length + 1 }, enrollee);
//         studentsArr.push(this.obj);
//         this.isSelfPayment = this.isSelfPaymentCalc(enrollee);
//     };

//     listOfStudents() {
//         return studentArr;

//     }

//     isSelfPaymentCalc(enrollee) {
//         if (enrollee.ratingPoint > 800) {
//             console.log(1);
//             if (studentsArr.length) {
//                 console.log(2);
//                 if (studentsArr.length === 5) {
//                     console.log(3);
//                     const lowestRaiting = studentsArr.sort((firstStudent, secondStudent) => {
//                         if (firstStudent.ratingPoint < secondStudent.ratingPoint) {
//                             return -1;
//                         }
//                         if (firstStudent.ratingPoint > secondStudent.ratingPoint) {
//                             return 1;
//                         }
//                         return 0;
//                     });

//                     const lowestStudent = lovestRating[0];
//                     console.log(lowestRaiting)
//                 }
//                 return false;
//             }
//             return false;
//         }
//         return true;
//     }
// }
// incomingStudents.forEach((innerStudent) => {
//     new Student(innerStudent);
// })
console.log('===============================HW2================================')
    // class CustomString {
    //     constructor() {

//     }
//     reverse(string) {
//         return string.split("").reverse().join("");
//     }

//     ucFirst(string) {
//         return string[0].toUpperCase() + string.slice(1);
//     }
//     ucWords(string) {
//         return string.split(" ").map((string) => {
//             return string[0].toUpperCase() + string.slice(1);
//         }).join(" ");
//     }
// }

// const myString = new CustomString();

// console.log(myString.reverse('qwerty'));
// console.log(myString.ucFirst('qwerty'));
// console.log(myString.ucWords('qwerty qwerty qwerty'));
console.log('===============================HW3================================')

// class Validator {
//     constructor() {

//     }
//     checkIsEmail(email) {
//         return !!email.match(
//             /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         );
//     }

// }


// let validator = new Validator();




// console.log(validator.checkIsEmail('vasya.pupkin@gmail.com'));
// validator.checkIsDomain('google.com'); // true
// validator.checkIsDate('30.11.2019'); // true
// validator.checkIsPhone('+38 (066) 937-99-92'); // если код страны Украинский, то возвращаем true иначе false