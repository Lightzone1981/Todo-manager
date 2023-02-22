// проверяет пустой массив или нет
export const isArrayNotEmpty = (array) => {
  if (array.length) return true
  else return false
}

// возвращает отфильтрованный по поиску массив
export const getSearchDataArray = (array, searchValue) => {
  return array.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
}

// возвращает количество карточек определенного типа в массиве
export const getTodosCount = (array, todosType) => {
  const result = array.reduce((acc, item) => {
    switch (todosType) {
      case 'all':
        acc++
        break
      case 'completed':
        if (item.isComplete) acc++
        break
      case 'actual':
        if (!item.isComplete) acc++
    }
    return acc
  }, 0)
  return result
}
