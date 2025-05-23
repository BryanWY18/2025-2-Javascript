"use strict";

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span onclick="toggleComplete(this)">${taskText}</span>
      <div class="task-buttons">
        <button onclick="deleteTask(this)">Delete</button>
      </div>
    `;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}