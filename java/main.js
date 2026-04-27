// Bundle Preview Modal Functions
function openBundleModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeBundleModal(modalId);
            document.removeEventListener('keydown', escHandler);
        }
    });
    // Close modal when clicking outside
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeBundleModal(modalId);
        }
    };
}

function closeBundleModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
// main.js for TIRAZ MEDIA website - English only

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Sidebar Navigation
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    let sidebarOverlay = null;

    // Create and add overlay element
    function createOverlay() {
        if (!sidebarOverlay) {
            sidebarOverlay = document.createElement('div');
            sidebarOverlay.className = 'sidebar-overlay';
            document.body.appendChild(sidebarOverlay);
            
            sidebarOverlay.addEventListener('click', closeSidebar);
        }
    }

    // Open sidebar
    function openSidebar() {
        if (mobileSidebar) {
            createOverlay();
            mobileSidebar.classList.add('active');
            if (sidebarOverlay) {
                sidebarOverlay.classList.add('active');
            }
            document.body.style.overflow = 'hidden';
        }
    }

    // Close sidebar
    function closeSidebar() {
        if (mobileSidebar) {
            mobileSidebar.classList.remove('active');
            if (sidebarOverlay) {
                sidebarOverlay.classList.remove('active');
            }
            document.body.style.overflow = 'auto';
        }
    }

    // Event listeners for sidebar
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', openSidebar);
    }

    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', closeSidebar);
    }

    // Close sidebar when clicking on a navigation link
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // Close sidebar on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileSidebar && mobileSidebar.classList.contains('active')) {
            closeSidebar();
        }
    });

    // Highlight active nav link in sidebar
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    sidebarLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Make header logos navigate to Home without editing each HTML file.
    function getHomeHref() {
        const path = window.location.pathname.replace(/\\/g, '/');
        if (path.includes('/html/services/')) {
            return '../home.html';
        }
        if (path.includes('/html/')) {
            return 'home.html';
        }
        return 'html/home.html';
    }

    function bindLogoNavigation() {
        const homeHref = getHomeHref();
        const logoImages = document.querySelectorAll('.logo img, .sidebar-header img');

        logoImages.forEach((img) => {
            if (!img) return;

            const parentLink = img.closest('a');
            if (parentLink) {
                parentLink.setAttribute('href', homeHref);
                return;
            }

            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                window.location.href = homeHref;
            });
        });
    }

    bindLogoNavigation();

    // Ensure browser tab icon uses the TIRAZ MEDIA logo (favicon).
    function getLogoAssetPath() {
        const path = window.location.pathname.replace(/\\/g, '/');
        if (path.includes('/html/services/')) {
            return '../../images/tiraz%20logo.png';
        }
        if (path.includes('/html/')) {
            return '../images/tiraz%20logo.png';
        }
        return 'images/tiraz%20logo.png';
    }

    function ensureFavicon() {
        const logoPath = getLogoAssetPath();
        const existingIcon = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');

        if (existingIcon) {
            existingIcon.setAttribute('href', logoPath);
            existingIcon.setAttribute('type', 'image/png');
            return;
        }

        const iconLink = document.createElement('link');
        iconLink.setAttribute('rel', 'icon');
        iconLink.setAttribute('type', 'image/png');
        iconLink.setAttribute('href', logoPath);
        document.head.appendChild(iconLink);
    }

    ensureFavicon();

    // UAE Client slider carousel
    const uaeClientImages = [
        '../images/UAE CLIENTS-20250906T201643Z-1-001/UAE CLIENTS/1.png',
        '../images/UAE CLIENTS-20250906T201643Z-1-001/UAE CLIENTS/2.png',
        '../images/UAE CLIENTS-20250906T201643Z-1-001/UAE CLIENTS/3.png',
        '../images/UAE CLIENTS-20250906T201643Z-1-001/UAE CLIENTS/4.png',
        '../images/UAE CLIENTS-20250906T201643Z-1-001/UAE CLIENTS/5.png',
        '../images/UAE CLIENTS-20250906T201643Z-1-001/UAE CLIENTS/6.png',
        '../images/UAE CLIENTS-20250906T201643Z-1-001/UAE CLIENTS/7.png',
        '../images/UAE CLIENTS-20250906T201643Z-1-001/UAE CLIENTS/8.png',
        '../images/UAE CLIENTS-20250906T201643Z-1-001/UAE CLIENTS/9.png',
        '../images/UAE CLIENTS-20250906T201643Z-1-001/UAE CLIENTS/10.png',
        '../images/UAE CLIENTS-20250906T201643Z-1-001/UAE CLIENTS/11.png',
        '../images/UAE CLIENTS-20250906T201643Z-1-001/UAE CLIENTS/12.png'
    ];
    let uaeClientStart = 0;
    const uaeClientTrack = document.getElementById('uae-client-track');
    function renderUaeClientImages() {
        if (!uaeClientTrack) return;
        uaeClientTrack.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            const idx = (uaeClientStart + i) % uaeClientImages.length;
            const img = document.createElement('img');
            img.src = uaeClientImages[idx];
            img.alt = 'UAE Client';
            img.style.width = '300px';
            img.style.height = '300px';
            img.style.marginRight = '16px';
            img.style.objectFit = 'contain';
            img.style.marginRight = '10px';
            uaeClientTrack.appendChild(img);
        }
    }
    function nextUaeClientSlide() {
        uaeClientStart = (uaeClientStart + 1) % uaeClientImages.length;
        renderUaeClientImages();
    }
    function prevUaeClientSlide() {
        uaeClientStart = (uaeClientStart - 1 + uaeClientImages.length) % uaeClientImages.length;
        renderUaeClientImages();
    }
    if (uaeClientTrack) {
        renderUaeClientImages();
        const nextBtn = document.getElementById('uae-client-next');
        const prevBtn = document.getElementById('uae-client-prev');
        if (nextBtn && prevBtn) {
            nextBtn.onclick = nextUaeClientSlide;
            prevBtn.onclick = prevUaeClientSlide;
        }
        setInterval(nextUaeClientSlide, 3000);
    }
    // Remove language storage
    localStorage.removeItem('altmate-language');
    localStorage.removeItem('selectedLanguage');
    
    // Set document to English
    document.documentElement.setAttribute('lang', 'en');
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.classList.remove('rtl');
    document.documentElement.classList.add('ltr');
    document.body.classList.remove('rtl');
    document.body.classList.add('ltr');
    
    // Highlight active nav link based on URL
    const navLinks = document.querySelectorAll('.main-nav a');
    const current = window.location.pathname.split('/').pop() || 'home.html';
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });
    
    // Newsletter form functionality
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
        });
    }
    
    // Contact form functionality
    const contactForm = document.querySelector('form');
    if (contactForm && contactForm.querySelector('#name')) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
        });
    }

    // Portfolio filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter portfolio items
                portfolioItems.forEach(item => {
                    const categories = item.getAttribute('data-category');
                    
                    if (filter === 'all' || categories.includes(filter)) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }

    // Samples page slideshow functionality
    initializeSlideshows();

    // Egyptian Client slider carousel
    const clientImages = [
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/009af9e3-7d25-48b9-bdd3-a314372303aa.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/069481db-8dfa-4f71-a1c9-43fcb38c1049.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/451332907_122103147614410055_8212181629596795456_n (1).jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/509386829_122103425066908951_1847803990348713951_n (1) (1).jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/9938e656-9ee1-4894-ae95-9bb5bedcfe4f.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/c1428617-9152-40e6-9f0f-3a8ee10500f7.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/Copy of 15.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/Copy of 16.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/Copy of 17.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/Copy of 18.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/Copy of 19.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/Copy of 20.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/Copy of 21.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/Copy of 22.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/Copy of 23.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/Copy of 24.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/Copy of 25.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/Copy of 27.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/Copy of 28.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/Copy of 29.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/Copy of 30.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/download (11).jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/download (12).jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/download (2).jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/download (3).jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/download (8).jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/download (8)1.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/download (9).jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/download.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/images.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/WhatsApp Image 2025-07-02 at 1.24.45 PM (1).jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/WhatsApp Image 2025-07-02 at 1.24.45 PM.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/WhatsApp Image 2025-07-02 at 1.57.08 PM.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/WhatsApp Image 2025-07-02 at 2.08.00 PM.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/WhatsApp Image 2025-07-02 at 2.16.53 PM.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/WhatsApp Image 2025-07-12 at 9.55.31 AM (3).jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/WhatsApp Image 2025-07-12 at 9.55.31 AM.jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/WhatsApp Image 2025-07-12 at 9.55.32 AM (2).jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/WhatsApp Image 2025-07-12 at 9.55.33 AM (1).jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/WhatsApp Image 2025-07-12 at 9.55.33 AM (2).jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/WhatsApp Image 2025-07-12 at 9.55.33 AM (4).jpg',
        '../images/EGYPT CLIENTS1/EGYPT CLIENTS/تنزيل (1).jpg'
    ];
    let clientStart = 0;
    const clientTrack = document.getElementById('client-track');
    function renderClientImages() {
        clientTrack.innerHTML = '';
        // Show 3 images on mobile, 6 on desktop
        const isMobile = window.innerWidth <= 480;
        const imagesToShow = isMobile ? 3 : 6;
        
        for (let i = 0; i < imagesToShow; i++) {
            const idx = (clientStart + i) % clientImages.length;
            const img = document.createElement('img');
            img.src = clientImages[idx];
            img.alt = 'Client';
            img.style.width = isMobile ? '80px' : '150px';
            img.style.height = isMobile ? '80px' : '150px';
            img.style.objectFit = 'contain';
            clientTrack.appendChild(img);
        }
    }
    function nextClientSlide() {
        clientStart = (clientStart + 1) % clientImages.length;
        renderClientImages();
    }
    function prevClientSlide() {
        clientStart = (clientStart - 1 + clientImages.length) % clientImages.length;
        renderClientImages();
    }
    if (clientTrack) {
        renderClientImages();
        const nextBtn = document.getElementById('client-next');
        const prevBtn = document.getElementById('client-prev');
        if (nextBtn && prevBtn) {
            nextBtn.onclick = nextClientSlide;
            prevBtn.onclick = prevClientSlide;
        }
        // Auto-slide on all devices
        setInterval(nextClientSlide, 3000);
        // Re-render on window resize
        window.addEventListener('resize', renderClientImages);
    }

    // Saudi Client slider carousel
    const saudiClientImages = [
        '../images/SAUDI CLIENTS/SAUDI CLIENTS/Copy of 27.jpeg',
        '../images/SAUDI CLIENTS/SAUDI CLIENTS/Copy of 28.png',
        '../images/SAUDI CLIENTS/SAUDI CLIENTS/Copy of 29.jpeg',
        '../images/SAUDI CLIENTS/SAUDI CLIENTS/Copy of 30.jpeg',
        '../images/SAUDI CLIENTS/SAUDI CLIENTS/DIMENSIONS LOGO (1).ai_20250824_121659_٠٠٠٠.png',
        '../images/SAUDI CLIENTS/SAUDI CLIENTS/تنزيل (2).png'
    ];
    let saudiClientStart = 0;
    const saudiClientTrack = document.getElementById('saudi-client-track');
    function renderSaudiClientImages() {
        if (!saudiClientTrack) return;
        saudiClientTrack.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            const idx = (saudiClientStart + i) % saudiClientImages.length;
            const img = document.createElement('img');
            img.src = saudiClientImages[idx];
            img.alt = 'Saudi Client';
            img.style.width = '80px';
            img.style.height = '80px';
            img.style.objectFit = 'contain';
            img.style.marginRight = '10px';
            saudiClientTrack.appendChild(img);
        }
    }
    function nextSaudiClientSlide() {
        saudiClientStart = (saudiClientStart + 1) % saudiClientImages.length;
        renderSaudiClientImages();
    }
    function prevSaudiClientSlide() {
        saudiClientStart = (saudiClientStart - 1 + saudiClientImages.length) % saudiClientImages.length;
        renderSaudiClientImages();
    }
    if (saudiClientTrack) {
        renderSaudiClientImages();
        const nextBtn = document.getElementById('saudi-client-next');
        const prevBtn = document.getElementById('saudi-client-prev');
        if (nextBtn && prevBtn) {
            nextBtn.onclick = nextSaudiClientSlide;
            prevBtn.onclick = prevSaudiClientSlide;
        }
        setInterval(nextSaudiClientSlide, 3000);
    }
});

