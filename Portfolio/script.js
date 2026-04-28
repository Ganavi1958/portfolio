document.addEventListener('DOMContentLoaded', () => {
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.tab-section');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Handle tab switching
    navBtns.forEach(btn => {
        if(btn.classList.contains('cv-btn')) return; // Ignore CV button for tabs
        
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            
            // Remove active classes
            navBtns.forEach(b => b.classList.remove('active'));
            sections.forEach(s => {
                s.classList.remove('active-section');
                s.classList.add('hidden-section');
            });

            // Add active class to clicked button and target section
            btn.classList.add('active');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('hidden-section');
                targetSection.classList.add('active-section');
            }

            // Close mobile menu
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
            
            // Scroll back to the top of the page when opening a section
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});
