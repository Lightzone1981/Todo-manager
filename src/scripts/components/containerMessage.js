export const renderContainerMessage = message => {
  const containerMessage = document.createElement('p')
  containerMessage.className = 'empty-list-message'
  containerMessage.innerText = message
  return containerMessage
}
