// Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mainNav = document.getElementById('main-nav');
        
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('#main-nav a').forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
            });
        });

        // Auth modal functionality
        const authModal = document.getElementById('auth-modal');
        const loginBtn = document.getElementById('login-btn');
        const signupBtn = document.getElementById('signup-btn');
        const closeModal = document.getElementById('close-modal');

        loginBtn.addEventListener('click', function (e) {
            e.preventDefault();
            authModal.classList.add('active');
            showPage('login-page');
        });

        signupBtn.addEventListener('click', function (e) {
            e.preventDefault();
            authModal.classList.add('active');
            showPage('register-page');
        });

        closeModal.addEventListener('click', function () {
            authModal.classList.remove('active');
        });

        // Close modal when clicking outside
        authModal.addEventListener('click', function (e) {
            if (e.target === authModal) {
                authModal.classList.remove('active');
            }
        });

        // Auth page functions
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });

            // Show the requested page
            document.getElementById(pageId).classList.add('active');
        }

        function selectUserType(element) {
            // Remove selected class from all user types
            document.querySelectorAll('.user-type').forEach(type => {
                type.classList.remove('selected');
            });

            // Add selected class to clicked user type
            element.classList.add('selected');
        }

        // Blog Carousel Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const track = document.getElementById('blog-track');
            const cards = document.querySelectorAll('.blog-card');
            const prevBtn = document.getElementById('blog-prev');
            const nextBtn = document.getElementById('blog-next');
            const dots = document.querySelectorAll('.blog-dot');
            
            let currentPosition = 0;
            const cardWidth = 350 + 30; // card width + margin
            const totalCards = cards.length;
            let autoSlideInterval;
            
            // Set initial position
            updateBlogCarousel();
            
            // Start auto-slide
            startAutoSlide();
            
            // Next button functionality
            nextBtn.addEventListener('click', function() {
                resetAutoSlide();
                currentPosition = (currentPosition + 1) % totalCards;
                updateBlogCarousel();
            });
            
            // Previous button functionality
            prevBtn.addEventListener('click', function() {
                resetAutoSlide();
                currentPosition = (currentPosition - 1 + totalCards) % totalCards;
                updateBlogCarousel();
            });
            
            // Dot click functionality
            dots.forEach((dot) => {
                dot.addEventListener('click', function() {
                    resetAutoSlide();
                    currentPosition = parseInt(this.getAttribute('data-index'));
                    updateBlogCarousel();
                });
            });
            
            // Pause auto-slide on hover
            track.addEventListener('mouseenter', function() {
                clearInterval(autoSlideInterval);
            });
            
            // Resume auto-slide when mouse leaves
            track.addEventListener('mouseleave', function() {
                startAutoSlide();
            });
            
            function updateBlogCarousel() {
                // Calculate the translateX value based on current position
                let translateXValue;
                
                // For mobile devices, show fewer cards at once
                const cardsToShow = window.innerWidth < 768 ? 1 : 3;
                
                if (currentPosition <= totalCards - cardsToShow) {
                    translateXValue = -currentPosition * cardWidth;
                } else {
                    // If we're at the end, show the last set of cards
                    translateXValue = -(totalCards - cardsToShow) * cardWidth;
                }
                
                track.style.transform = `translateX(${translateXValue}px)`;
                
                // Update active dot
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentPosition);
                });
            }
            
            function startAutoSlide() {
                autoSlideInterval = setInterval(function() {
                    currentPosition = (currentPosition + 1) % totalCards;
                    updateBlogCarousel();
                }, 3000); // Change slide every 3 seconds
            }
            
            function resetAutoSlide() {
                clearInterval(autoSlideInterval);
                startAutoSlide();
            }
            
            // Update carousel on window resize
            window.addEventListener('resize', function() {
                updateBlogCarousel();
            });
            
            // FAQ functionality
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                
                question.addEventListener('click', () => {
                    // Close all other items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                });
            });
        });