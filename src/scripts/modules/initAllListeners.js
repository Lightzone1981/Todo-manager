import { scrollDown } from './initScrollArrow.js'
import { handlerRemoveTodos } from './removeTodos.js'
import { handlerCreateNewTodo } from './createNewTodo.js'
import { handlerSwitchShowFilter } from './switchShowFilter.js'
import { handlerInitSearch } from './initSearch.js'
import { handlerUpdateBurger, handlerToggleBurger } from './toggleBurger.js'
import { handlerChangeCheckedValue } from './changeCheckedValue.js'

// инициализация слушателей событий
export const initAllListeners = (elem) => {
  elem.todosContainer.addEventListener('click', (event) => {
    // событие нажатия кнопки "удалить конкретную задачу" в карточке задачи
    if (event.target.type === 'button') {
      handlerRemoveTodos('CURRENT', event.target.id, elem)
    }

    // событие нажатия checkbox в карточке задачи
    if (event.target.className === 'todo-checkbox-label') {
      handlerChangeCheckedValue(event.target.id, elem)
    }
  })

  elem.controlForm.addEventListener('click', (event) => {
    switch (event.target.id) {
      case 'add-button': // событие нажатия кнопки "добавить новую задачу"
        event.preventDefault()
        handlerCreateNewTodo(elem)
        break
      case 'delete-all-btn': // событие нажатия кнопки "удалить всё"
        handlerRemoveTodos('ALL', '', elem)
        break
      case 'delete-last-btn': // событие нажатия кнопки "удалить последнюю задачу"
        handlerRemoveTodos('LAST', '', elem)
        break
      case 'search-input': // событие нажатия на поле ввода поискового запроса
        handlerInitSearch(elem)
    }

    // событие нажатия кнопки фильтра отображения
    if (event.target.type === 'radio') {
      handlerSwitchShowFilter(event.target, elem)
    }
  })

  // событие нажатия кнопки бургер
  elem.burgerMenuLabel.addEventListener('click', (event) => {
    handlerToggleBurger(elem)
    scrollDown(elem.todosContainer)
  })

  // событие изменения размеров окна (управляет отображением меню на экране)
  window.addEventListener('resize', (event) => {
    handlerUpdateBurger(elem)
    scrollDown(elem.todosContainer)
  })
}
