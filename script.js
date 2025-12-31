// Simple Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Toggle the display of nav links
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "70px";
        navLinks.style.right = "0";
        navLinks.style.background = "white";
        navLinks.style.width = "100%";
        navLinks.style.padding = "2rem";
        navLinks.style.boxShadow = "0 5px 10px rgba(0,0,0,0.1)";
    }
});
