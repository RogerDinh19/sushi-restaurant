/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
// Nếu click vào id = navToggle sẽ thêm class show-menu vào id = navMenu
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
// Nếu click vào id = navClose sẽ xóa class show-menu ở id = navMenu
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
// hàm này xóa class show-menu ở nav-menu

navLink.forEach(e => e.addEventListener('click', linkAction))
// người dùng click vào navLink sẽ thực hiện hàm linkAction



/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
// Hàm này có nghĩa là khi scrollY trên hoặc bằng 50 thì sẽ thêm class scroll-header và ngược lại
window.addEventListener('scroll', scrollHeader)
// thực thi hàm scrollHeader khi có sự kiện scroll trên window



/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
// hàm scroll có biến scrollUp chọc tới id scroll-up.khi scrollY >= 350 thêm class show-scroll và ngược lại
window.addEventListener('scroll', scrollUp)
// Thực thi hàm scrollUp khi có sự kiên scroll



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
console.log(sections)
// tạo biến sections lấy thẻ có class section và có thuộc tính là id
const scrollActive = () =>{
  	const scrollY = window.pageYOffset 
    // Biến scrollY lấy giá trị px chiều dọc của page

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        const setScroll =scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
		if(setScroll){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}     
	})
}
window.addEventListener('scroll', scrollActive)



/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-btn')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : iconTheme

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const scAnimation = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

scAnimation.reveal(`.home__img,.newsletter__container, .footer__logo,
                    .footer__description, .footer__content, footer__info`)
scAnimation.reveal(`.home__data`, {origin: 'bottom'})
scAnimation.reveal(`.about__data, .recently__data`, {origin: 'left'})
scAnimation.reveal(`.about__img, .recently__img`, {origin: 'right'})
scAnimation.reveal(`.popular__card`, {interval: 100})

