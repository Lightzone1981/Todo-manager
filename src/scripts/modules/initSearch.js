import { initScrollArrow } from './initScrollArrow.js'
import { updateAllData } from './updateAllData.js'

// инициализирует поиск данных
export const handlerInitSearch = (elem) => {
  elem.searchInput.oninput = (event) => {
    updateAllData(elem)
    initScrollArrow(elem)
  }
}
