import { resetBurger, hideBurger, displayBurger } from '../utils/burgerUtils.js'
import { switchControlForm, hideСontrolForm, displayСontrolForm } from '../utils/controlFormUtils.js'
// обработка события переключения бургера
export const handlerToggleBurger = (elem) => {
  switchControlForm(elem.controlForm, elem.burgerMenuCheckbox)
}

// обработка события изменения окна браузера
export const handlerUpdateBurger = (elem) => {
  if (window.innerWidth > 768) {
    resetBurger(elem.controlForm, elem.burgerMenuCheckbox)
    hideBurger(elem.burgerMenu)
  } else {
    displayBurger(elem.burgerMenu)
    if (elem.burgerMenuCheckbox.checked === false) {
      hideСontrolForm(elem.controlForm)
    } else displayСontrolForm(elem.controlForm)
  }

  if (window.innerHeight < 400) {
    displayBurger(elem.burgerMenu)
    if (elem.burgerMenuCheckbox.checked === false) {
      hideСontrolForm(elem.controlForm)
    } else displayСontrolForm(elem.controlForm)
  }
}
