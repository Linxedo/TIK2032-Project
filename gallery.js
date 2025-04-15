const images = document.querySelectorAll('.gallery img');

images.forEach(function(img) {
    img.addEventListener('click', function() {
        const newWindow = window.open("", "_blank", "width=800,height=600");
        newWindow.document.write("<img src='" + img.src + "' style='width:100%; height:auto;'>");
    });
});
