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



