/* функции ------------------------------------------------------------------------------------ */

// создаёт верхний блок с названием и информацией о количестве карточек
function createHeaderInfo () {
  const headerInfo = document.createElement('div')
  headerInfo.className = 'header-info'
  const title = document.createElement('h1')
  title.className = 'title'
  title.innerText = 'Your TODO list'

  const infoContainer = document.createElement('div')
  infoContainer.className = 'info-container'

  const totalTodos = document.createElement('p')
  totalTodos.className = 'info-item'
  totalTodos.id = 'info-item-all-header'
  totalTodos.innerText = 'All:'

  const completedTodos = document.createElement('p')
  completedTodos.className = 'info-item'
  completedTodos.id = 'info-item-completed-header'
  completedTodos.innerText = 'Completed:'

  infoContainer.append(totalTodos, completedTodos)
  headerInfo.append(title, infoContainer)

  return headerInfo
}

// создаёт меню управления
function createControlForm () {
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

// создаёт меню "бургер"
function createBurgerMenu () {
  const burgerMenu = document.createElement('div')
  burgerMenu.className = 'burger-menu'

  const burgerMenuCheckbox = document.createElement('input')
  burgerMenuCheckbox.className = 'burger-menu__checkbox'
  burgerMenuCheckbox.id = 'burger-menu-checkbox'
  burgerMenuCheckbox.type = 'checkbox'
  burgerMenuCheckbox.title = 'Hide/Show Control Menu'
  burgerMenuCheckbox.checked = false

  const burgerMenuLabel = document.createElement('label')
  burgerMenuLabel.className = 'burger-menu__label'
  burgerMenuLabel.setAttribute('for', 'burger-menu-checkbox')
  burgerMenuLabel.title = 'Show / Hide Control Panel'

  if (window.innerWidth >= 768) {
    burgerMenu.style.display = 'none'
  }

  const burgerMenuLabelPseudo = document.createElement('div')
  burgerMenuLabelPseudo.className = 'burger-menu__label--pseudo'

  burgerMenu.append(burgerMenuCheckbox, burgerMenuLabel, burgerMenuLabelPseudo)
  return burgerMenu
}

// создаёт кнопку скролла наверх
function createArrowTop () {
  const arrowTop = document.createElement('button')
  arrowTop.classList = 'arrow-top'
  arrowTop.id = 'arrow-top'
  arrowTop.type = 'button'
  return arrowTop
}

// отрисовка карточки
function renderTodo (dateValue, textValue, isCompleteValue, id) {
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

// добавляет в контейнер карточки определенного типа
function showTodos (array, todosType) {
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

// возвращает массив с отфильтрованными по поиску данными
function getSearchDataArray (array) {
  return array.filter((item) => item.text.toLowerCase().includes(searchInput.value.toLowerCase()))
}

// возвращает количество карточек определенного типа в массиве
function getTodosCount (array, todosType) {
  const result = array.reduce((acc, item) => {
    switch (todosType) {
      case 'all':
        acc++
        break
      case 'completed':
        if (item.isComplete) acc++
        break
      case 'actual':
        if (!item.isComplete) acc++
    }
    return acc
  }, 0)
  return result
}

// выводит сообщение в контейнер
function renderContainerMessage (message) {
  const emptyCompletedListMessage = document.createElement('p')
  emptyCompletedListMessage.className = 'empty-list-message'
  emptyCompletedListMessage.innerText = message
  todosContainer.append(emptyCompletedListMessage)
}

// обновляет данные на странице
function updateAllData () {
  const allTodos = getDataLocalStorage() // берём актуальные данные из хранилища
  const searchDataArray = getSearchDataArray(allTodos) // получаем массив с отфильтрованными по поиску данными
  clearTodosContainer() // очищаем окно контейнера
  if (allTodos.length) showDeleteButtons() // если исходный массив не пустой, то показываем кнопки удаления
  else hideDeleteButtons() // иначе прячем кнопки удаления
  if (!allTodos.length) {
    // если исходный массив пустой
    renderContainerMessage(':) Your list is empty!') // выводи сообщение, что что список пуст
    changeShowRadioBtnValue('all') // возвращаем радиокнопку в состояние показывать все задачи
    return
  }

  if (!searchDataArray.length && searchInput.value) {
    // массив поиска пустой и cтрока поиска не пустая
    renderContainerMessage('Todos not found :(') // выводи сообщение, что что ничего не найдено
    return
  }

  // если активна радио-кнопка "показывать все задачи"
  if (showAllRadioBtn.getAttribute('enable') === 'true') {
    if (getTodosCount(searchDataArray, 'all')) { // если в массиве есть карточки любого типа, покажи их
      showTodos(searchDataArray, 'all')
    }
  }
  // если активна радио-кнопка "показывать выполненные задачи"
  if (showCompletedRadioBtn.getAttribute('enable') === 'true') {
    if (getTodosCount(searchDataArray, 'completed')) {
      // если в массиве есть выполненные задания, покажи их
      showTodos(searchDataArray, 'completed')
    } else if (searchInput.value) { // иначе если строка поиска не пустая
      renderContainerMessage('COMPLETED todos not found :(') // выводи сообщение, что выполненные задачи не найдены поиском
    } else renderContainerMessage(':) You have no COMPLETED todos!') // иначе выводи сообщение, что нет выполненных задач
  }

  if (showActualRadioBtn.getAttribute('enable') === 'true') {
    // если активна радио-кнопка "показывать актуальные задачи"
    if (getTodosCount(searchDataArray, 'actual')) {
      // если в массиве есть актуальные задания, покажи их
      showTodos(searchDataArray, 'actual')
    } else if (searchInput.value) {
      // иначе если строка поиска не пустая
      renderContainerMessage('ACTUAL todos not found :(') // выводи сообщение, что актуальные задачи не найдены поиском
    } else renderContainerMessage(':) You have no ACTUAL todos!') // иначе выводи сообщение, что нет актуальных задач
  }
}

// проверка введенного текста на валидность
function validationInputText (array) {
  if (newTodoText.value === '') {
    initModalWindow('warning', "You can't add empty todo!")
    const modalWindow = document.querySelector('.modal-window')
    const modalWindowContainer = document.querySelector('.modal-window-container')
    modalWindowContainer.addEventListener('click', (event) => {
      if (event.target.id === 'button-cancel') {
        modalWindow.remove()
      }
    })
    return false
  }

  const repeatCount = array.reduce((acc, item, index) => {
    if (newTodoText.value === item.text) acc += 1
    return acc
  }, 0)

  if (repeatCount !== 0) {
    initModalWindow('warning', 'This todo is already exist!')
    const modalWindow = document.querySelector('.modal-window')
    const modalWindowContainer = document.querySelector('.modal-window-container')
    modalWindowContainer.addEventListener('click', (event) => {
      if (event.target.id === 'button-cancel') {
        modalWindow.remove()
      }
    })
    return false
  }
  return true
}

// возвращает отформатированную дату и время создания новой задачи
function getTodoCreationDate () {
  const dateOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: 'numeric'
  }
  const now = new Date()
  const todoCreationDate = new Intl.DateTimeFormat('en-UK', dateOptions)
  return todoCreationDate.format(now)
}

// создаёт данные о новой задаче и добавляет их в массив
function createNewTodo () {
  const allTodos = getDataLocalStorage()
  if (validationInputText(allTodos)) {
    allTodos.push({
      id: Date.now(),
      date: getTodoCreationDate(),
      text: newTodoText.value,
      isComplete: false
    })
    newTodoText.value = ''
    setDataLocalStorage(allTodos)
  }
}

// очищает контейнер с задачами
function clearTodosContainer () {
  const todosContainer = document.querySelector('.todos-container')
  todosContainer.innerHTML = ''
}

// убирает кнопки удаления задач из меню
function hideDeleteButtons () {
  deleteAllBtn.style.display = 'none'
  deleteLastBtn.style.display = 'none'
}

// возвращает кнопки удаления задач в меню
function showDeleteButtons () {
  deleteAllBtn.style.display = 'block'
  deleteLastBtn.style.display = 'block'
}

// выводит модальное окно типа type и сообщения message
function initModalWindow (modalWindowtype, message) {
  const modalWindow = document.createElement('div')
  modalWindow.classList = 'modal-window'

  const modalWindowContainer = document.createElement('div')
  modalWindowContainer.classList = 'modal-window-container'

  const modalWindowMessage = document.createElement('p')
  modalWindowMessage.classList = 'modal-window__message'
  modalWindowMessage.innerText = message
  modalWindowContainer.append(modalWindowMessage)

  const cancelButton = document.createElement('button')
  cancelButton.type = 'button'
  cancelButton.id = 'button-cancel'
  cancelButton.classList = 'button button--cancel'

  switch (modalWindowtype) {
    case 'confirm': {
      const confirmationButton = document.createElement('button')
      confirmationButton.type = 'button'
      confirmationButton.classList = 'button button--confirm'
      confirmationButton.id = 'button-confirm'
      confirmationButton.innerText = 'YES'
      cancelButton.innerText = 'NO'
      modalWindowContainer.append(confirmationButton, cancelButton)
      break
    }
    case 'warning':
      cancelButton.innerText = 'OK'
      modalWindowContainer.append(cancelButton)
  }
  modalWindow.append(modalWindowContainer)
  root.before(modalWindow)
}

// удаляет задачи из списка в соответствии с параметрами removeType:  ALL, LAST, CURRENT (и id удаляемой карточки)
function removeTodos (removeType, id) {
  initModalWindow('confirm', `Are you sure to remove ${removeType}?`)
  const modalWindow = document.querySelector('.modal-window')
  const modalWindowContainer = document.querySelector('.modal-window-container')

  modalWindowContainer.addEventListener('click', (event) => {
    if (event.target.id === 'button-confirm') {
      const allTodos = getDataLocalStorage()
      switch (removeType) {
        case 'ALL':
          allTodos.length = 0
          changeShowRadioBtnValue('all')
          break
        case 'LAST':
          if (allTodos.length > 0) allTodos.length = allTodos.length - 1
          changeShowRadioBtnValue('all')
          break
        case 'CURRENT': {
          const closeButtonIdArray = id.split('-')
          allTodos.forEach((item, index) => {
            if (item.id === Number(closeButtonIdArray.at(-1))) allTodos.splice(index, 1)
          })
        }
      }
      modalWindow.remove()
      setDataLocalStorage(allTodos)
      updateAllData()
      updateInfoValues()
    }
    if (event.target.id === 'button-cancel') {
      modalWindow.remove()
    }
  })
}

// находит в массиве карточку по ID нажатого checkbox и меняет значение поля isComplete на противоположное
function changeCheckedValue (checkboxId) {
  const allTodos = getDataLocalStorage()
  const checkboxIdArray = checkboxId.split('-')
  const currentId = Number(checkboxIdArray.at(-1))
  allTodos.forEach((item, index) => {
    if (item.id === currentId) {
      allTodos[index].isComplete = !allTodos[index].isComplete
    }
  })
  setDataLocalStorage(allTodos)
}

// возвращает количество выполненных задач из всего списка
function getCompletedTodosCount () {
  const allTodos = getDataLocalStorage()
  const completedTodosCount = allTodos.reduce((acc, item) => {
    if (item.isComplete) acc++
    return acc
  }, 0)
  return completedTodosCount
}

// обновляет данные в блоке с информацией о количестве карточек
function updateInfoValues () {
  const allTodos = getDataLocalStorage()
  allTodosInfoHeader.innerText = `All: ${allTodos.length}`
  completedTodosInfoHeader.innerText = `Completed: ${getCompletedTodosCount()}`
}

// меняет значение аттрибута 'enable' у группы радио-кнопок (фильтр отображения карточек)
function changeShowRadioBtnValue (value) {
  switch (value) {
    case 'all':
      showAllRadioBtn.checked = 'true'
      showAllRadioBtn.setAttribute('enable', 'true')
      showCompletedRadioBtn.setAttribute('enable', 'false')
      showActualRadioBtn.setAttribute('enable', 'false')
      break
    case 'completed':
      showAllRadioBtn.setAttribute('enable', 'false')
      showCompletedRadioBtn.setAttribute('enable', 'true')
      showActualRadioBtn.setAttribute('enable', 'false')
      break
    case 'actual':
      showCompletedRadioBtn.setAttribute('enable', 'false')
      showAllRadioBtn.setAttribute('enable', 'false')
      showActualRadioBtn.setAttribute('enable', 'true')
  }
}

// переключает значение у меню "бургер"
function changeBurgerEnable () {
  controlForm.setAttribute('enable', `${!burgerMenuCheckbox.checked}`)
}

// возвращает актуальные данные из хранилища
function getDataLocalStorage () {
  const dataValue = localStorage.getItem('todos')
  const result = JSON.parse(dataValue)
  if (dataValue) {
    return result
  } else return []
}

// отправляет данные в хранилище
function setDataLocalStorage (data) {
  localStorage.setItem('todos', JSON.stringify(data))
}

// скролл в конец контейнера
function scrollDown () {
  todosContainer.scrollTo({ top: 1000, behavior: 'smooth' })
}

// инициализирует поиск данных
function initSearch () {
  searchInput.oninput = (event) => {
    updateAllData()
  }
}

// создание базовой структуры DOM-элементов
function initApp () {
  const wrapper = document.createElement('div')
  wrapper.className = 'wrapper'

  const header = document.createElement('header')
  header.className = 'header'

  const todosContainer = document.createElement('ul')
  todosContainer.className = 'todos-container'

  header.append(createHeaderInfo(), createBurgerMenu(), createControlForm())
  wrapper.append(header, todosContainer, createArrowTop())
  root.append(wrapper)
}

/* инициализация приложения -------------------------------------------------------------------- */
const root = document.querySelector('#root')
initApp()

/* объявление переменных DOM-элементов --------------------------------------------------------- */
const showAllRadioBtn = document.querySelector('#show-all-radio')
const showCompletedRadioBtn = document.querySelector('#show-completed-radio')
const showActualRadioBtn = document.querySelector('#show-actual-radio')
const todosContainer = document.querySelector('.todos-container')
const searchInput = document.querySelector('#search-input')
const arrowTop = document.querySelector('#arrow-top')
const allTodosInfoHeader = document.querySelector('#info-item-all-header')
const completedTodosInfoHeader = document.querySelector('#info-item-completed-header')
const newTodoText = document.querySelector('#new-todo-input')
const burgerMenu = document.querySelector('.burger-menu')
const burgerMenuCheckbox = document.querySelector('#burger-menu-checkbox')
const burgerMenuLabel = document.querySelector('.burger-menu__label')
const controlForm = document.querySelector('.control-form')
const deleteAllBtn = document.querySelector('#delete-all-btn')
const deleteLastBtn = document.querySelector('#delete-last-btn')

updateAllData()

/* инициализация слушателей событий --------------------------------------------------------- */

todosContainer.addEventListener('click', (event) => {
  if (event.target.type === 'button') {
    // событие нажатия кнопки "удалить задачу" в карточке задачи
    removeTodos('CURRENT', event.target.id)
  }
  if (event.target.className === 'todo-checkbox-label') {
    // событие нажатия checkbox в карточке задачи
    changeCheckedValue(event.target.id)
    updateAllData()
    updateInfoValues()
  }
})

controlForm.addEventListener('click', (event) => {
  switch (event.target.id) {
    case 'add-button': // событие нажатия кнопки "добавить новую задачу"
      event.preventDefault()
      createNewTodo()
      changeShowRadioBtnValue('all')
      updateAllData()
      scrollDown()
      updateInfoValues()
      break
    case 'delete-all-btn': // событие нажатия кнопки "удалить всё"
      removeTodos('ALL')
      break
    case 'delete-last-btn': // событие нажатия кнопки "удалить последнюю задачу"
      removeTodos('LAST')
      break
    case 'label-show-all-radio': // событие нажатия радио-кнопки "показывать все задачи"
      changeShowRadioBtnValue('all')
      updateAllData()
      scrollDown()
      break
    case 'label-show-completed-radio': // событие нажатия радио-кнопки "показывать выполненные задачи"
      changeShowRadioBtnValue('completed')
      updateAllData()
      scrollDown()
      break
    case 'label-show-actual-radio': // событие нажатия радио-кнопки "показывать незаконченные задачи"
      changeShowRadioBtnValue('actual')
      updateAllData()
      scrollDown()
      break
    case 'search-input': // событие нажатия на поле ввода поискового запроса
      initSearch()
      scrollDown()
  }
})

// событие нажатия на иконку меню "бургер"
burgerMenuLabel.addEventListener('click', (event) => {
  if (event.target.className === 'burger-menu__label') {
    changeBurgerEnable()
  }
})

// событие изменения размеров окна (управляет отображением меню на экране)
window.addEventListener('resize', (event) => {
  if (window.innerWidth > 768) {
    burgerMenuCheckbox.checked = false
    controlForm.setAttribute('enable', 'true')
    burgerMenu.style.display = 'none'
  } else {
    burgerMenu.style.display = 'block'
    if (burgerMenuCheckbox.checked === false) {
      controlForm.setAttribute('enable', 'false')
    } else controlForm.setAttribute('enable', 'true')
  }

  if (window.innerHeight < 400) {
    burgerMenu.style.display = 'block'
    if (burgerMenuCheckbox.checked === false) {
      controlForm.setAttribute('enable', 'false')
    } else controlForm.setAttribute('enable', 'true')
  }
})

// инициализация кнопки скролла наверх
arrowTop.style.bottom = '-50%'
arrowTop.style.width = arrowTop.onclick = () => todosContainer.scrollTo({ top: 0, behavior: 'smooth' })
todosContainer.addEventListener('scroll', () => {
  if (todosContainer.scrollTop < 20) arrowTop.style.bottom = '-50%'
  else arrowTop.style.bottom = '4%'
})
