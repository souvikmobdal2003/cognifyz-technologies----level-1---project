const button = document.getElementById('colorButton');
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
let currentColorIndex = 0;

button.addEventListener('click', function() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    button.style.backgroundColor = colors[currentColorIndex];
});
