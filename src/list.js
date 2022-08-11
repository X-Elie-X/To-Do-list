export default class AddToDoList {
  constructor() {
    this.list = localStorage.getItem('taskList')
      ? JSON.parse(localStorage.getItem('taskList'))
      : [];
  }

  addTask(todo) {
    this.list.push(todo);
    localStorage.setItem('taskList', JSON.stringify(this.list));
  }

  removeTask(todoID) {
    this.list = this.list.filter((todo) => todo.id !== todoID);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorage.setItem('taskList', JSON.stringify(this.list));
  }
}
