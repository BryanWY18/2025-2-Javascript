"use strict"

const tasks=[];

function addTask(){
    const input=document.getElementById("taskInput");
    const tastText= input.value.trim();

    if(tastText!==""){
        tasks.push({name:tastText, complete:false});
        const li=document.createElement("li");
        li.innerHTML=`
        <span onclick="toggleComplete(this,${tastText})">${tastText}</span>
        <div class="task-buttons">
            <button onclick="deleteTask(this)">Eliminar</button>
        </div>
        `;
        document.getElementById("taskList").appendChild(li);
        input.value="";
    }
    console.log(tasks);
};

function deleteTask(btn, taskTitle){
    for(let i=0; i<tasks.length; i++){
        if(taskTitle===tasks[i].name){
            taskTitle.splice(i,1);
        }
    }
    btn.closest("li").remove();
    console.log(tasks)
};

function toggleComplete(span, taskTitle){
    span.classList.toggle("task-complete");
        for(let i=0; i<tasks.length; i++){
        if(taskTitle===tasks[i].name){
            task[i].complete= true;
        }
    }
    console.log(tasks)
}