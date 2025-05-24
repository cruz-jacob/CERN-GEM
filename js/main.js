// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggler = document.getElementById('navToggler');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    // If menu overlay doesn't exist, create it
    if (!menuOverlay) {
        const overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
        
        // Add click event to close menu when clicking overlay
        overlay.addEventListener('click', function() {
            navToggler.checked = false;
        });
    }
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navToggler.checked) {
            navToggler.checked = false;
        }
    });
});