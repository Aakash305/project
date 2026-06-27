let students = [];

function addStudent(){

let name = document.getElementById("studentName").value;

students.push(name);

document.getElementById("studentName").value = "";

}

function showStudents(){

let list = document.getElementById("studentList");

list.innerHTML = "";

for(let i = 0; i < students.length; i++){

list.innerHTML += "<li>" + students[i] + "</li>";

}

}