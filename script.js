window.addEventListener('scroll',()=>{
	const header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
})

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
hamburger.addEventListener('click', ()=>{
	hamburger.classList.toggle('active');
	navbar.classList.toggle('active');
})