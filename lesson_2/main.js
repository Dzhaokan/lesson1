// const array = [
//     {
//         username:'jack',
//         full_name:'jack barbaro'
//     },
//         {
//         username:'jack',
//         full_name:'jack barbaro'
//     },
//         {
//         username:'jack',
//         full_name:'jack barbaro'
//     },
//         {
//         username:'jack',
//         full_name:'jack barbaro'
//     },
//         {
//         username:'jack',
//         full_name:'jack barbaro'
//     }
// ]
// for (let i=0; i < array.length; i++) { //цикл for
//     console.log(array[i]) //индексы
// }
//
// for(let user of array){
//     console.log(user) //элементы
// }

// const   obj = {
//     key1:'b1',
//     key2:'b2',
//     key3:'b3',
//     key4:'b4',
//     key5:'b5',
//     key6:'b6',
//     key7:'b7',
// }
//
// for (let key in obj){
//     console.log(obj[key])
// }

// let i = 0;
//
// while (i < 5){
//     console.log("Hello")
//     i++
// }

// const users = [
//     {
//         username: 'jack',
//         salary: 500
//     },
//     {
//         username: 'john',
//         salary: 5000
//     },
//     {
//         username: 'beka',
//         salary: 10000
//     }
// ]

// const filteredUsers = users.filter(user => user.salary > 500)
// console.log(filteredUsers)

// for(let user of users){
//     if(user.salary > 500){
//         console.log(user)
//     }
// }

let num = '*'
while (num.length<=7) {
    num+='*'
    console.log(num)
}

for (let num='*'; num.length<=7; num+='*')
    console.log(num)

for (let i=1; i<=100; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}