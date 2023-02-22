import { getDataLocalStorage } from '../utils/localStorageUtils.js'
import { showContainerMessage } from '../utils/todosContainerUtils.js'
import { hideDeleteButtons, showDeleteButtons } from '../utils/deleteButtonsUtils.js'
import { clearTodosContainer } from '../utils/clearElements.js'
import { getTodosCount, isArrayNotEmpty, getSearchDataArray } from '../utils/arrayUtils.js'
import { renderContainerMessage } from '../components/containerMessage.js'
import { changeShowRadioBtnValue } from './switchShowFilter.js'
import { initScrollArrow } from './initScrollArrow.js'
import { showTodos } from './showTodos.js'

// обновляет данные в блоке с информацией о количестве карточек
function updateInfoValues (elem) {
  const allTodos = getDataLocalStorage('todos')
  elem.allTodosInfoHeader.innerText = `All: ${allTodos.length}`
  elem.completedTodosInfoHeader.innerText = `Completed: ${getTodosCount(allTodos, 'completed')}`
}

// управляет отображением кнопок удаления в форме управления
function updateDeleteButtonsDisplay (elem, allTodos) {
  if (isArrayNotEmpty(allTodos)) showDeleteButtons(elem.deleteAllBtn, elem.deleteLastBtn)
  else hideDeleteButtons(elem.deleteAllBtn, elem.deleteLastBtn)
}

// проверяет у элемента значение атрибута enable
function isElementEnable (element) {
  if (element.getAttribute('enable') === 'true') return true
  else return false
}

// управляет показом карточек определенного типа (все карточки / сделанные /не сделанные)
function showTodosOfSpecifiedType (searchDataArray, todoType, elem) {
  if (getTodosCount(searchDataArray, todoType)) {
    showTodos(searchDataArray, todoType, elem.todosContainer)
    return
  }
  if (elem.searchInput.value) { showContainerMessage(elem.todosContainer, renderContainerMessage(`${todoType.toUpperCase()} todos not found :(`)) } else showContainerMessage(elem.todosContainer, renderContainerMessage(`:) You have no ${todoType.toUpperCase()} todos!`))
}

// обновляет данные в контейнере с карточками
function updateTodosContainer (elem) {
  const allTodos = getDataLocalStorage('todos')
  const searchDataArray = getSearchDataArray(allTodos, elem.searchInput.value)

  if (!isArrayNotEmpty(allTodos)) {
    showContainerMessage(elem.todosContainer, renderContainerMessage(':) Your list is empty!'))
    changeShowRadioBtnValue('show-all-radio', elem)
    return
  }

  if (!isArrayNotEmpty(searchDataArray) && elem.searchInput.value) {
    showContainerMessage(elem.todosContainer, renderContainerMessage('Todos not found :('))
    return
  }

  if (isElementEnable(elem.showAllRadioBtn)) showTodosOfSpecifiedType(searchDataArray, 'all', elem)
  if (isElementEnable(elem.showCompletedRadioBtn)) showTodosOfSpecifiedType(searchDataArray, 'completed', elem)
  if (isElementEnable(elem.showActualRadioBtn)) showTodosOfSpecifiedType(searchDataArray, 'actual', elem)
}

// обновляет данные на странице
export const updateAllData = (elem) => {
  const allTodos = getDataLocalStorage('todos')
  updateDeleteButtonsDisplay(elem, allTodos)
  updateInfoValues(elem)
  clearTodosContainer(elem.todosContainer)
  updateTodosContainer(elem)
  initScrollArrow(elem)
}