// Slideshow functionality for samples page
let currentSlides = {
    'websites': 0,
    'advertising': 0,
    'results': 0,
    'photography': 0
};

function initializeSlideshows() {
    // Initialize all slideshows
    Object.keys(currentSlides).forEach(category => {
        updateSlideshow(category);
    });
}

function showCategory(category) {
    // Remove active class from all tabs
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Add active class to clicked tab
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // Hide all content sections
    document.querySelectorAll('.category-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected content section
    const targetContent = document.getElementById(`${category}-content`);
    if (targetContent) {
        setTimeout(() => {
            targetContent.classList.add('active');
        }, 100);
    }
    
    // For advertising category, show the first subcategory (food) by default
    if (category === 'advertising') {
        setTimeout(() => {
            showSubCategory('food');
        }, 150);
    }
    
    // For photography category, show the first subcategory (photo-food) by default
    if (category === 'photography') {
        setTimeout(() => {
            showSubCategory('photo-food');
        }, 150);
    }
    
    // Reset slideshow position for the selected category
    if (currentSlides[category] !== undefined) {
        currentSlides[category] = 0;
        updateSlideshow(category);
    }
}

function showSubCategory(subcategory) {
    // Remove active class from all sub-tabs
    document.querySelectorAll('.sub-tab-btn').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Add active class to clicked sub-tab
    document.querySelector(`[data-subcategory="${subcategory}"]`).classList.add('active');
    
    // Hide all subcategory content sections
    document.querySelectorAll('.subcategory-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected subcategory content section
    const targetSubContent = document.getElementById(`${subcategory}-subcontent`);
    if (targetSubContent) {
        setTimeout(() => {
            targetSubContent.classList.add('active');
        }, 100);
    }
}

function nextSlide(category) {
    const track = document.getElementById(category + '-track');
    if (!track) return;
    
    const slides = track.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    currentSlides[category] = (currentSlides[category] + 1) % totalSlides;
    updateSlideshow(category);
}

function previousSlide(category) {
    const track = document.getElementById(category + '-track');
    if (!track) return;
    
    const slides = track.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    currentSlides[category] = (currentSlides[category] - 1 + totalSlides) % totalSlides;
    updateSlideshow(category);
}

function updateSlideshow(category) {
    const track = document.getElementById(category + '-track');
    if (!track) return;
    
    const slides = track.querySelectorAll('.slide');
    const currentIndex = currentSlides[category];
    
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Add active class to current slide
    if (slides[currentIndex]) {
        slides[currentIndex].classList.add('active');
    }
    
    // Move the track
    const translateX = -currentIndex * 100;
    track.style.transform = `translateX(${translateX}%)`;
}

// Auto-advance slideshows (optional)
function startAutoSlideshow() {
    setInterval(() => {
        Object.keys(currentSlides).forEach(category => {
            const track = document.getElementById(category + '-track');
            if (track && track.closest('.slideshow-container:hover') === null) {
                nextSlide(category);
            }
        });
    }, 5000); // Change slide every 5 seconds
}

// Uncomment to enable auto slideshow
// startAutoSlideshow();

// Website Preview Modal Functions
function openWebsitePreview(url, title) {
    const modal = document.getElementById('websiteModal');
    const modalTitle = document.getElementById('modalTitle');
    const iframe = document.getElementById('websiteFrame');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const openNewTabBtn = document.getElementById('openNewTab');
    
    if (!modal || !iframe) return;
    
    // Set title and show modal
    modalTitle.textContent = title;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Show loading spinner
    loadingSpinner.style.display = 'block';
    iframe.style.display = 'none';
    
    // Set iframe source
    iframe.src = url;
    
    // Handle iframe load
    iframe.onload = function() {
        loadingSpinner.style.display = 'none';
        iframe.style.display = 'block';
    };
    
    // Handle iframe error
    iframe.onerror = function() {
        loadingSpinner.innerHTML = '<p style="color: #ff6b6b;">Failed to load website. <a href="' + url + '" target="_blank" style="color: #b09778;">Open in new tab</a></p>';
    };
    
    // Set up "open in new tab" button
    openNewTabBtn.onclick = function() {
        window.open(url, '_blank');
    };
    
    // Close modal when clicking outside
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeWebsitePreview();
        }
    };
    
    // Handle escape key
    document.addEventListener('keydown', handleEscapeKey);
}

