// выводит модальное окно типа type и сообщения message
export const initModalWindow = (modalWindowtype, message) => {
  const modalWindow = document.createElement('div')
  modalWindow.classList = 'modal-window'

  const modalWindowContainer = document.createElement('div')
  modalWindowContainer.classList = 'modal-window-container'

  const modalWindowMessage = document.createElement('p')
  modalWindowMessage.classList = 'modal-window__message'
  modalWindowMessage.innerText = message
  modalWindowContainer.append(modalWindowMessage)

  const cancelButton = document.createElement('button')
  cancelButton.type = 'button'
  cancelButton.id = 'button-cancel'
  cancelButton.classList = 'button button--cancel'

  switch (modalWindowtype) {
    case 'confirm': {
      const confirmationButton = document.createElement('button')
      confirmationButton.type = 'button'
      confirmationButton.classList = 'button button--confirm'
      confirmationButton.id = 'button-confirm'
      confirmationButton.innerText = 'YES'
      cancelButton.innerText = 'NO'
      modalWindowContainer.append(confirmationButton, cancelButton)
      break
    }
    case 'warning':
      cancelButton.innerText = 'OK'
      modalWindowContainer.append(cancelButton)
  }
  modalWindow.append(modalWindowContainer)
  const root = document.querySelector('#root')
  root.before(modalWindow)
}
