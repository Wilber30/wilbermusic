const initApp = () => {
    
    // Header variables
    const smallHamburgerBtn = document.getElementById('sm-hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const bannerHeading = document.getElementById('banner-heading')
    const smallHeaderButton = document.getElementById('sm-header-button')
    const videoOverlay = document.getElementById('video-cover')
    const footerOverlay = document.getElementById('footer-cover')
    const burgerBars = document.getElementById('burger-bars')

    // Side-nav variables
    const largeBurgerBtn = document.getElementById('lg-hamburger-button')
    const sideNav = document.getElementById('side-nav')
    const wholeNavSection = document.getElementById('whole-nav-section')
    const overlay = document.getElementById('cover')
    const body = document.getElementById('body')

    const toggleMenu = () => {
			smallHamburgerBtn.classList.toggle('toggle-btn')
      burgerBars.classList.toggle('outline')
			bannerHeading.classList.toggle('flex')
			bannerHeading.classList.toggle('hidden')
      bannerHeading.classList.toggle('animate-fade-in-text')
			mobileMenu.classList.toggle('toggle-header')
      mobileMenu.classList.toggle('is-active')
      mobileMenu.classList.toggle('!top-[15%]')
      overlay.classList.toggle('!flex')
      videoOverlay.classList.toggle('!flex')
      footerOverlay.classList.toggle('!flex')
    }

    const toggleNav = () => {
			largeBurgerBtn.classList.toggle('toggle-btn')
			sideNav.classList.toggle('toggle-nav')
      wholeNavSection.classList.toggle('!right-0')
      overlay.classList.toggle('!flex')
      videoOverlay.classList.toggle('!flex')
      footerOverlay.classList.toggle('!flex')
      body.classList.toggle('fixed')
    }

    smallHamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
    overlay.addEventListener('click',toggleMenu)
    videoOverlay.addEventListener('click',toggleMenu)
    footerOverlay.addEventListener('click',toggleMenu)
    largeBurgerBtn.addEventListener('click', toggleNav)
    sideNav.addEventListener('click', toggleNav)
}

document.addEventListener('DOMContentLoaded', initApp)

const header = document.getElementById('header-section') 
const smallHeaderButton = document.getElementById('sm-header-button')
const mobileMenu = document.getElementById('mobile-menu')

// window.addEventListener('scroll', () => {
//   let scrollPosition = window.scrollY + 80;

//   if(scrollPosition >= 500) {
//     header.classList.add("opacity-100")
//     header.classList.remove("opacity-90")
//     smallHeaderButton.classList.add("border-b-4", "border-dark-grey")
//     mobileMenu.classList.add("border-b-4", "border-dark-grey")
//   } else if(scrollPosition <= 500) {
//     header.classList.add('opacity-90')
//     header.classList.remove("opacity-100")
//     smallHeaderButton.classList.remove("border-b-4", "border-dark-grey")
//     mobileMenu.classList.remove("border-b-4", "border-dark-grey")
//   } 
// })

