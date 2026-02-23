/* =============================================
   CAMPUS PAGE JAVASCRIPT
   Shared logic for Bahawalpur & Islamabad pages
   ============================================= */

function initCampusPage(campusName) {

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

    // ========== NAVBAR ==========
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
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

    // ========== FILTER COURSES BY CAMPUS ==========
    const campusCourses = coursesData.filter(c => c.campus === campusName);
    let activeCategory = 'all';

    // Populate course select in form
    const courseSelect = document.getElementById('courseInterest');
    if (courseSelect) {
        campusCourses.forEach(course => {
            const option = document.createElement('option');
            option.value = course.title.toLowerCase().replace(/\s+/g, '-');
            option.textContent = course.title;
            courseSelect.appendChild(option);
        });
    }

    // ========== RENDER COURSES ==========
    const coursesGrid = document.getElementById('coursesGrid');
    const noResults = document.getElementById('noResults');
    const courseCountTitle = document.getElementById('courseCountTitle');

    function renderCourses(category = 'all') {
        let filtered = campusCourses;
        
        if (category !== 'all') {
            filtered = filtered.filter(c => c.category === category);
        }

        // Update count title
        courseCountTitle.textContent = `${filtered.length} Course${filtered.length !== 1 ? 's' : ''}`;

        if (filtered.length === 0) {
            coursesGrid.innerHTML = '';
            noResults.style.display = 'block';
            return;
        }

        noResults.style.display = 'none';
        const isIslamabad = campusName === 'islamabad';

        coursesGrid.innerHTML = filtered.map((course, index) => {
            const discount = Math.round(((course.oldPrice - course.newPrice) / course.oldPrice) * 100);
            const starsHTML = generateStars(course.rating);
            const featuresHTML = course.features.map(f => `
                <span class="course-feature">
                    <i class="fas fa-check-circle"></i> ${f}
                </span>
            `).join('');

            const campusLabel = capitalize(course.campus);
            const badgeCampusClass = isIslamabad ? 'badge-campus-isb' : 'badge-campus';

            return `
                <div class="course-card" style="animation-delay: ${index * 0.07}s">
                    <div class="course-card-image">
                        <img src="${course.image}" alt="${course.title}" loading="lazy" 
                             onerror="this.src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop'">
                        <div class="course-card-shine"></div>
                        <div class="course-badges">
                            <span class="badge ${badgeCampusClass}">
                                <i class="fas fa-map-marker-alt"></i> ${campusLabel}
                            </span>
                            ${course.hot 
                                ? '<span class="badge badge-hot"><i class="fas fa-fire"></i> HOT</span>' 
                                : `<span class="badge badge-discount">${discount}% OFF</span>`
                            }
                        </div>
                        <div class="course-duration">
                            <i class="far fa-clock"></i> ${course.duration}
                        </div>
                    </div>
                    <div class="course-card-body">
                        <span class="course-category-tag ${isIslamabad ? 'isb-tag' : ''}">${capitalize(course.category)}</span>
                        <h3>${course.title}</h3>
                        <p class="course-desc">${course.description}</p>
                        <button class="desc-toggle" aria-expanded="false" title="Read more">
                            <span class="desc-toggle-label">Read more</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="course-rating">
                            ${starsHTML}
                            <span>(${course.rating}) · ${course.students}+ students</span>
                        </div>
                        <div class="course-features">
                            ${featuresHTML}
                        </div>
                        <div class="course-pricing">
                            <div class="price-wrapper">
                                <span class="old-price">Rs. ${course.oldPrice.toLocaleString()}</span>
                                <span class="new-price ${isIslamabad ? 'isb-price' : ''}">Rs. ${course.newPrice.toLocaleString()}</span>
                            </div>
                            <a href="https://lms-adeeb-technology-lab.vercel.app/register/student" class="course-enroll-btn ${isIslamabad ? 'isb-enroll' : ''}" target="_blank">
                                Enroll Now <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Re-trigger animations
        requestAnimationFrame(() => {
            document.querySelectorAll('.course-card').forEach(card => {
                card.style.animation = 'none';
                card.offsetHeight;
                card.style.animation = '';
            });
        });

        document.querySelectorAll('.desc-toggle').forEach(btn => {
            const desc = btn.previousElementSibling;
            const hasOverflow = desc.scrollHeight > desc.clientHeight + 1;
            if (!hasOverflow) {
                btn.style.display = 'none';
                return;
            }
            btn.addEventListener('click', () => {
                const body = btn.closest('.course-card-body');
                const titleEl = body ? body.querySelector('h3') : null;
                const title = titleEl ? titleEl.textContent : '';
                openDescModal(title, desc.textContent);
            });
        });
    }

    function ensureDescModal() {
        if (document.getElementById('descModal')) return;
        const wrapper = document.createElement('div');
        wrapper.id = 'descModal';
        wrapper.className = 'desc-modal';
        wrapper.innerHTML = `
            <div class="desc-modal-backdrop"></div>
            <div class="desc-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="descModalTitle">
                <button class="desc-modal-close" aria-label="Close"><i class="fas fa-times"></i></button>
                <h3 class="desc-modal-title" id="descModalTitle"></h3>
                <div class="desc-modal-content"></div>
            </div>
        `;
        document.body.appendChild(wrapper);
        wrapper.querySelector('.desc-modal-backdrop').addEventListener('click', closeDescModal);
        wrapper.querySelector('.desc-modal-close').addEventListener('click', closeDescModal);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeDescModal();
        });
    }

    function openDescModal(title, text) {
        ensureDescModal();
        const modal = document.getElementById('descModal');
        modal.querySelector('.desc-modal-title').textContent = title;
        modal.querySelector('.desc-modal-content').textContent = text;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeDescModal() {
        const modal = document.getElementById('descModal');
        if (!modal) return;
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    function generateStars(rating) {
        let stars = '';
        const full = Math.floor(rating);
        const half = rating % 1 >= 0.5;
        for (let i = 0; i < full; i++) stars += '<i class="fas fa-star"></i>';
        if (half) stars += '<i class="fas fa-star-half-alt"></i>';
        const empty = 5 - full - (half ? 1 : 0);
        for (let i = 0; i < empty; i++) stars += '<i class="far fa-star"></i>';
        return stars;
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    ensureDescModal();
    // Initial render
    renderCourses();

    // ========== CATEGORY FILTER (from category cards) ==========
    window.filterByCategory = function(category) {
        activeCategory = category;

        // Update active state
        document.querySelectorAll('.category-card').forEach(card => {
            card.classList.toggle('active', card.dataset.filter === category);
        });

        renderCourses(category);

        // Smooth scroll to courses
        setTimeout(() => {
            document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    // ========== ENROLL HANDLER ==========
    window.handleCampusEnroll = function(courseName) {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });

            setTimeout(() => {
                // Try to select the course
                const select = document.getElementById('courseInterest');
                if (select) {
                    const options = select.options;
                    for (let i = 0; i < options.length; i++) {
                        if (options[i].textContent === courseName) {
                            select.selectedIndex = i;
                            break;
                        }
                    }
                }
                const nameInput = document.getElementById('name');
                if (nameInput) nameInput.focus();
            }, 800);
        } else {
            // Fallback if contact section is missing
            alert(`To enroll in ${courseName}, please contact us directly.`);
        }
    };

    // ========== CONTACT FORM ==========
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;

            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check-circle"></i> Message Sent!';
                btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.style.background = '';
                    btn.disabled = false;
                    contactForm.reset();
                }, 3000);
            }, 1500);
        });
    }

    // ========== COUNTER ANIMATION ==========
    function animateCounters() {
        const counters = document.querySelectorAll('[data-count]');
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.count);
            const duration = 2000;
            const start = performance.now();

            function update(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                counter.textContent = Math.floor(eased * target).toLocaleString();
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

                if (entry.target.closest('.campus-hero')) {
                    animateCounters();
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ========== 3D TILT ON CARDS (Desktop) ==========
    if (window.matchMedia('(min-width: 768px)').matches) {
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.course-card').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 28;
                    const rotateY = (centerX - x) / 28;
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.02)`;
                } else {
                    card.style.transform = '';
                }
            });
        });
    }
}
