/**
 * Main function to initialize site-wide JavaScript functionality.
 * Last Updated: May 23, 2025
 */
function main() {
  console.log("Initializing Vigilant Shield functionality");
  
  // Initialize search functionality for the blog page
  initializeSearch();

  // Initialize mobile menu functionality
  initializeMobileMenu();
}

/**
 * Handles the cosmetic search functionality on the blog page.
 * In a real application, this would be replaced with actual search logic.
 */
function initializeSearch() {
  const searchInput = document.querySelector('.search-input');
  const searchButton = document.querySelector('.search-button');
  
  if (searchInput && searchButton) {
    const performSearch = () => {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        alert('Searching for: ' + searchTerm);
        // In a real implementation, this would trigger a site search.
      } else {
        alert('Please enter a search term.');
      }
    };

    // Make search button clickable
    searchButton.addEventListener('click', performSearch);
    
    // Allow Enter key to trigger search from the input field
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }
}

/**
 * Handles the mobile menu toggle functionality
 * Ensures the X icon appears when menu is toggled and menu items are visible
 * Applies staggered animations to menu items for a smoother experience
 */
function initializeMobileMenu() {
  const navToggler = document.getElementById('navToggler');
  const body = document.body;
  const menuOverlay = document.querySelector('.menu-overlay');
  const nav = document.querySelector('nav');
  const menuItems = document.querySelectorAll('nav li');
  const mobileBrand = document.querySelector('.mobile-brand');
  
  if (navToggler) {
    navToggler.addEventListener('change', function() {
      // Toggle body scroll lock when menu is open
      if (this.checked) {
        body.style.overflow = 'hidden';
        
        // Add animation class
        if (nav) {
          nav.classList.remove('menu-hidden');
          nav.classList.add('menu-visible');
        }
        
        // Reset any existing animations
        menuItems.forEach(item => {
          item.style.opacity = '0';
        });
        
        if (mobileBrand) {
          mobileBrand.style.opacity = '0';
        }
      } else {
        body.style.overflow = '';
        
        // Add animation class
        if (nav) {
          nav.classList.remove('menu-visible');
          nav.classList.add('menu-hidden');
        }
      }
    });
  }
  
  // Close menu when clicking the overlay
  if (menuOverlay) {
    menuOverlay.addEventListener('click', function() {
      if (navToggler && navToggler.checked) {
        navToggler.checked = false;
        body.style.overflow = '';
        
        // Add animation class
        if (nav) {
          nav.classList.remove('menu-visible');
          nav.classList.add('menu-hidden');
        }
      }
    });
  }
  
  // Close menu when clicking a nav link (better mobile UX)
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navToggler && navToggler.checked && window.innerWidth <= 767) {
        navToggler.checked = false;
        body.style.overflow = '';
        
        if (nav) {
          nav.classList.remove('menu-visible');
          nav.classList.add('menu-hidden');
        }
      }
    });
  });
}

// Run the main function when the document is ready
document.addEventListener('DOMContentLoaded', main);