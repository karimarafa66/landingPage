// Enhanced JavaScript functionality for the landing page

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Tech Stack Slider
    initTechStackSlider();
    // Page loader functionality
    const pageLoader = document.querySelector('.page-loader');
    
    // Hide loader after page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            pageLoader.classList.add('page-loaded');
        }, 500); // Short delay for smoother transition
    });
    
    // Fallback to hide loader if it takes too long
    setTimeout(function() {
        pageLoader.classList.add('page-loaded');
    }, 2000);
    
    // Add reveal effect to sections
    const sections = document.querySelectorAll('section');
    
    // Add reveal-section class to all sections
    sections.forEach(section => {
        if (!section.classList.contains('reveal-section')) {
            section.classList.add('reveal-section');
        }
    });
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle reveal animation
    function revealSections() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('active');
            }
        });
    }
    
    // Initial check on page load
    revealSections();
    
    // Check on scroll
    window.addEventListener('scroll', revealSections);
    // Add parallax effect to hero section
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        if (scrollPosition < window.innerHeight) {
            // Create parallax effect by moving the background slightly
            heroSection.style.backgroundPosition = `center ${scrollPosition * 0.4}px`;
        }
    });
    
    // Add tilt effect to service cards for a more interactive feel
    const cards = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .pricing-tier');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top; // y position within the element
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX * 5; // Max tilt of 5 degrees
            const deltaY = (y - centerY) / centerY * 5;
            
            this.style.transform = `perspective(1000px) rotateX(${-deltaY}deg) rotateY(${deltaX}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
        });
    });
    
    // Scroll to top button functionality with enhanced animation
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    const toggleScrollToTopButton = () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
            // Add a small animation when the button appears
            scrollToTopBtn.style.animation = 'pulse 2s infinite';
        } else {
            scrollToTopBtn.classList.remove('visible');
            scrollToTopBtn.style.animation = 'none';
        }
    };
    
    window.addEventListener('scroll', toggleScrollToTopButton);
    
    // Initial check for scroll button
    toggleScrollToTopButton();
    
    // Scroll to top when button is clicked with enhanced animation
    scrollToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add a click animation
        this.classList.add('clicked');
        
        // Remove the animation class after the animation completes
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add a hover animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.animation = 'pulse 1s infinite';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.animation = 'none';
            }
        });
    });
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight, // Dynamically adjusted for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll animations
    // Using the already declared sections variable
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    const animateSections = () => {
        const triggerBottom = window.innerHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add('animate-in');
            }
        });
    };
    
    // Highlight active nav item based on scroll position and change navbar style
    const highlightNavOnScroll = () => {
        let scrollPosition = window.scrollY;
        const navbar = document.querySelector('.navbar');
        const heroSection = document.querySelector('.hero-section');
        
        // Change navbar style based on scroll position
        if (scrollPosition > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // If at the top of the page, set Home link as active
        if (scrollPosition < 100) {
            const homeLink = document.querySelector('.navbar-nav .nav-link[href="#"]');
            if (homeLink) {
                homeLink.classList.add('active');
            }
            return;
        }
        
        // Find the current section
        sections.forEach(section => {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const sectionTop = section.offsetTop - navbarHeight; // Dynamically adjusted for navbar
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Add active class to current section link
                const currentLink = document.querySelector(`.navbar-nav .nav-link[href="#${sectionId}"]`);
                if (currentLink) {
                    currentLink.classList.add('active');
                }
            }
        });
    };
    
    window.addEventListener('scroll', () => {
        animateSections();
        highlightNavOnScroll();
    });
    
    // Initial checks
    animateSections();
    highlightNavOnScroll();
    
    // Form validation
    const contactForm = document.querySelector('.contact-section form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let valid = true;
            const inputs = this.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (valid) {
                // Here you would typically send the form data to a server
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Image loading effect
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Add loading class
        img.classList.add('loading');
        
        // Remove loading class when image is loaded
        img.addEventListener('load', function() {
            this.classList.remove('loading');
            this.classList.add('loaded');
        });
    });
    
    // Toggle mobile menu when clicking on nav links
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) { // Bootstrap lg breakpoint
                navbarCollapse.classList.remove('show');
            }
        });
    });
});

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add loading animation for portfolio images
function addImageLoadingEffect() {
    const images = document.querySelectorAll('.portfolio-item img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });
}

// Initialize image loading effects
addImageLoadingEffect();

// Tech Stack Slider functionality with Swiper.js
function initTechStackSlider() {
    // Check if the tech-stack-swiper element exists
    const swiperElement = document.querySelector('.tech-stack-swiper');
    if (!swiperElement) return;
    
    // Initialize Swiper
    const techStackSwiper = new Swiper('.tech-stack-swiper', {
        // Enable loop mode for infinite sliding
        loop: true,
        
        // Auto play with 3 second delay between transitions
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        
        // Enable smooth transitions
        effect: 'slide',
        speed: 800,
        
        // Responsive breakpoints
        breakpoints: {
            // When window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // When window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // When window width is >= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // When window width is >= 992px
            992: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    // Add event listeners for custom navigation buttons if needed
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            techStackSwiper.slidePrev();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            techStackSwiper.slideNext();
        });
    }
}