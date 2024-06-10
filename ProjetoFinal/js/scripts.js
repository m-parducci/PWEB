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
        id: generateUniqueId(),
        title,
        description,
        dueDate,
        area,
        priority
    };

    saveTask(task);
    window.location.href = 'index.html'; // Redireciona para a página inicial após adicionar a tarefa
}

// Função para gerar um ID único
function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9); // Prefixo "_" adicionado ao ID
}

// Função para salvar a tarefa no localStorage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função para exibir tarefas
function displayTasks() {
    const today = new Date().toISOString().split('T')[0];
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const hojeContainer = document.querySelector('#colunas-hoje .task-container');
    const aFazerContainer = document.querySelector('#colunas-fazer .task-container');
    const feitoContainer = document.querySelector('#colunas-feito .task-container');
 // Codificar tarefas como string JSON
    const encodedTasks = encodeURIComponent(JSON.stringify(tasks));



    hojeContainer.innerHTML = '';
    aFazerContainer.innerHTML = '';
    feitoContainer.innerHTML = '';

    tasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card draggable';
        taskCard.id = task.id;

        // Adicionando classes de borda com base na área da tarefa
        switch (task.area.toLowerCase()) {
            case 'pessoal':
                taskCard.classList.add('task-border-pessoal');
                break;
            case 'profissional':
                taskCard.classList.add('task-border-profissional');
                break;
            case 'treinos':
                taskCard.classList.add('task-border-treinos');
                break;
            case 'academica':
                taskCard.classList.add('task-border-academica');
                break;
            default:
                break;
        }

        // Obtendo a cor de fundo e a cor do texto com base na prioridade
        const priorityColor = getPriorityColor(task.priority);
        const textColor = getPriorityTextColor(task.priority);

        taskCard.innerHTML = `
            <div class="task-level" style="background-color: ${priorityColor}; color: ${textColor};">${task.priority}</div>
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

    setupTaskSelection(); // Reaplicando os event listeners de seleção de tarefas ao exibir tarefas


}

// Função para obter a cor de fundo com base no valor da prioridade
function getPriorityColor(priority) {
    switch (priority) {
        case 'alta':
            return '#fc849096';
        case 'media':
            return '#dee7fcd4';
        case 'baixa':
            return '#FBE594';
        default:
            return '#dee7fcd4';
    }
}

// Função para obter a cor do texto com base no valor da prioridade
function getPriorityTextColor(priority) {
    switch (priority) {
        case 'alta':
            return '#552d27';
        case 'media':
            return '#20223d';
        case 'baixa':
            return '#D58D49';
        default:
            return '#20223d';
    }
}

// Função para gerar um ID único
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
}

// Função para remover a tarefa do localStorage
function removeTaskFromLocalStorage(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função para adicionar estilo de destaque às tarefas
function highlightTasks() {
    const taskCards = document.querySelectorAll('.task-card');
    taskCards.forEach(card => {
        card.classList.toggle('highlight');
    });
}

let deleteEnabled = false; // Inicialmente, a função de deletar está desabilitada

// Função para remover tarefas com confirmação
function removetask() {
    // Verifica se a função de deletar está habilitada
    if (!deleteEnabled) {
        // Ativa a função de deletar
        deleteEnabled = true;
        // Adiciona ou remove o estilo de destaque das tarefas
        highlightTasks();
        // Adiciona um ouvinte de evento de clique a cada card
        const taskCards = document.querySelectorAll('.task-card');
        const taskClickListener = function (event) {
            // Verifica se a função de deletar está habilitada ao clicar na tarefa
            if (deleteEnabled) {
                const confirmDelete = confirm('Você realmente deseja deletar esta tarefa?');
                if (confirmDelete) {
                    // Remove a tarefa do localStorage
                    removeTaskFromLocalStorage(this.id);
                    // Remove a tarefa selecionada
                    this.remove();
                }
                // Remove os listeners de clique após a ação, independentemente da confirmação
                taskCards.forEach(card => {
                    card.removeEventListener('click', taskClickListener);
                });
                // Remove o destaque das outras tarefas
                taskCards.forEach(card => {
                    card.classList.remove('highlight');
                    card.classList.remove('selected');
                });
                // Desativa novamente a função de deletar
                deleteEnabled = false;
            }
        };
        taskCards.forEach(card => {
            card.addEventListener('click', taskClickListener);
        });
    } else {
        // Desativa a função de deletar no segundo clique
        deleteEnabled = false;
        // Remove o destaque das tarefas
        const taskCards = document.querySelectorAll('.task-card');
        taskCards.forEach(card => {
            card.classList.remove('highlight');
            card.classList.remove('selected');
        });
    }
}

// Função para remover a tarefa do localStorage
function removeTaskFromLocalStorage(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Exibe as tarefas ao carregar a página
document.addEventListener('DOMContentLoaded', displayTasks);

// Adiciona estilos de destaque no CSS
const style = document.createElement('style');
style.innerHTML = `
    .task-card.highlight {
        border: 2px dotted ;
        background-color: #FFE6F087;
    }
`;
document.head.appendChild(style);

// Função para configurar a seleção de tarefas
function setupTaskSelection() {
    const taskCards = document.querySelectorAll('.task-card');
    taskCards.forEach(card => {
        card.addEventListener('click', function () {
            this.classList.toggle('selected');
        });
    });
}

// Exibe as tarefas ao carregar a página
document.addEventListener('DOMContentLoaded', displayTasks);


// --EDITAR-- //
