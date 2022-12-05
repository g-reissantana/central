
// Toggle menu mobile
const menuIcon = document.querySelector('[data-menu="icon"]')
const menuMobile = document.querySelector('[data-menu="mobile"]')
let menuOpened = false

function closeMenu(menu) {
  menu.style.height = '0vh'
}

function openMenu(menu) {

  menu.style.height = '100vh'


  menuMobile.querySelectorAll('a').forEach(el => {
    el.addEventListener('click', () => {
      closeMenu(menuMobile)
      menuOpened = false
    })
  })
}

function toggleMenu(menu) {

  menu.style.transition = 'all 600ms'

  if (menuOpened) {
    closeMenu(menu)
    menuOpened = false
  } else {
    openMenu(menu)
    menuOpened = true
  }

}

menuIcon.addEventListener('click', () => toggleMenu(menuMobile))

// Sliders

const sliders = document.querySelector('[data-slider="sliders"]')
const slideWidth = sliders.firstElementChild.offsetWidth
let c = 0

sliders.addEventListener('touch', () => alert('ola'))

setInterval(() => {

  let teste = sliders.style
  teste.transition = 'all 200ms'
  teste.marginLeft = `-${c}px`
  c += slideWidth + 16

  if(c > (slideWidth+16) * 7) {
    c = 0
  }

  console.log(slideWidth)
  console.log(c)

}, 2000)