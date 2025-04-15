document.querySelectorAll('.article-content a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Artikel ini sedang dalam pengembangan.');
    });
});
