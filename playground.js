const title = document.querySelector("h1")
const input1 = document.querySelector("#digit1")
const input2 = document.querySelector("#digit2")
const result = document.querySelector("#result")
const button = document.querySelector("#btnCalcular")
const form = document.querySelector("#form")

form.addEventListener("submit", sumInputValue)

function sumInputValue (event) {
    event.preventDefault()
    const value1 = parseInt(input1.value)
    const value2 = parseInt(input2.value)
    const suma = value1 + value2
    const newTitle = document.createElement("h3")
    newTitle.textContent = suma;
    result.append(newTitle)
}