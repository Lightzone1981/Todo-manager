// скролл в конец контейнера
export const scrollDown = (todosContainer) => {
  todosContainer.scrollTo({ top: 1000, behavior: 'smooth' })
}

// инициализация кнопки скролла наверх
export const initScrollArrow = (elem) => {
  elem.arrowTop.style.bottom = '-50%'
  elem.arrowTop.style.width = elem.arrowTop.onclick = () => elem.todosContainer.scrollTo({ top: 0, behavior: 'smooth' })
  elem.todosContainer.addEventListener('scroll', () => {
    if (elem.todosContainer.scrollTop < 20) elem.arrowTop.style.bottom = '-50%'
    else elem.arrowTop.style.bottom = '4%'
  })
  scrollDown(elem.todosContainer)
}
