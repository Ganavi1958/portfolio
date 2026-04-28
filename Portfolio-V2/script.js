// Handle responsive navigation
document.addEventListener('DOMContentLoaded', () => {
    // Navigation active state and smooth scrolling
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    
    // Add click handler for nav buttons
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = btn.getAttribute('data-target');
            if (targetId) {
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Update active nav button based on scroll position
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // A bit of offset for the fixed header
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-target') === current) {
                btn.classList.add('active');
            }
            // Edge case: if scroll is at top, highlight home
            if (scrollY < 100 && btn.getAttribute('data-target') === 'home') {
                navButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });
    });

    // Fade-in animation observer
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    fadeElements.forEach(el => observer.observe(el));
    
    // Initial trigger for elements already in viewport
    setTimeout(() => {
        const homeSection = document.getElementById('home');
        if (homeSection) homeSection.classList.add('visible');
    }, 100);
});
