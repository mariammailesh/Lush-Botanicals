
        // Simple cart functionality
        let cartCount = 3;
        
        // Add to cart buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', function() {
                cartCount++;
                document.querySelector('.cart-count').textContent = cartCount;
                
                // Add animation feedback
                this.innerHTML = '<i class="fas fa-check me-2"></i>Added!';
                this.style.background = 'linear-gradient(45deg, #22c55e, #16a34a)';
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-cart-plus me-2"></i>Add to Cart';
                    this.style.background = '';
                }, 2000);
            });
        });

        // Newsletter form
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const button = this.querySelector('button');
            const originalText = button.innerHTML;
            
            button.innerHTML = '<i class="fas fa-check me-2"></i>Subscribed!';
            button.style.background = '#22c55e';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = '';
                this.querySelector('input').value = '';
            }, 3000);
        });

        // Search functionality
        document.querySelector('.search-bar input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    window.location.href = `shop-plants.html?search=${encodeURIComponent(searchTerm)}`;
                }
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add loading states to CTA buttons
        document.querySelectorAll('.cta-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                if (this.getAttribute('href') !== '#') {
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Loading...';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                    }, 1000);
                }
            });
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for fade-in animation
        document.querySelectorAll('.category-card, .product-card, .testimonial-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    