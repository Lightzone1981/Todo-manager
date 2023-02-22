// создаёт верхний блок с названием и информацией о количестве карточек
export const createHeaderInfo = () => {
  const headerInfo = document.createElement('div')
  headerInfo.className = 'header-info'
  const title = document.createElement('h1')
  title.className = 'title'
  title.innerText = 'Your TODO list'

  const infoContainer = document.createElement('div')
  infoContainer.className = 'info-container'

  const totalTodos = document.createElement('p')
  totalTodos.className = 'info-item'
  totalTodos.id = 'info-item-all-header'
  totalTodos.innerText = 'All:'

  const completedTodos = document.createElement('p')
  completedTodos.className = 'info-item'
  completedTodos.id = 'info-item-completed-header'
  completedTodos.innerText = 'Completed:'

  infoContainer.append(totalTodos, completedTodos)
  headerInfo.append(title, infoContainer)

  return headerInfo
}
