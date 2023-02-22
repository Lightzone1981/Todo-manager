// создаёт меню "бургер"
export const createBurgerMenu = () => {
  const burgerMenu = document.createElement('div')
  burgerMenu.className = 'burger-menu'

  const burgerMenuCheckbox = document.createElement('input')
  burgerMenuCheckbox.className = 'burger-menu__checkbox'
  burgerMenuCheckbox.id = 'burger-menu-checkbox'
  burgerMenuCheckbox.type = 'checkbox'
  burgerMenuCheckbox.title = 'Hide/Show Control Menu'
  burgerMenuCheckbox.checked = false

  const burgerMenuLabel = document.createElement('label')
  burgerMenuLabel.className = 'burger-menu__label'
  burgerMenuLabel.setAttribute('for', 'burger-menu-checkbox')
  burgerMenuLabel.title = 'Show / Hide Control Panel'

  const burgerMenuLabelPseudo = document.createElement('div')
  burgerMenuLabelPseudo.className = 'burger-menu__label--pseudo'

  burgerMenu.append(burgerMenuCheckbox, burgerMenuLabel, burgerMenuLabelPseudo)
  return burgerMenu
}
