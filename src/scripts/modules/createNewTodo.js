import { getDataLocalStorage, setDataLocalStorage } from '../utils/localStorageUtils.js'
import { clearNewTodoInput } from '../utils/clearElements.js'
import { getTodoCreationDate } from '../utils/dateCreation.js'

import { validationInputText } from './validNewInput.js'
import { changeShowRadioBtnValue } from './switchShowFilter.js'
import { updateAllData } from './updateAllData.js'

function addNewDataIntoArray (allTodos, inputText) {
  allTodos.push({
    id: Date.now(),
    date: getTodoCreationDate(),
    text: inputText,
    isComplete: false
  })
  return allTodos
}

// создаёт данные о новой задаче и добавляет их в массив
export const handlerCreateNewTodo = (elem) => {
  const allTodos = getDataLocalStorage('todos')

  if (validationInputText(allTodos, elem.newTodoInput.value)) {
    setDataLocalStorage(addNewDataIntoArray(allTodos, elem.newTodoInput.value), 'todos')
    clearNewTodoInput(elem.newTodoInput)
    changeShowRadioBtnValue('show-all-radio', elem)
    updateAllData(elem)
  }
}
