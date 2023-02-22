// возвращает объект с DOM элементами приложения
export const getDomElements = () => {
  return {
    showAllRadioBtn: document.querySelector('#show-all-radio'),
    showCompletedRadioBtn: document.querySelector('#show-completed-radio'),
    showActualRadioBtn: document.querySelector('#show-actual-radio'),
    allTodosInfoHeader: document.querySelector('#info-item-all-header'),
    completedTodosInfoHeader: document.querySelector('#info-item-completed-header'),
    deleteAllBtn: document.querySelector('#delete-all-btn'),
    deleteLastBtn: document.querySelector('#delete-last-btn'),
    todosContainer: document.querySelector('.todos-container'),
    searchInput: document.querySelector('#search-input'),
    newTodoInput: document.querySelector('#new-todo-input'),
    burgerMenu: document.querySelector('.burger-menu'),
    burgerMenuCheckbox: document.querySelector('#burger-menu-checkbox'),
    burgerMenuLabel: document.querySelector('.burger-menu__label'),
    controlForm: document.querySelector('.control-form'),
    arrowTop: document.querySelector('#arrow-top')
  }
}
