document.querySelectorAll('.cart-button').forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(1.2)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    });
});
