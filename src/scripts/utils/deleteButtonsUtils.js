// убирает кнопки удаления задач из меню
export const hideDeleteButtons = (deleteAllBtn, deleteLastBtn) => {
  deleteAllBtn.style.display = 'none'
  deleteLastBtn.style.display = 'none'
}

// возвращает кнопки удаления задач в меню
export const showDeleteButtons = (deleteAllBtn, deleteLastBtn) => {
  deleteAllBtn.style.display = 'block'
  deleteLastBtn.style.display = 'block'
}
