const menuIcon = document.querySelector('[data-menu="icon"]')
const menuMobile = document.querySelector('[data-menu="mobile"]')
let menuOpened = false

// Open/Close menu mobile
menuIcon.addEventListener('click', toggleMenu)

function toggleMenu() {

  let menu = menuMobile.style
  
  menu.transition = 'all 600ms'

  if (menuOpened) {
    menu.height = '0vh'
    menuOpened = false
  } else {
    menu.height = '100vh'
    menuOpened = true
  }
}
