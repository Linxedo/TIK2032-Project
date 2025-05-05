document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const cards = document.querySelectorAll('.card');
    const themeToggle = document.querySelector('.theme-toggle');
    const fontSelector = document.querySelector('#font-selector');
    const body = document.body;
    const bgLayer1 = document.querySelector('#bg-layer-1');
    const bgLayer2 = document.querySelector('#bg-layer-2');

    // Optimized background images (smaller size)
    const backgrounds = [
        'https://images.unsplash.com/photo-1507521628349-dee6b874e9e1?w=1000&auto=format&fit=crop&q=70',
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1000&auto=format&fit=crop&q=70',
        'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?w=1000&auto=format&fit=crop&q=70'
    ];

    let currentBackground = 1;
    let activeLayer = bgLayer1;

    // Langsung tampilkan background pertama
    bgLayer1.style.backgroundImage = `url('${backgrounds[0]}')`;
    bgLayer1.style.opacity = '1';
    bgLayer1.classList.add('transition-enabled');
    bgLayer2.classList.add('transition-enabled');

    // Preload all images for smooth transition
    const preloadImages = () => {
        return Promise.all(backgrounds.map(src => {
            return new Promise(resolve => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = resolve;
            });
        }));
    };

    // Ganti background dengan fade effect
    function changeBackground() {
        const nextLayer = activeLayer === bgLayer1 ? bgLayer2 : bgLayer1;
        nextLayer.style.backgroundImage = `url('${backgrounds[currentBackground]}')`;
        nextLayer.style.opacity = '1';
        activeLayer.style.opacity = '0';
        activeLayer = nextLayer;
        currentBackground = (currentBackground + 1) % backgrounds.length;
    }

    // Start slideshow setelah preload
    preloadImages().then(() => {
        setInterval(changeBackground, 10000);
    });

    // Navigasi aktif
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Untuk testing
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            // window.location.href = link.href; // Uncomment untuk produksi
        });
    });

    // Klik kartu = buka link
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('card-link')) return;
            const link = card.querySelector('.card-link')?.href;
            if (link) window.location.href = link;
        });
    });

    // Toggle dark mode
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

    // Ganti font dari select
    fontSelector.addEventListener('change', (e) => {
        body.style.fontFamily = `'${e.target.value}', sans-serif`;
        localStorage.setItem('font', e.target.value);
    });

    // Load font tersimpan
    const savedFont = localStorage.getItem('font');
    if (savedFont) {
        body.style.fontFamily = `'${savedFont}', sans-serif`;
        fontSelector.value = savedFont;
    }

    // Smooth scroll CTA
    const ctaBtn = document.querySelector('.cta-button');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('.about');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
