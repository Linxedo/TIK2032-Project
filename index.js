const navLinks = document.querySelectorAll('nav a');
const pageTitle = document.getElementById('page-title');
const cardsContainer = document.getElementById('cards-container');
const aboutSection = document.getElementById('about-section');
const welcomeMsg = document.getElementById('welcome-msg');

function setActiveLink(target) {
    navLinks.forEach(link => {
        link.classList.toggle('active', link === target);
    });
}

function loadPageContent(page) {
    switch(page) {
        case 'home':
            pageTitle.textContent = 'Beranda';
            cardsContainer.style.display = 'flex';
            aboutSection.style.display = 'block';
            welcomeMsg.style.display = 'block';
            welcomeMsg.textContent = 'Underdevelopment.';
            break;
        case 'gallery':
            pageTitle.textContent = 'Galeri Foto';
            cardsContainer.style.display = 'none';
            aboutSection.style.display = 'none';
            welcomeMsg.style.display = 'block';
            welcomeMsg.textContent = 'Tampilkan koleksi foto terbaik kami.';
            break;
        case 'blog':
            pageTitle.textContent = 'Artikel Blog';
            cardsContainer.style.display = 'none';
            aboutSection.style.display = 'none';
            welcomeMsg.style.display = 'block';
            welcomeMsg.textContent = 'Temukan artikel menarik dan informatif.';
            break;
        case 'contact':
            pageTitle.textContent = 'Kontak Kami';
            cardsContainer.style.display = 'none';
            aboutSection.style.display = 'none';
            welcomeMsg.style.display = 'block';
            welcomeMsg.textContent = 'Silakan hubungi kami melalui form kontak.';
            break;
        default:
            pageTitle.textContent = 'Beranda';
            cardsContainer.style.display = 'flex';
            aboutSection.style.display = 'block';
            welcomeMsg.style.display = 'block';
            welcomeMsg.textContent = 'Underdevelopment.';
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        setActiveLink(link);
        loadPageContent(link.dataset.page);
    });
});

cardsContainer.addEventListener('click', e => {
    const card = e.target.closest('.card');
    if (card && card.dataset.link) {
        window.open(card.dataset.link, '_blank');
    }
});
