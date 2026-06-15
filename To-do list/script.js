const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

function renderTasks() {
    taskList.innerHTML = ''; 

    tasks.forEach((task, index) => {
        const newLi = document.createElement('li');
        newLi.innerText = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'ลบ ❌';
        deleteBtn.classList.add('delete-btn');

        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            localStorage.setItem('myTasks', JSON.stringify(tasks));
            renderTasks();
        });

        newLi.appendChild(deleteBtn);
        taskList.appendChild(newLi);
    });
}

addBtn.addEventListener('click', () => {
    const text = taskInput.value;
    
    if (text === "") {
        alert("กรุณาพิมพ์ข้อความก่อนกดเพิ่มครับ!");
        return; 
    }

    tasks.push(text);
    localStorage.setItem('myTasks', JSON.stringify(tasks));
    
    renderTasks();
    taskInput.value = "";
});

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addBtn.click(); 
    }
});

renderTasks();