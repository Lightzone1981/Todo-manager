// отрисовка карточки
export const renderTodo = (dateValue, textValue, isCompleteValue, id) => {
  const todoBody = document.createElement('div')
  todoBody.className = 'todo-body'
  todoBody.id = `todo-body-${id}`
  if (isCompleteValue) todoBody.style.backgroundColor = '#8bd5e7'

  const todoBodyContainer = document.createElement('div')
  todoBodyContainer.className = 'todo-body-container'
  todoBody.append(todoBodyContainer)

  const todoCheckbox = document.createElement('input')
  todoCheckbox.className = 'todo-checkbox'
  todoCheckbox.id = `todo-checkbox-${id}`
  todoCheckbox.name = 'todo-checkbox'
  todoCheckbox.type = 'checkbox'
  todoCheckbox.checked = isCompleteValue
  todoBodyContainer.append(todoCheckbox)

  const todoCheckboxLabel = document.createElement('label')
  todoCheckboxLabel.setAttribute('for', `todo-checkbox-${id}`)
  todoCheckboxLabel.className = 'todo-checkbox-label'
  todoCheckboxLabel.id = `todo-checkbox-label-${id}`
  todoCheckboxLabel.title = 'Complete current todo'
  todoBodyContainer.append(todoCheckboxLabel)

  const todoText = document.createElement('p')
  todoText.className = 'todo-text'
  todoText.id = `todo-text-${id}`
  todoText.innerText = textValue
  todoBodyContainer.append(todoText)

  const closeTodoBtn = document.createElement('button')
  closeTodoBtn.className = 'button todo-close-button'
  closeTodoBtn.id = `close-button-${id}`
  closeTodoBtn.type = 'button'
  closeTodoBtn.title = 'Delete Current Todo'
  todoBodyContainer.append(closeTodoBtn)

  const todoDate = document.createElement('span')
  todoDate.className = 'todo-date'
  todoDate.id = `todo-date-${id}`
  todoDate.innerText = dateValue
  todoBody.append(todoDate)

  return todoBody
}
