// возвращает бургер в начальное состояние
export const resetBurger = (controlForm, burgerMenuCheckbox) => {
  burgerMenuCheckbox.checked = false
  controlForm.setAttribute('enable', 'true')
}

// прячет бургер
export const hideBurger = (burgerMenu) => {
  burgerMenu.style.display = 'none'
}

// показывает бургер
export const displayBurger = (burgerMenu) => {
  burgerMenu.style.display = 'block'
}

// инициализация бургера
export const resetBurgerDisplay = (elem) => {
  if (window.innerWidth >= 768) {
    elem.burgerMenu.style.display = 'none'
  }
}
