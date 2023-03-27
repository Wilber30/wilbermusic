const initApp = () => {
    
    // Header variables
    const smallHamburgerBtn = document.getElementById('sm-hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const smallHeaderButton = document.getElementById('sm-header-button')

    // Side-nav variables
    const largeBurgerBtn = document.getElementById('lg-hamburger-button')
    const sideNav = document.getElementById('side-nav')
    const wholeNavSection = document.getElementById('whole-nav-section')
    const overlay = document.getElementById('cover')
    const body = document.getElementById('body')

    const toggleMenu = () => {
    smallHamburgerBtn.classList.toggle('toggle-btn')
	mobileMenu.classList.toggle('toggle-header')
    mobileMenu.classList.toggle('is-active')
	smallHeaderButton.classList.add('bg-antique')
    smallHeaderButton.classList.toggle("border-b-4", "border-dark-grey")
    smallHeaderButton.classList.toggle("border-none")
    overlay.classList.toggle('!flex')
    }

    const toggleNav = () => {
	largeBurgerBtn.classList.toggle('toggle-btn')
	sideNav.classList.toggle('toggle-nav')
    wholeNavSection.classList.toggle('!right-0')
    overlay.classList.toggle('!flex')
    body.classList.toggle('fixed')
    }

    smallHamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
    largeBurgerBtn.addEventListener('click', toggleNav)
    sideNav.addEventListener('click', toggleNav)

}

document.addEventListener('DOMContentLoaded', initApp)

const header = document.getElementById('header-section') 
const smallHeaderButton = document.getElementById('sm-header-button')
const mobileMenu = document.getElementById('mobile-menu')

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY + 80;

  if(scrollPosition >= 500) {
    header.classList.add("opacity-100")
    header.classList.remove("opacity-90")
    smallHeaderButton.classList.add("border-b-4", "border-dark-grey")
    mobileMenu.classList.add("border-b-4", "border-dark-grey")
  } else if(scrollPosition <= 500) {
    header.classList.add('opacity-90')
    header.classList.remove("opacity-100")
    smallHeaderButton.classList.remove("border-b-4", "border-dark-grey")
    mobileMenu.classList.remove("border-b-4", "border-dark-grey")
  } 
})

