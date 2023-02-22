import { updateAllData } from './updateAllData.js'
import { initScrollArrow } from './initScrollArrow.js'

// меняет значение аттрибута 'enable' у группы радио-кнопок (фильтр отображения карточек)
export const changeShowRadioBtnValue = (activeRadioBtnId, elem) => {
  switch (activeRadioBtnId) {
    case 'show-all-radio':
      elem.showAllRadioBtn.checked = 'true'
      elem.showAllRadioBtn.setAttribute('enable', 'true')
      elem.showCompletedRadioBtn.setAttribute('enable', 'false')
      elem.showActualRadioBtn.setAttribute('enable', 'false')
      break
    case 'show-completed-radio':
      elem.showAllRadioBtn.setAttribute('enable', 'false')
      elem.showCompletedRadioBtn.setAttribute('enable', 'true')
      elem.showActualRadioBtn.setAttribute('enable', 'false')
      break
    case 'show-actual-radio':
      elem.showCompletedRadioBtn.setAttribute('enable', 'false')
      elem.showAllRadioBtn.setAttribute('enable', 'false')
      elem.showActualRadioBtn.setAttribute('enable', 'true')
  }
}

export const handlerSwitchShowFilter = (activeRadioBtn, elem) => {
  changeShowRadioBtnValue(activeRadioBtn.id, elem)
  updateAllData(elem)
  initScrollArrow(elem)
}
