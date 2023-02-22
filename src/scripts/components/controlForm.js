// создаёт меню управления
export const createControlForm = () => {
  const controlForm = document.createElement('form')
  controlForm.className = 'control-form'
  controlForm.name = 'control-form'
  controlForm.action = '#'
  if (window.innerWidth > 768) {
    controlForm.setAttribute('enable', 'true')
  } else {
    controlForm.setAttribute('enable', 'false')
  }

  const addAndRemoveContainer = document.createElement('div')
  addAndRemoveContainer.className = 'add-remove-container'
  controlForm.append(addAndRemoveContainer)

  const deleteAllBtn = document.createElement('button')
  deleteAllBtn.className = 'button button--del'
  deleteAllBtn.id = 'delete-all-btn'
  deleteAllBtn.type = 'button'
  deleteAllBtn.innerText = 'Delete All'
  deleteAllBtn.title = 'Clear Your Todo List'
  addAndRemoveContainer.append(deleteAllBtn)

  const deleteLastBtn = document.createElement('button')
  deleteLastBtn.className = 'button button--del'
  deleteLastBtn.id = 'delete-last-btn'
  deleteLastBtn.type = 'button'
  deleteLastBtn.innerText = 'Delete Last'
  deleteLastBtn.title = 'Delete Last Todo'
  addAndRemoveContainer.append(deleteLastBtn)

  const newTodoInput = document.createElement('input')
  newTodoInput.className = 'text-input new-todo-input'
  newTodoInput.id = 'new-todo-input'
  newTodoInput.name = 'new-todo-input'
  newTodoInput.type = 'text'
  newTodoInput.placeholder = 'Enter new todo ...'
  addAndRemoveContainer.append(newTodoInput)

  const addBtn = document.createElement('input')
  addBtn.className = 'button'
  addBtn.id = 'add-button'
  addBtn.name = 'add-button'
  addBtn.type = 'submit'
  addBtn.value = 'Add New'
  addBtn.title = 'Add new todo'
  addAndRemoveContainer.append(addBtn)

  const showControlContainer = document.createElement('div')
  showControlContainer.className = 'show-control-container'
  controlForm.append(showControlContainer)

  const showRadioButtonsContainer = document.createElement('div')
  showRadioButtonsContainer.className = 'show-radio-buttons-container'

  const showAllBtn = document.createElement('input')
  showAllBtn.id = 'show-all-radio'
  showAllBtn.type = 'radio'
  showAllBtn.name = 'radio-show-value'
  showAllBtn.checked = 'true'
  showAllBtn.setAttribute('enable', 'true')

  const labelShowAllBtn = document.createElement('label')
  labelShowAllBtn.className = 'button button-radio'
  labelShowAllBtn.id = 'label-show-all-radio'
  labelShowAllBtn.setAttribute('for', 'show-all-radio')
  labelShowAllBtn.title = 'Show All Todos'

  showRadioButtonsContainer.append(showAllBtn, labelShowAllBtn)

  const showCompletedBtn = document.createElement('input')
  showCompletedBtn.id = 'show-completed-radio'
  showCompletedBtn.type = 'radio'
  showCompletedBtn.name = 'radio-show-value'
  showCompletedBtn.setAttribute('enable', 'false')

  const labelShowCompletedBtn = document.createElement('label')
  labelShowCompletedBtn.className = 'button button-radio'
  labelShowCompletedBtn.id = 'label-show-completed-radio'
  labelShowCompletedBtn.setAttribute('for', 'show-completed-radio')
  labelShowCompletedBtn.title = 'Show Completed Todos'

  showRadioButtonsContainer.append(showCompletedBtn, labelShowCompletedBtn)

  const showActualBtn = document.createElement('input')
  showActualBtn.id = 'show-actual-radio'
  showActualBtn.type = 'radio'
  showActualBtn.name = 'radio-show-value'
  showActualBtn.setAttribute('enable', 'false')

  const labelShowActualBtn = document.createElement('label')
  labelShowActualBtn.className = 'button button-radio'
  labelShowActualBtn.id = 'label-show-actual-radio'
  labelShowActualBtn.setAttribute('for', 'show-actual-radio')
  labelShowActualBtn.title = 'Show Actual Todos'

  showRadioButtonsContainer.append(showActualBtn, labelShowActualBtn)

  showControlContainer.append(showRadioButtonsContainer)

  const searchInput = document.createElement('input')
  searchInput.className = 'text-input search-input'
  searchInput.name = 'search-input'
  searchInput.id = 'search-input'
  searchInput.type = 'text'
  searchInput.placeholder = 'Search ...'
  showControlContainer.append(searchInput)

  return controlForm
}
