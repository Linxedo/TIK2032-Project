// script.js
console.log("Script file loaded!");

// You can add JavaScript functionality here if needed.
// For example, to add a dynamic effect or handle user interactions.

// Example: Adding a simple hover effect to the navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#00aaff';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '#555';
    });
});
