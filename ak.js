function add(){

let a = Number(document.getElementById("num1").value);
let b = Number(document.getElementById("num2").value);

let result = a + b;

document.getElementById("result").innerText = "Result: " + result;

}

function subtract(){

let a = Number(document.getElementById("num1").value);
let b = Number(document.getElementById("num2").value);

let result = a - b;

document.getElementById("result").innerText = "Result: " + result;

}

function multiply(){

let a = Number(document.getElementById("num1").value);
let b = Number(document.getElementById("num2").value);

let result = a * b;

document.getElementById("result").innerText = "Result: " + result;

}

function divide(){

let a = Number(document.getElementById("num1").value);
let b = Number(document.getElementById("num2").value);

let result = a / b;

document.getElementById("result").innerText = "Result: " + result;

}