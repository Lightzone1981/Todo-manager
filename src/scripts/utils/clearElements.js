// очищает контейнер с задачами
export const clearTodosContainer = (todosContainer) => {
  todosContainer.innerHTML = ''
}

// очищает поле ввода новой задачи
export const clearNewTodoInput = (newTodoInput) => {
  newTodoInput.value = ''
}
