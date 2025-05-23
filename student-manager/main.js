"use strict";

let students = [];

window.onload = function () {
  const stored = localStorage.getItem("students");
  if (stored) {
    students = JSON.parse(stored);
    displayStudents();
    updateAverage();
  }
}

function addStudent() {
  const name = document.getElementById("nameInput").value.trim();
  if (name === "" || name === isNaN) {
    alert("Debes de capturar un nombre válido");
    return;
  }
  const grade = parseFloat(document.getElementById("gradeInput").value);
  if (grade > 100 || grade < 0) {
    alert("Debes de capturar una calificación válida");
    return;
  }

  const student = {
    name,
    grade,
    status: grade >= 70 ? "Passed" : "Failed",
  };

  students.push(student);

  saveToLocalStorage();
  displayStudents();
  updateAverage();
}

function displayStudents() {
  const list = document.getElementById("studentList");
  list.innerHTML = ``;

  for (let i = 0; i < students.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `
      <p>${students[i].name} - ${students[i].grade} - ${students[i].status} </p>
    `;
    list.appendChild(li);
  }
}

function updateAverage() {
  if (students.length === 0) {
    return;
  }
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total = total + students[i].grade;
  }
  let average = total / students.length;

  document.getElementById("averageDisplay").textContent = `Average Grade: ${average.toFixed(2)}`;
}

function saveToLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}