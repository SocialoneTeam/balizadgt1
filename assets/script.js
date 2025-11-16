document.addEventListener('DOMContentLoaded', () => {
  initializeCart();
  initializeSearch();
  initializeMobileMenu();
});

function initializeCart() {
  const cartLinks = document.querySelectorAll('[href="/cart"]');
  cartLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = '/cart';
    });
  });
}

function initializeSearch() {
  const searchIcon = document.querySelector('.search-icon');
  if (searchIcon) {
    searchIcon.addEventListener('click', () => {
      window.location.href = '/search';
    });
  }
}

function initializeMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.navigation');

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
      navigation.classList.toggle('active');
    });
  }
}

function addToCart(variantId, quantity = 1) {
  fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: [
        {
          id: variantId,
          quantity: quantity,
        },
      ],
    }),
  })
    .then(() => {
      window.location.href = '/cart';
    })
    .catch((error) => {
      console.error('Error adding to cart:', error);
    });
}
