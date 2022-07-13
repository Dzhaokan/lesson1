// function sayHello () {
//     console.log("hello")
// }
//
// sayHello();

//function getFullName ( user, age) { //функция (обычная)
//    if (age < 18){
//        console.log( user.first_name, user.last_name + " " + "CLOSE")
//    } else {
//        console.log( user.first_name, user.last_name + " " + "Open")
//  }
//}

//const Beka = {
// first_name: "Beka",
//    last_name: "Aydarov"
//}

//getFullName(Beka, 19)

// const anonym = function () {
//     console.log("text")
// }
//
// anonym();

// function twoMass (arr1, arr2) {
//     if(arr1.length > arr2.length){
//         alert("arr1 > arr2")
//     }else if(arr1.length < arr2.length){
//         alert("arr1 < arr2")
//     }else {
//         alert("arr1 === arr2")
//     }
//
// }
// const arr1 = [1212, 32423, 4234]
// const arr2 = [23432, 234, 23, 432, 23432, 234]
//
// twoMass(arr1, arr2)

function tr () {
    let line = "*"
    while(line.length <= 7){
        console.log(line)
        line = line + "*"
    }
}
tr()