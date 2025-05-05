// Navigation active highlight and content switching simulation (since no real pages)
const navLinks = document.querySelectorAll('nav a');
const pageTitle = document.getElementById('page-title');
const welcomeMsg = document.getElementById('welcome-msg');
const cardsContainer = document.getElementById('cards-container');
const aboutSection = document.getElementById('about-section');

// Welcome messages to cycle
const dynamicWelcomeMessages = [
    "Website sedang dalam pengembangan...",
    "Segera hadir dengan fitur-fitur menarik!",
    "Pantau terus untuk update terbaru.",
    "Terima kasih telah mengunjungi kami!"
];
let welcomeIndex = 0;

// Cycle the welcome message every 3 seconds
setInterval(() => {
    welcomeIndex = (welcomeIndex + 1) % dynamicWelcomeMessages.length;
    welcomeMsg.textContent = dynamicWelcomeMessages[welcomeIndex];
}, 3000);

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
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        setActiveLink(link);
        loadPageContent(link.dataset.page);
    });
});

// Make cards clickable linking to respective pages (open in new tab)
cardsContainer.addEventListener('click', e => {
    const card = e.target.closest('.card');
    if(card && card.dataset.link) {
        window.open(card.dataset.link, '_blank');
    }
});
