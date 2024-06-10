// Função para exibir tarefas na página de edição
function displayTasksOnEditPage() {
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

// Exibe as tarefas ao carregar a página de edição
document.addEventListener('DOMContentLoaded', displayTasksOnEditPage);


