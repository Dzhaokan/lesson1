const a = "a"
// const - неизменяемая переменная
//string - строка (содержимое в ковычках)
console.log(a)

let c = 32; // number
// let - изменяемая переменная

console.log(c)

const bool = true; // boolean (true/false)
const bool2 = false;

const obj = { //object {} - объект указывается в фигурных скобках!
    key: 'value',
    username: 'Kanat',
    data: {
        first_name: 'Kanat',
        last_name: 'Molodec'
    }
}

// console.log(obj.data.last_name)

const arr = ["Aydana", true, false, 25]

console.log(arr[2]);

const arr2 = [ // [] - массив обозначается в квадратных скобках
    {
        key: 'value'
    },
    {
        key: 'value2'
    },
    {
        key: 'value3'
    }
]
console.log(arr2[1].key)

// const name = prompt("Как вас зовут?")
// console.log("Hello " + name)

// const age = alert("у вас ошибка")

// const first_number = prompt("Первое число?")
// const last_number = prompt("Второе число?")

// if (first_number > last_number){
//     console.log(first_number + ">" + last_number)
// } else if(first_number < last_number){
//     console.log(first_number + "<" + last_number)
// } else  {
//     console.log(first_number + "=" + last_number)
// }
