export default class List {
  constructor() {
    this.list = localStorage.getItem('lists')
      ? JSON.parse(localStorage.getItem('lists'))
      : [];
  }

  addTodo(list) {
    this.list.push(list);
    localStorage.setItem('lists', JSON.stringify(this.list));
  }

  removeList(list1) {
    this.list = this.list.filter((list) => list.id !== list1);
    this.list.forEach((list, index) => {
      list.index = index + 1;
    });
    localStorage.setItem('lists', JSON.stringify(this.list));
  }

  editlist(list1, listDescription) {
    this.list = this.list.map((list) => {
      if (list.id === list1) {
        return { ...list, description: listDescription };
      }
      return list;
    });
    localStorage.setItem('lists', JSON.stringify(this.list));
  }

  finishList(list1, status) {
    const selected = this.list.findIndex((element) => element.id === list1);
    this.list[selected].completed = status;
    localStorage.setItem('lists', JSON.stringify(this.list));
  }

  clearList() {
    this.list = this.list.filter((list) => !list.completed);
    this.list.forEach((list, index) => {
      list.index = index + 1;
    });
    localStorage.setItem('lists', JSON.stringify(this.list));
  }
}
