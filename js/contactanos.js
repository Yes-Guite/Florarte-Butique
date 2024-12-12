// Función para manejar el clic en el botón "Agregar al carrito"
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.cart-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Producto agregado al carrito');
        });
    });
});
