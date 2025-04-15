// Notifikasi saat klik link
document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        alert('Anda akan diarahkan ke halaman ' + link.text);
    });
});

// Log ke console ketika halaman dimuat
window.onload = function() {
    console.log("Halaman telah dimuat!");
}
