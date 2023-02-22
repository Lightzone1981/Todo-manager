// возвращает отформатированную дату и время создания новой задачи
export const getTodoCreationDate = () => {
  const dateOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: 'numeric'
  }
  const now = new Date()
  const todoCreationDate = new Intl.DateTimeFormat('en-UK', dateOptions)
  return todoCreationDate.format(now)
}
