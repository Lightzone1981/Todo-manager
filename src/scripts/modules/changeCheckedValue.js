import { getDataLocalStorage, setDataLocalStorage } from '../utils/localStorageUtils.js'
import { updateAllData } from './updateAllData.js'

// возвращает число взятое из Id чекбокса
function getCurrentIdNumber (checkboxId) {
  const checkboxIdArray = checkboxId.split('-')
  const IdNumber = Number(checkboxIdArray.at(-1))
  return IdNumber
}

// меняет значение поля isComplete у карточки с определенным Id на противоположное
function changeIsCompleteValue (allTodos, currentId) {
  allTodos.forEach((item, index) => {
    if (item.id === currentId) {
      allTodos[index].isComplete = !allTodos[index].isComplete
    }
  })
  return allTodos
}

export const handlerChangeCheckedValue = (checkboxId, elem) => {
  const allTodos = getDataLocalStorage('todos')
  const IdNumber = getCurrentIdNumber(checkboxId)
  setDataLocalStorage(changeIsCompleteValue(allTodos, IdNumber), 'todos')
  updateAllData(elem)
}
