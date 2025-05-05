document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const cards = document.querySelectorAll('.card');
    const themeToggle = document.querySelector('.theme-toggle');
    const fontSelector = document.querySelector('#font-selector');
    const body = document.body;
    const bgLayer1 = document.querySelector('#bg-layer-1');
    const bgLayer2 = document.querySelector('#bg-layer-2');

    // Background slideshow
    const backgrounds = [
        'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1506104489822-562ca25152fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8NGslMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZSUyMGxvdWlzZXxlbnwwfHwwfHx8MA%3D%3D'
    ];

    // Preload images to avoid delays
    backgrounds.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    let currentBackground = 0;
    let activeLayer = bgLayer1;

    function changeBackground() {
        const nextLayer = activeLayer === bgLayer1 ? bgLayer2 : bgLayer1;
        nextLayer.style.backgroundImage = `url('${backgrounds[currentBackground]}')`;
        nextLayer.style.opacity = '1';
        activeLayer.style.opacity = '0';
        activeLayer = nextLayer;
        currentBackground = (currentBackground + 1) % backgrounds.length;
    }

    // Initialize first background
    bgLayer1.style.backgroundImage = `url('${backgrounds[currentBackground]}')`;
    bgLayer1.style.opacity = '1';
    bgLayer2.style.opacity = '0';
    currentBackground = (currentBackground + 1) % backgrounds.length;
    setInterval(changeBackground, 10000);

    // Highlight active navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // For testing; remove in production
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            // Uncomment in production: window.location.href = link.href;
        });
    });

    // Card click handling
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('card-link')) return;
            const link = card.querySelector('.card-link').href;
            if (link) window.location.href = link;
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

    // Font selection
    fontSelector.addEventListener('change', (e) => {
        body.style.fontFamily = `'${e.target.value}', sans-serif`;
        localStorage.setItem('font', e.target.value);
    });

    // Load saved font
    const savedFont = localStorage.getItem('font');
    if (savedFont) {
        body.style.fontFamily = `'${savedFont}', sans-serif`;
        fontSelector.value = savedFont;
    }

    // Smooth scroll for CTA button
    document.querySelector('.cta-button').addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector('.about');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});
