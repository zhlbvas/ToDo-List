const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask)

function addTask(){
    if (taskInput === ' '){
        alert('Please write a task.');
    }
    else{
        const task = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        const taskText = document.createElement('span');
        taskText.innerText = taskInput.value;
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', deleteTask);
        task.appendChild(checkbox);
        task.appendChild(taskText);
        task.appendChild(deleteButton);
        taskInput.appendChild(task);
        taskInput.value = '';
    }
}
function deleteTask(event){
     const task = event.target.parentElement;
     taskList.removeChild(task);
}
