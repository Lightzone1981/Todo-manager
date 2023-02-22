import { initModalWindow } from '../components/modalWindow.js'
import { closeModalWindow } from '../utils/modalWindowUtils.js'

// проверяет, содержит ли массив такой текст
function isArrayIncludesValue (array, value) {
  const repeatCount = array.reduce((acc, item, index) => {
    if (value === item.text) acc += 1
    return acc
  }, 0)
  return repeatCount !== 0
}

// проверка введенного текста на валидность
export const validationInputText = (array, inputText) => {
  if (inputText === '') {
    initModalWindow('warning', "You can't add empty todo!")
    closeModalWindow()
    return false
  }
  if (isArrayIncludesValue(array, inputText)) {
    initModalWindow('warning', 'This todo is already exist!')
    closeModalWindow()
    return false
  }
  return true
}
