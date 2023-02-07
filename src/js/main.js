const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-btn')
    const mobileMenu = document.getElementById('mobile-menu')
    const bannerHeading =document.getElementById('banner-heading')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('flex')
        hamburgerBtn.classList.toggle('hidden')
        bannerHeading.classList.toggle('flex')
        bannerHeading.classList.toggle('hidden')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)