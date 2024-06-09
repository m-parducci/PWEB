

// Função para exibir tarefas
function displayTasks() {
    const today = new Date().toISOString().split('T')[0];
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const hojeContainer = document.querySelector('#colunas-hoje .task-container');
    const aFazerContainer = document.querySelector('#colunas-fazer .task-container');
    const feitoContainer = document.querySelector('#colunas-feito .task-container');

    hojeContainer.innerHTML = '';
    aFazerContainer.innerHTML = '';
    feitoContainer.innerHTML = '';

    tasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card draggable';
        taskCard.innerHTML = `
            <div class="task-level">${task.priority}</div>
            <div class="task-header">${task.title}</div>
            <div class="task-body"><p>${task.description}</p></div>
            <div class="task-date"><i class="bi bi-calendar"></i>${task.dueDate}</div>
        `;

        if (task.dueDate === today) {
            hojeContainer.appendChild(taskCard);
        } else if (new Date(task.dueDate) > new Date(today)) {
            aFazerContainer.appendChild(taskCard);
        } else {
            feitoContainer.appendChild(taskCard);
        }
    });
}


// Função para adicionar uma nova tarefa
function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;
    const area = document.getElementById('area').value;
    const priority = document.getElementById('priority').value;

    if (!title || !description || !dueDate || !area || !priority) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const task = {
        title,
        description,
        dueDate,
        area,
        priority
    };

    saveTask(task);
    window.location.href = 'index.html'; // Redireciona para a página inicial após adicionar a tarefa
}

// Função para salvar a tarefa no localStorage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
