const categoryFilter = document.getElementById('categoryFilter');
const cards = document.querySelectorAll('.product-card');

categoryFilter.addEventListener('change', () => {
    const selected = categoryFilter.value;

    
    cards.forEach(card => {
        const match = selected === 'all' || card.dataset.category === selected;
        card.style.display = match ? '' : 'none';
    });
});

// 1. SAVAT HISOBLAGICHI
let cartCount = Number(localStorage.getItem('cartCount')) || 0;
const cartText = document.getElementById('cartText');
cartText.textContent = `Cart(${cartCount})`;

const addButtons = document.querySelectorAll('.btn-product__black');
addButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    cartText.textContent = `Cart(${cartCount})`;
    localStorage.setItem('cartCount', cartCount);
  });
});

// 2. KATEGORIYA FILTRI
const filter = document.getElementById('categoryFilter');
const cards = document.querySelectorAll('.product-card');
filter.addEventListener('change', () => {
  const value = filter.value;
  cards.forEach(card => {
    const show = value === 'all' || card.dataset.category === value;
    card.style.display = show ? '' : 'none';
  });
});