function closeWebsitePreview() {
    const modal = document.getElementById('websiteModal');
    const iframe = document.getElementById('websiteFrame');
    
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    
    if (iframe) {
        iframe.src = ''; // Clear iframe to stop loading
    }
    
    // Remove escape key listener
    document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(e) {
    if (e.key === 'Escape') {
        closeWebsitePreview();
        closeImagePreview();
    }
}

// Image Preview Modal Functions
function openImagePreview(imageSrc, title, description) {
    const modal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('imageModalTitle');
    const previewImage = document.getElementById('previewImage');
    const imageLoadingSpinner = document.getElementById('imageLoadingSpinner');
    const imageDescription = document.getElementById('imageDescription');
    const downloadBtn = document.getElementById('downloadImage');
    
    if (!modal || !previewImage) return;
    
    // Set title and description
    modalTitle.textContent = title;
    imageDescription.textContent = description;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Show loading spinner
    imageLoadingSpinner.style.display = 'block';
    previewImage.style.display = 'none';
    
    // Set image source
    previewImage.src = imageSrc;
    
    // Handle image load
    previewImage.onload = function() {
        imageLoadingSpinner.style.display = 'none';
        previewImage.style.display = 'block';
    };
    
    // Handle image error
    previewImage.onerror = function() {
        imageLoadingSpinner.innerHTML = '<p style="color: #ff6b6b;">Failed to load image.</p>';
    };
    
    // Set up download button
    downloadBtn.onclick = function() {
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    // Close modal when clicking outside
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeImagePreview();
        }
    };
    
    // Handle escape key
    document.addEventListener('keydown', handleEscapeKey);
}

