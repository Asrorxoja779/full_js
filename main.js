const categoryFilter = document.getElementById('categoryFilter');
const cards = document.querySelectorAll('.product-card');

categoryFilter.addEventListener('change', () => {
    const selected = categoryFilter.value;

    
    cards.forEach(card => {
        const match = selected === 'all' || card.dataset.category === selected;
        card.style.display = match ? '' : 'none';
    });
});

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

const filter = document.getElementById('categoryFilter');
const cards2 = document.querySelectorAll('.product-card');
filter.addEventListener('change', () => {
  const value = filter.value;
  cards2.forEach(card2 => {
    const show = value === 'all' || card2.dataset.category === value;
    card2.style.display = show ? '' : 'none';
  });
});