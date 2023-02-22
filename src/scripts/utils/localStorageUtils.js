// возвращает актуальные данные из хранилища
export const getDataLocalStorage = (key) => {
  const dataValue = localStorage.getItem(key)
  const result = JSON.parse(dataValue)
  if (dataValue) {
    return result
  } else return []
}

// отправляет данные в хранилище
export const setDataLocalStorage = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data))
}
