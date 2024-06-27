document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById('clickable-image');
    const numberElement = document.getElementById('number');
    let number = 0;

    image.addEventListener('click', function() {
        number++;
        numberElement.textContent = number;
    });
});