function closeImagePreview() {
    const modal = document.getElementById('imageModal');
    const previewImage = document.getElementById('previewImage');
    
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    
    if (previewImage) {
        previewImage.src = ''; // Clear image to stop loading
    }
    
    // Remove escape key listener
    document.removeEventListener('keydown', handleEscapeKey);
}

// Animated Counter Function
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    // Check if counters are in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return (
            rect.top <= windowHeight * 0.8 && // Trigger when 80% visible
            rect.bottom >= windowHeight * 0.2  // And not completely past
        );
    }
    
    function startAnimation() {
        if (hasAnimated) return;
        
        const statsSection = document.querySelector('.work-stats');
        if (!statsSection || !isInViewport(statsSection)) return;
        
        hasAnimated = true;
        
        // Animation sequence: 500+ first, then 100+, then 5+, then 50+
        const sequences = [
            { element: counters[0], target: 500, delay: 0 },      // Projects
            { element: counters[1], target: 100, delay: 800 },   // Innovative Solutions
            { element: counters[2], target: 5, delay: 1600 },    // Years Experience
            { element: counters[3], target: 50, delay: 2400 }    // Team Members
        ];

        sequences.forEach(({ element, target, delay }) => {
            setTimeout(() => {
                animateCounter(element, target);
            }, delay);
        });
    }
    
    function animateCounter(element, target) {
        element.classList.add('animating');
        let current = 0;
        const duration = 1000; // 1 second animation
        const steps = 50;
        const increment = target / steps;
        const stepDuration = duration / steps;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
                element.classList.remove('animating');
            }
            element.textContent = Math.floor(current) + '+';
        }, stepDuration);
    }
    
    // Check on scroll
    window.addEventListener('scroll', startAnimation);
    // Check on load
    window.addEventListener('load', startAnimation);
    // Check immediately if already loaded
    if (document.readyState === 'complete') {
        startAnimation();
    }
}

