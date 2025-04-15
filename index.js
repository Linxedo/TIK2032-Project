// Smooth Scroll untuk navigasi ke bagian yang dituju
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efek animasi pada konten saat menggulir
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('h1, h2, h3, p');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('fadeIn');
        } else {
            element.classList.remove('fadeIn');
        }
    });
});

// Menambahkan kelas CSS untuk animasi fadeIn
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .fadeIn {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 1s ease-out, transform 1s ease-out;
        }

        h1, h2, h3, p {
            opacity: 0;
            transform: translateY(50px);
        }
    </style>
`);
