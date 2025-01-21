//descripciones estén ocultas 
document.addEventListener("DOMContentLoaded", function() {
    const productDescriptions = document.querySelectorAll('.product-description');
    productDescriptions.forEach(description => {
        description.style.display = 'none'; // descripciones ocultas
    });
});

// muestra/oculta la descripción al hacer clic en "Ver más"
document.querySelectorAll('.view-more').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.closest('.product');
        const description = product.querySelector('.product-description');
        const isVisible = description.style.display === 'block';

        description.style.display = isVisible ? 'none' : 'block';
        button.textContent = isVisible ? 'Ver más' : 'Ocultar información';
    });
});
