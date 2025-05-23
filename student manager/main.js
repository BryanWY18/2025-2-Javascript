"use strict"

let students=[];

function addStudent(){
    const name=document.getElementById("nameInput").value.trim();
    const grade=parseFloat(document.getElementById("gradeInput").value);

    if(name==="" || isNaN(grade) || (grade<0 && grade>100)){
        alert("Please enter a valid data");
        return;
    }

    const student={
        name,
        grade,
        status: grade>=70 ? "Passed":"Failed",
    };
    students.push(student);

    saveToLocalStorage();
    displayStudents();
    updateAverage();
    document.getElementById("nameInput").value="";
    document.getElementById("gradeInput").value="";
    console.log(students);

};

function displayStudents(){
    const list=document.getElementById("studentList");
    list.innerHTML=``;
    for(let i=0; i<students.length;i++){
        const li=document.createElement("li");
        li.innerHTML=`
            <p>${students[i].name} - ${students[i].grade} - ${students[i].status}</p>
        `;
        list.appendChild(li);
    }
};

function updateAverage(){
    if(students.length==0){
        return;
    }
    let total=0;
    for(let j; j<students.length;j++){
        total=total+students[j].grade;
    }
    let avg=total/students.length;
    console.log(avg, total)
    document.getElementById("averageDisplay").textContent=`Average Grade: ${avg}`;
}

saveToLocalStorage(){
    localStorage.setItem("students", JSON.stringify(students));
};