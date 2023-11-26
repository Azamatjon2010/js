const todoList = document.getElementById('todoList');

function addTask() {
    const taskText = prompt('Enter your task:');
    
    if (!taskText) return; // Agar foydalanuvchi matnni kiritmasa, funksiya tugaydi

    const li = document.createElement('li');
    const checkbox = createCheckbox();
    const editButton = createButton('Edit', () => editTask(h3));
    const deleteButton = createButton('Delete', () => deleteTask(li));
    const h3 = document.createElement('h3');
    
    h3.innerText = taskText;
    li.appendChild(checkbox);
    li.appendChild(h3);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}

function createCheckbox() {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
        h3.style.textDecoration = this.checked ? 'line-through' : 'none';
    });
    return checkbox;
}

function createButton(text, onClick) {
    const button = document.createElement('button');
    button.innerText = text;
    button.addEventListener('click', onClick);
    return button;
}

function editTask(element) {
    const newText = prompt('Edit your task:', element.innerText);
    if (newText !== null) {
        element.innerText = newText;
    }
}

function deleteTask(element) {
    todoList.removeChild(element);
}
