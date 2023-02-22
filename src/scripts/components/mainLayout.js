import { createHeaderInfo } from './headerInfo.js'
import { createBurgerMenu } from './burger.js'
import { createControlForm } from './controlForm.js'
import { createArrowTop } from './arrowTop.js'

// создание базовой структуры DOM-элементов
export const createMainLayout = (root) => {
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
