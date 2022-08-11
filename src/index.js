import './style.css';
// import render from './populateui.js';
// import AddToDoList from './list.js';
const render = (taskList) => {
  const sortedTask = taskList.list.sort((a, b) => a.index - b.index);
  const taskContainer = document.querySelector('.lists');
  let taskHtml = '';
  sortedTask.forEach(({ completed, description, id }) => {
    const checkedTodo = completed ? 'checked' : '';
    const checkClass = completed ? 'checked' : '';
    taskHtml += `  <div class="todo-item">
                          <div>
                              <input id="${id}" class="todo-check" type="checkbox" ${checkedTodo} />
                              <input id="${id}" class="todo-edit ${checkClass}" type="text" value="${description}" />
                          </div>
                          <button id="${id}" class="remove-btn"><i id="remove" class="fa-solid fa-trash-can fa-lg"></i></button>
                      </div>
      `;
  });
};
const taskList = new AddToDoList();
render(taskList);

const addTodoBtn = document.querySelector('.add-btn');
addTodoBtn.addEventListener('click', () => {
  const id = `id${Math.random().toString(16).slice(2)}`;
  const description = document.querySelector('.input-list').value.trim();
  const completed = false;
  const index = taskList.list.length + 1;

  const newTask = {
    id,
    description,
    completed,
    index,
  };
  if (description) {
    taskList.addTask(newTask);
    render(taskList);
  }
});

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
  taskList.clearCompletedTask();
  render(taskList);
});
