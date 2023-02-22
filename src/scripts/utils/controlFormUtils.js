// прячет панель управления
export const hideСontrolForm = (controlForm) => {
  controlForm.setAttribute('enable', 'false')
}

// показывает панель управления
export const displayСontrolForm = (controlForm) => {
  controlForm.setAttribute('enable', 'true')
}
// переключает значение аттрибута 'enable' у формы управления
export const switchControlForm = (controlForm, burgerMenuCheckbox) => {
  controlForm.setAttribute('enable', `${!burgerMenuCheckbox.checked}`)
}
