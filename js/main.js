/**
 * El Podium Portfolio - Main JavaScript
 * Handles basic interactions and scroll effects.
 */

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    
    // Change header background on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(255, 255, 255, 0.98)";
            header.style.padding = "10px 0";
            header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.05)";
        } else {
            header.style.background = "rgba(255, 255, 255, 0.9)";
            header.style.padding = "20px 0";
            header.style.boxShadow = "none";
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    // Simple reveal animation on scroll
    const revealElements = document.querySelectorAll(".feature-card, .screenshot-item");
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.8;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if (elTop < triggerBottom) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    // Initial styles for reveal elements
    revealElements.forEach(el => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        el.style.transition = "all 0.6s ease-out";
    });

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once on load
});
