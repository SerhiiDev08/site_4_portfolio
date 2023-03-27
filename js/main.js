let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.wrapper__burger');
let btnClose = document.querySelector('.close');
let overlay = document.querySelector('.burger__menu-overlay');
let links = document.querySelectorAll('.burger__menu-item');
let button = document.querySelector('.burger__menu-btn');

burger.addEventListener('click', () => {
	menu.classList.add('active');

	if (menu.classList.contains('active')) {
		document.body.style.overflow = 'hidden';
	}
})

btnClose.addEventListener('click', () => {
	menu.classList.remove('active')
	document.body.style.overflow = 'scroll';
})
overlay.addEventListener('click', () => {
	menu.classList.remove('active')
	document.body.style.overflow = 'scroll';
})
for (let link of links) {
	link.addEventListener('click', () => {
		menu.classList.remove('active')
		document.body.style.overflow = 'scroll';
	})
}
button.addEventListener('click', () => {
	menu.classList.remove('active')
	document.body.style.overflow = 'scroll';
})