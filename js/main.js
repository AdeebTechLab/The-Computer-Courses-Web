/* =============================================
   ADEEB TECHNOLOGY LAB - MAIN JAVASCRIPT
   Home Page: Theme Toggle, Animations, Interactivity
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    // ========== THEME TOGGLE ==========
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('adeeb-theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', next);
        localStorage.setItem('adeeb-theme', next);
        updateThemeIcon(next);
    });

    function updateThemeIcon(theme) {
        themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // ========== NAVBAR SCROLL ==========
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        updateActiveNavLink();
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ========== MOBILE MENU ==========
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ========== ACTIVE NAV LINK ==========
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }

    // ========== CONTACT FORM ==========
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullName = contactForm.querySelector('#name')?.value.trim() || '';
            const phone = contactForm.querySelector('#phone')?.value.trim() || '';
            const email = contactForm.querySelector('#email')?.value.trim() || '';
            const courseSelect = contactForm.querySelector('#courseInterest');
            const message = contactForm.querySelector('#message')?.value.trim() || '';

            const courseInterest = courseSelect && courseSelect.selectedIndex > 0
                ? courseSelect.options[courseSelect.selectedIndex].text
                : 'Not selected';

            const whatsappText = [
                'New Student Inquiry',
                '',
                `Full Name: ${fullName}`,
                `Phone Number: ${phone}`,
                `Email Address: ${email}`,
                `Course Interest: ${courseInterest}`,
                `Message: ${message || 'N/A'}`
            ].join('\n');

            // 03092333121 in international format for wa.me
            const whatsappNumber = '923092333121';
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        });
    }

    // ========== TESTIMONIALS ARROWS ==========
    const testimonialsMarquee = document.querySelector('.testimonials-marquee');
    const testimonialPrev = document.getElementById('testimonialPrev');
    const testimonialNext = document.getElementById('testimonialNext');

    if (testimonialsMarquee && testimonialPrev && testimonialNext) {
        let autoScrollTimer = null;

        const scrollStep = () => {
            const card = testimonialsMarquee.querySelector('.testimonial-card');
            if (!card) return 360;
            const cardWidth = card.getBoundingClientRect().width;
            const styles = window.getComputedStyle(testimonialsMarquee.querySelector('.testimonials-track'));
            const gap = parseFloat(styles.columnGap || styles.gap || '24');
            return cardWidth + gap;
        };

        const moveBy = (distance) => {
            const maxScroll = testimonialsMarquee.scrollWidth - testimonialsMarquee.clientWidth;
            const nextPos = testimonialsMarquee.scrollLeft + distance;

            if (distance > 0 && nextPos >= maxScroll - 2) {
                testimonialsMarquee.scrollTo({ left: 0, behavior: 'smooth' });
                return;
            }

            if (distance < 0 && testimonialsMarquee.scrollLeft <= 2) {
                testimonialsMarquee.scrollTo({ left: maxScroll, behavior: 'smooth' });
                return;
            }

            testimonialsMarquee.scrollBy({ left: distance, behavior: 'smooth' });
        };

        const startAutoScroll = () => {
            if (autoScrollTimer) return;
            autoScrollTimer = setInterval(() => {
                moveBy(scrollStep());
            }, 2800);
        };

        const stopAutoScroll = () => {
            if (!autoScrollTimer) return;
            clearInterval(autoScrollTimer);
            autoScrollTimer = null;
        };

        testimonialPrev.addEventListener('click', () => {
            moveBy(-scrollStep());
        });

        testimonialNext.addEventListener('click', () => {
            moveBy(scrollStep());
        });

        testimonialsMarquee.addEventListener('mouseenter', stopAutoScroll);
        testimonialsMarquee.addEventListener('mouseleave', startAutoScroll);
        startAutoScroll();
    }

    // ========== COUNTER ANIMATION ==========
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-count]');
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.count);
            const duration = 2000;
            const start = performance.now();

            function update(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(eased * target);

                counter.textContent = current.toLocaleString();

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            }

            requestAnimationFrame(update);
        });
    }

    // ========== INTERSECTION OBSERVER ==========
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');

                if (entry.target.closest('.hero')) {
                    animateCounters();
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });

    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ========== PRELOADER REMOVE ==========
    document.body.classList.add('loaded');
});
