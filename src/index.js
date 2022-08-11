import './style.css';

const todosList = [
  { description: 'hello', completed: false, index: 1 },
  { description: 'done', completed: false, index: 2 },
];

const render = (list) => {
  const sortedTodos = list.sort((a, b) => a.index - b.index);
  const todosContainer = document.querySelector('.lists');
  let todosHtml = '';
  sortedTodos.forEach((todo) => {
    todosHtml += ` <div class="todo-item">
        <input type="checkbox" /><span> ${todo.description}</span>
    </div>`;
  });
  todosContainer.innerHTML = todosHtml;
};

render(todosList);
