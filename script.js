const taskInput = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const taskList = document.getElementById('taskList');

  let tasks = [];

  function renderTasks() {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
      const emptyMsg = document.createElement('li');
      emptyMsg.className = 'empty-msg';
      emptyMsg.textContent = 'No tasks yet. Add one above!';
      emptyMsg.style.background = 'transparent';
      emptyMsg.style.border = 'none';
      emptyMsg.style.justifyContent = 'center';
      taskList.appendChild(emptyMsg);
      return;
    }

    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      if (task.completed) li.classList.add('completed');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', () => toggleComplete(index));

      const span = document.createElement('span');
      span.className = 'task-text';
      span.textContent = task.text;
      span.addEventListener('click', () => toggleComplete(index));

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.innerHTML = '&times;';
      deleteBtn.addEventListener('click', () => deleteTask(index));

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }

  function addTask() {
    const text = taskInput.value.trim();
    if (text === '') return;

    tasks.push({ text: text, completed: false });
    taskInput.value = '';
    renderTasks();
  }

  function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
  }

  addBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
  });

  renderTasks();