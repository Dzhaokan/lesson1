const blocks = document.getElementsByClassName("block") //брать элемент по классу
// console.log(blocks)

// const block3 = document.getElementById("block3") // брать элемент по id
// console.log(block3)

// block3.className = "changedClass"; //изменить название класса

// block3.classList.add("newClass") //classList - список классов, add - добавить новый класс

// block3.classList.remove("block") // remove - удалить класс

// console.log(block3.classList)

// block3.onclick = () => {
//     block3.classList.toggle("active") // toggle - создаёт класс, если его нет ("active") или удаляет, если он есть
// }

// const block = document.querySelector(".block") // обращение к первому селектору

// const block2 = document.querySelectorAll(".block") // обращение ко всем селекторам
// console.log(block2)

const button = document.getElementById("button")
const input = document.getElementById("input")

button.onclick = () => {
    const div = document.createElement("div")
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "delete"
    const changeButton = document.createElement("button")
    changeButton.innerText = "change"
    div.setAttribute("class", "block")
    div.innerText = input.value

    div.append(deleteButton, changeButton)
    document.body.append(div)
    input.value = ""
}