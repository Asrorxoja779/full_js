const categoryFilter = document.getElementById('categoryFilter');
const cards = document.querySelectorAll('.product-card');

categoryFilter.addEventListener('change', () => {
    const selected = categoryFilter.value;

    
    cards.forEach(card => {
        const match = selected === 'all' || card.dataset.category === selected;
        card.style.display = match ? '' : 'none';
    });
});