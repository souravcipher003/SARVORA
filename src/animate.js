export const heroAnimation = () => {
  const items = document.querySelectorAll('.hero-animate')

  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('show')
    }, index * 200)
  })
}