// Initialize counter animation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add a small delay to ensure the stats section is rendered
    setTimeout(animateCounters, 100);
});

// Team Carousel Functionality
// NOTE: This code is now handled in aboutus.html after backend data loads
// Keeping this commented out to avoid conflicts with backend-driven carousel
/*
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.team-carousel-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    if (!track || !prevBtn || !nextBtn || !dotsContainer) return;
    
    const cards = Array.from(track.children);
    const totalCards = cards.length;
    let currentIndex = 0;
    let cardsPerView = 4;
    let dots = [];
    
    // Function to determine cards per view based on screen size
    function updateCardsPerView() {
        if (window.innerWidth <= 768) {
            cardsPerView = 1;
        } else if (window.innerWidth <= 1024) {
            cardsPerView = 2;
        } else {
            cardsPerView = 4;
        }
    }
    
    // Calculate the maximum index we can scroll to
    function getMaxIndex() {
        return Math.max(0, totalCards - cardsPerView);
    }
    
    // Generate dots dynamically based on number of slides
    function generateDots() {
        dotsContainer.innerHTML = '';
        dots = [];
        const maxIndex = getMaxIndex();
        const numDots = maxIndex + 1;
        
        for (let i = 0; i <= maxIndex; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot';
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('data-slide', i);
            dotsContainer.appendChild(dot);
            dots.push(dot);
            
            // Add click event
            dot.addEventListener('click', function() {
                currentIndex = i;
                updateCarousel();
            });
        }
    }
    
    // Update carousel position
    function updateCarousel(animate = true) {
        const cardWidth = cards[0].offsetWidth;
        const gap = 30;
        const offset = currentIndex * (cardWidth + gap);
        
        track.style.transition = animate ? 'transform 0.5s ease' : 'none';
        track.style.transform = `translateX(-${offset}px)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        // Update button states
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
        nextBtn.style.opacity = currentIndex >= getMaxIndex() ? '0.5' : '1';
        nextBtn.style.cursor = currentIndex >= getMaxIndex() ? 'not-allowed' : 'pointer';
    }
    
    // Previous button click
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    // Next button click
    nextBtn.addEventListener('click', function() {
        const maxIndex = getMaxIndex();
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Dot click events are added in generateDots function
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const oldCardsPerView = cardsPerView;
            updateCardsPerView();
            
            // If cards per view changed, regenerate dots and adjust current index
            if (oldCardsPerView !== cardsPerView) {
                const maxIndex = getMaxIndex();
                currentIndex = Math.min(currentIndex, maxIndex);
                generateDots();
                updateCarousel(false);
            } else {
                updateCarousel(false);
            }
        }, 250);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });
    
    // Touch/Swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    track.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next
                nextBtn.click();
            } else {
                // Swipe right - previous
                prevBtn.click();
            }
        }
    }
    
    // Auto-play functionality (optional - can be removed if not wanted)
    let autoPlayInterval;
    const autoPlayDelay = 5000; // 5 seconds
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(function() {
            const maxIndex = getMaxIndex();
            if (currentIndex < maxIndex) {
                currentIndex++;
            } else {
                currentIndex = 0; // Loop back to start
            }
            updateCarousel();
        }, autoPlayDelay);
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    // Start auto-play
    startAutoPlay();
    
    // Stop auto-play on user interaction
    prevBtn.addEventListener('click', stopAutoPlay);
    nextBtn.addEventListener('click', stopAutoPlay);
    track.addEventListener('touchstart', stopAutoPlay);
    
    // Initialize
    updateCardsPerView();
    generateDots();
    updateCarousel(false);
});
*/

