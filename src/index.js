import List from './list';
import './style.css';

const Lists = new List();
// render(Lists);

const addListBtn = document.querySelector('.add-btn');
addListBtn.addEventListener('click', () => {
  const id = `id${Math.random().toString(16).slice(2)}`;
  const description = document.querySelector('.input-list').value.trim();
  const completed = false;
  const index = Lists.list.length + 1;

  const newList = {
    id,
    description,
    completed,
    index,
  };
  if (description) {
    Lists.addTodo(newList);
    render(Lists);
  }
});

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
  Lists.clearCompletedTodos();
  render(Lists);
});
