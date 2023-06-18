// const openMenuEl = document.querySelector('.hamburger-menu')
const openMenuEl = document.getElementById('open')
const closeMenuEl = document.getElementById('close')
const menuLinksEl = document.querySelector('.mobile-nav-links-wrapper')
const themeSwitchEl = document.getElementById('theme-switch')

openMenuEl.addEventListener('click', () => {
  openMenuEl.style.display = 'none'
  closeMenuEl.style.display = 'flex'
  menuLinksEl.style.transform = 'translateX(0)'
})

closeMenuEl.addEventListener('click', () => {
  closeMenuEl.style.display = 'none'
  openMenuEl.style.display = 'flex'
  menuLinksEl.style.transform = 'translateX(100%)'
})
