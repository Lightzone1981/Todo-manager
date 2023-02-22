// закрывает модальное окно при нажатии кнопки отмены
export const closeModalWindow = () => {
  const modalWindow = document.querySelector('.modal-window')
  const modalWindowContainer = document.querySelector('.modal-window-container')
  modalWindowContainer.addEventListener('click', (event) => {
    if (event.target.id === 'button-cancel') {
      modalWindow.remove()
    }
  })
}
