import { renderTodo } from '../components/todoCard.js'

// добавляет в контейнер карточки определенного типа
export const showTodos = (array, todosType, todosContainer) => {
  array.forEach((item) => {
    switch (todosType) {
      case 'all':
        todosContainer.append(renderTodo(item.date, item.text, item.isComplete, item.id))
        break
      case 'completed':
        if (item.isComplete) todosContainer.append(renderTodo(item.date, item.text, item.isComplete, item.id))
        break
      case 'actual':
        if (!item.isComplete) todosContainer.append(renderTodo(item.date, item.text, item.isComplete, item.id))
    }
  })
}
