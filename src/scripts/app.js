import { createMainLayout } from './components/mainLayout.js'
import { getDomElements } from './modules/getDomElements.js'
import { updateAllData } from './modules/updateAllData.js'
import { initScrollArrow } from './modules/initScrollArrow.js'
import { resetBurgerDisplay } from './utils/burgerUtils.js'
import { initAllListeners } from './modules/initAllListeners.js'

// инициализация приложения
export const initApp = (root) => {
  createMainLayout(root)
  const elem = getDomElements()
  updateAllData(elem)
  initScrollArrow(elem)
  resetBurgerDisplay(elem)
  initAllListeners(elem)
}
