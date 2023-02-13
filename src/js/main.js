const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const largeBurgerBtn = document.getElementById('large-hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const sideNav = document.getElementById('side-nav')
    const bannerHeading = document.getElementById('banner-heading')
    const smallHeaderButton = document.getElementById('sm-header-button')
    const smallNavSection = document.getElementById('small-nav-whole')


    const toggleMenu = () => {
        hamburgerBtn.classList.toggle('toggle-btn')
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

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
    largeBurgerBtn.addEventListener('click', toggleNav)
    sideNav.addEventListener('click', toggleNav)


}

document.addEventListener('DOMContentLoaded', initApp)