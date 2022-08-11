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

  taskContainer.innerHTML = taskHtml;
  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const element = btn.parentNode;
      element.remove();
      taskList.removeTask(e.target.parentNode.id);
    });
  });
};

export default render;
