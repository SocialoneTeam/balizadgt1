// Global JavaScript for Baliza V16 Theme

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.header__mobile-menu-toggle');
  const mobileMenu = document.querySelector('.header__mobile-nav');
  const menuIcon = document.querySelector('.header__menu-icon');
  const closeIcon = document.querySelector('.header__close-icon');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      const isOpen = mobileMenu.style.display === 'block';

      mobileMenu.style.display = isOpen ? 'none' : 'block';

      if (menuIcon && closeIcon) {
        menuIcon.style.display = isOpen ? 'block' : 'none';
        closeIcon.style.display = isOpen ? 'none' : 'block';
      }

      mobileMenuToggle.setAttribute('aria-expanded', !isOpen);
    });
  }

  // Close mobile menu when clicking on links
  const mobileLinks = document.querySelectorAll('.header__mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (mobileMenu) {
        mobileMenu.style.display = 'none';
      }
      if (menuIcon && closeIcon) {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Scroll to top on page load if hash is present
  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }

  // Add to cart notifications
  const addToCartButtons = document.querySelectorAll('[data-add-to-cart]');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      showNotification('Producto añadido al carrito', 'success');
    });
  });

  // Header scroll behavior
  let lastScroll = 0;
  const header = document.querySelector('.header');

  if (header) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
      }

      if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
      } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
      }

      lastScroll = currentScroll;
    });
  }
});

// Notification system
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <div class="notification__content">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        ${type === 'success' ?
          '<path d="M9 12l2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle>' :
          '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'
        }
      </svg>
      <span>${message}</span>
    </div>
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('notification--show');
  }, 10);

  setTimeout(() => {
    notification.classList.remove('notification--show');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Product image gallery
function changeMainImage(imageUrl) {
  const mainImage = document.querySelector('.product-image-primary');
  if (mainImage) {
    mainImage.src = imageUrl;
  }

  // Update active thumbnail
  document.querySelectorAll('.product-thumbnail').forEach(thumb => {
    thumb.classList.remove('active');
  });
  event.target.closest('.product-thumbnail').classList.add('active');
}

// Quantity controls
function changeQuantity(delta) {
  const quantityInput = document.getElementById('quantity');
  if (quantityInput) {
    const currentValue = parseInt(quantityInput.value);
    const newValue = Math.max(1, currentValue + delta);
    quantityInput.value = newValue;
  }
}

// Loading state
function setLoading(element, loading = true) {
  if (loading) {
    element.classList.add('loading');
    element.setAttribute('disabled', 'disabled');
  } else {
    element.classList.remove('loading');
    element.removeAttribute('disabled');
  }
}

// Format price
function formatMoney(cents, format) {
  if (typeof cents === 'string') {
    cents = cents.replace('.', '');
  }

  let value = '';
  const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  const formatString = format || '€{{amount}}';

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = precision || 2;
    thousands = thousands || '.';
    decimal = decimal || ',';

    if (isNaN(number) || number === null) {
      return '0';
    }

    number = (number / 100.0).toFixed(precision);

    const parts = number.split('.');
    const dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
    const centsAmount = parts[1] ? decimal + parts[1] : '';

    return dollarsAmount + centsAmount;
  }

  switch (formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }

  return formatString.replace(placeholderRegex, value);
}

// Export global functions
window.changeMainImage = changeMainImage;
window.changeQuantity = changeQuantity;
window.showNotification = showNotification;
window.setLoading = setLoading;
window.formatMoney = formatMoney;
