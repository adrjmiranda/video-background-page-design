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
