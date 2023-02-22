import { initModalWindow } from '../components/modalWindow.js'
import { getDataLocalStorage, setDataLocalStorage } from '../utils/localStorageUtils.js'
import { changeShowRadioBtnValue } from './switchShowFilter.js'
import { updateAllData } from './updateAllData.js'

// удаляет задачи из списка в соответствии с параметрами removeType:  ALL, LAST, CURRENT (и id удаляемой карточки)
function removeTodos (removeType, id = '', elem) {
  const allTodos = getDataLocalStorage('todos')
  switch (removeType) {
    case 'ALL':
      allTodos.length = 0
      changeShowRadioBtnValue('show-all-radio', elem)
      break
    case 'LAST':
      if (allTodos.length > 0) allTodos.length = allTodos.length - 1
      changeShowRadioBtnValue('show-all-radio', elem)
      break
    case 'CURRENT': {
      const closeButtonIdArray = id.split('-')
      allTodos.forEach((item, index) => {
        if (item.id === Number(closeButtonIdArray.at(-1))) allTodos.splice(index, 1)
      })
    }
  }
  setDataLocalStorage(allTodos, 'todos')
}

// управляет удалением заданий
export const handlerRemoveTodos = (removeType, id = '', elem) => {
  initModalWindow('confirm', `Are you sure to remove ${removeType}?`)

  const modalWindow = document.querySelector('.modal-window')
  const modalWindowContainer = document.querySelector('.modal-window-container')

  modalWindowContainer.addEventListener('click', (event) => {
    if (event.target.id === 'button-confirm') {
      removeTodos(removeType, id, elem)
      modalWindow.remove()
      updateAllData(elem)
    }
    if (event.target.id === 'button-cancel') {
      modalWindow.remove()
    }
  })
}
