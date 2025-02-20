document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена!');
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#555';
        });
        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#e44d26';
        });
    });
});