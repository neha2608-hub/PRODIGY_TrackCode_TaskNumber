window.onscroll = function() {
   const navbar = document.getElementById("navbar");
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   navbar.classList.add("scrolled");
   } else {
   navbar.classList.remove("scrolled");
   }
};
// Hamburger Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
   navLinks.classList.toggle('active');
});