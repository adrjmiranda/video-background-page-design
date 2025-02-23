/**
 * Toggle Navbar Menu
 */
const toggleMenuButton = document.getElementById(
	'toggle-menu'
) as HTMLButtonElement;
const navbarMenu = document.querySelector('.navbar-menu') as HTMLUListElement;
const navbarMenuLinks = document.querySelectorAll(
	'.navbar-link'
) as NodeListOf<HTMLAnchorElement>;

if (toggleMenuButton && navbarMenu && navbarMenuLinks.length) {
	toggleMenuButton.addEventListener('click', () => {
		navbarMenu.classList.toggle('show');
	});

	navbarMenuLinks.forEach((link) =>
		link.addEventListener('click', () => {
			navbarMenu.classList.toggle('show');
		})
	);
}

/**
 * Scroll Reveal Animation
 */
import ScrollReveal from 'scrollreveal';

ScrollReveal().reveal('.header-content', {
	reset: false,
	mobile: true,
	opacity: 0,
	origin: 'bottom',
	distance: '30%',
	easing: 'ease-in-out',
	duration: 1750,
	delay: 250,
});
