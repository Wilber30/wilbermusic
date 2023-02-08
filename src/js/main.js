const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const largeBurgerBtn = document.getElementById('lg-hamburger-btn')
    const mobileMenu = document.getElementById('mobile-menu')
    const sideNav = document.getElementById('side-nav')
    const bannerHeading =document.getElementById('banner-heading')

    const toggleMenu = () => {
        hamburgerBtn.classList.toggle('toggle-btn')
        bannerHeading.classList.toggle('flex')
        bannerHeading.classList.toggle('hidden')
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
    }

    const toggleNav = () => {
        sideNav.classList.toggle('hidden')
        sideNav.classList.toggle('flex')
        largeBurgerBtn.classList.toggle('flex')
        largeBurgerBtn.classList.toggle('hidden')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
    largeBurgerBtn.addEventListener('click', toggleNav)
    sideNav.addEventListener('click', toggleNav)
}

document.addEventListener('DOMContentLoaded', initApp)