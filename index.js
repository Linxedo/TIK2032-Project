document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pageTitle = document.getElementById('page-title');
    const welcomeMsg = document.getElementById('welcome-msg');
    const cards = document.querySelectorAll('.card');
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Navigation handling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const page = link.getAttribute('data-page');
            updatePageContent(page);
        });
    });

    // Update page content based on navigation
    function updatePageContent(page) {
        const titles = {
            home: 'Selamat Datang',
            gallery: 'Galeri Foto',
            blog: 'Artikel Blog',
            contact: 'Hubungi Kami'
        };
        const messages = {
            home: 'Jelajahi dunia fotografi, teknologi, dan inspirasi bersama kami!',
            gallery: 'Lihat koleksi foto terbaik kami.',
            blog: 'Baca artikel menarik dan informatif.',
            contact: 'Kami siap menjawab pertanyaan Anda!'
        };

        pageTitle.textContent = titles[page] || 'Selamat Datang';
        welcomeMsg.textContent = messages[page] || 'Jelajahi dunia fotografi, teknologi, dan inspirasi bersama kami!';
    }

    // Card click handling
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const link = card.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
    });

    // Theme toggle
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        themeToggle.innerHTML = `<i class="fas ${isDark ? 'fa-sun' : 'fa-moon'}"></i>`;
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = `<i class="fas fa-sun"></i>`;
    }

    // Smooth scroll for CTA button
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
