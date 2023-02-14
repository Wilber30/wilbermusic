const initApp = () => {
    
    // Header variables
    const smallHamburgerBtn = document.getElementById('sm-hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const bannerHeading = document.getElementById('banner-heading')
    const smallHeaderButton = document.getElementById('sm-header-button')

    // Side-nav variables
    const largeBurgerBtn = document.getElementById('lg-hamburger-button')
    const sideNav = document.getElementById('side-nav')
    const wholeNavSection = document.getElementById('whole-nav-section')

    const toggleMenu = () => {
			smallHamburgerBtn.classList.toggle('toggle-btn')
			bannerHeading.classList.toggle('flex')
			bannerHeading.classList.toggle('hidden')
			mobileMenu.classList.toggle('toggle-header')
			smallHeaderButton.classList.add('bg-antique')
    }

    const toggleNav = () => {
			largeBurgerBtn.classList.toggle('toggle-btn')
			sideNav.classList.toggle('toggle-nav')
      wholeNavSection.classList.toggle('right-0')
    }

    smallHamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
    largeBurgerBtn.addEventListener('click', toggleNav)
    sideNav.addEventListener('click', toggleNav)

}

document.addEventListener('DOMContentLoaded', initApp)