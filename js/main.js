function main() {
  console.log("Initializing Vigilant Shield functionality");
  
  // Initialize search functionality
  initializeSearch();
  
  // Initialize newsletter subscription
  initializeNewsletter();
}

// Handle search functionality
function initializeSearch() {
  const searchInput = document.querySelector('.search-input');
  const searchButton = document.querySelector('.search-button');
  
  if (searchInput && searchButton) {
    // Make search button clickable
    searchButton.addEventListener('click', function() {
      if (searchInput.value.trim() !== '') {
        alert('Searching for: ' + searchInput.value);
        // In a real implementation, this would search the site
      } else {
        alert('Please enter a search term');
      }
    });
    
    // Allow Enter key to trigger search
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && this.value.trim() !== '') {
        alert('Searching for: ' + this.value);
        // In a real implementation, this would search the site
      }
    });
  }
}

// Handle newsletter subscription
function initializeNewsletter() {
  const emailInput = document.getElementById('newsletter-email');
  const subscribeButton = document.querySelector('.newsletter-button');
  
  if (emailInput && subscribeButton) {
    subscribeButton.addEventListener('click', function() {
      const email = emailInput.value.trim();
      if (email !== '' && isValidEmail(email)) {
        alert('Thank you for subscribing with: ' + email);
        emailInput.value = '';
        // In a real implementation, this would submit to a server
      } else {
        alert('Please enter a valid email address');
      }
    });
    
    // Allow Enter key to submit subscription
    emailInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const email = this.value.trim();
        if (email !== '' && isValidEmail(email)) {
          alert('Thank you for subscribing with: ' + email);
          this.value = '';
          // In a real implementation, this would submit to a server
        } else {
          alert('Please enter a valid email address');
        }
      }
    });
  }
}

// Helper function to validate email format
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Run the main function when the document is ready
document.addEventListener('DOMContentLoaded', main);
