document.addEventListener('DOMContentLoaded', () => {
  console.log("Website loaded successfully!");

  // Smooth scrolling untuk tautan yang menuju ke id di halaman
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Animasi fade-in untuk elemen utama (tabel dan footer)
  const fadeInElements = document.querySelectorAll('table, .footer');
  fadeInElements.forEach((el, index) => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = "opacity 1s ease-in-out";
      el.style.opacity = 1;
    }, index * 200); // Animasi bergantian untuk setiap elemen
  });
});
