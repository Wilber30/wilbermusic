const initApp = () => {
    
    // Header variables
    const smallHamburgerBtn = document.getElementById('sm-hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const bannerHeading = document.getElementById('banner-heading')
    const smallHeaderButton = document.getElementById('sm-header-button')
    const smallNavSection = document.getElementById('sm-nav-whole')

    // Side-nav variables
    const largeBurgerBtn = document.getElementById('lg-hamburger-button')
    const sideNav = document.getElementById('side-nav')

    const toggleMenu = () => {
			smallHamburgerBtn.classList.toggle('toggle-btn')
			bannerHeading.classList.toggle('flex')
			bannerHeading.classList.toggle('hidden')
			mobileMenu.classList.toggle('toggle-header')
			smallHeaderButton.classList.toggle('bg-antique')
			smallNavSection.classList.toggle('bg-antique')
    }

    const toggleNav = () => {
			largeBurgerBtn.classList.toggle('toggle-btn')
			sideNav.classList.toggle('toggle-nav')
    }

    smallHamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
    largeBurgerBtn.addEventListener('click', toggleNav)
    sideNav.addEventListener('click', toggleNav)

}

document.addEventListener('DOMContentLoaded', initApp)