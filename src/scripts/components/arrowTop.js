// создаёт кнопку скролла наверх
export const createArrowTop = () => {
  const arrowTop = document.createElement('button')
  arrowTop.classList = 'arrow-top'
  arrowTop.id = 'arrow-top'
  arrowTop.type = 'button'
  return arrowTop
}
