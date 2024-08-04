const taskInput = document.getElementById("task-input");
const submitbutton = document.getElementById("submit");
const result = document.getElementById("output");

submitbutton.onclick = function(){

  const  tasktext = taskInput.value.trim();


if (tasktext === ''){
  alert("please eneter the task")
  return;
}

const li=document.createElement('li');
li.textContent = tasktext;
result.appendChild(li);

taskInput.value ='';}