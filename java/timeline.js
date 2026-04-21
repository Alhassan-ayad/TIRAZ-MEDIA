// Animated Timeline JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineDots = document.querySelectorAll('.timeline-dot');
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add pulse animation to corresponding dot
                const itemIndex = Array.from(timelineItems).indexOf(entry.target);
                if (timelineDots[itemIndex]) {
                    timelineDots[itemIndex].style.animationPlayState = 'running';
                }
            }
        });
    }, observerOptions);
    
    // Observe all timeline items
    timelineItems.forEach(item => {
        observer.observe(item);
    });
    
    // Add hover effects with dynamic scaling
    timelineItems.forEach((item, index) => {
        const content = item.querySelector('.timeline-content');
        
        content.addEventListener('mouseenter', () => {
            // Pause auto-movement animation on hover
            content.style.animationPlayState = 'paused';
            
            // Add dynamic glow effect
            content.style.boxShadow = `
                0 30px 60px rgba(0, 0, 0, 0.25),
                0 15px 35px rgba(242, 102, 34, 0.3),
                0 0 40px rgba(${getItemColor(index)}, 0.4)
            `;
        });
        
        content.addEventListener('mouseleave', () => {
            // Resume auto-movement animation
            content.style.animationPlayState = 'running';
            
            // Reset shadow
            content.style.boxShadow = '';
        });
    });
    
    // Auto-scroll functionality - DISABLED
    /*
    let currentIndex = 0;
    const autoScrollInterval = 8000; // 8 seconds
    
    function autoScrollToNext() {
        if (currentIndex < timelineItems.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        
        const targetItem = timelineItems[currentIndex];
        if (targetItem) {
            targetItem.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
            // Add emphasis animation
            const content = targetItem.querySelector('.timeline-content');
            content.classList.add('emphasized');
            setTimeout(() => {
                content.classList.remove('emphasized');
            }, 2000);
        }
    }
    
    // Start auto-scroll (can be paused on user interaction)
    let autoScrollTimer = setInterval(autoScrollToNext, autoScrollInterval);
    
    // Pause auto-scroll on user interaction
    document.addEventListener('scroll', () => {
        clearInterval(autoScrollTimer);
        // Resume after 10 seconds of no interaction
        setTimeout(() => {
            autoScrollTimer = setInterval(autoScrollToNext, autoScrollInterval);
        }, 10000);
    });
    */
    
    // Helper function to get item-specific colors
    function getItemColor(index) {
        const colors = [
            '242, 102, 34',  // Orange
            '33, 150, 243',  // Blue
            '76, 175, 80',   // Green
            '156, 39, 176',  // Purple
            '255, 152, 0'    // Amber
        ];
        return colors[index] || colors[0];
    }
    
    // Add parallax effect to timeline line
    window.addEventListener('scroll', () => {
        const timelineLine = document.querySelector('.timeline::before');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        if (timelineLine) {
            document.querySelector('.timeline').style.setProperty('--scroll-offset', rate + 'px');
        }
    });
});

// CSS class for emphasis animation
const style = document.createElement('style');
style.textContent = `
    .timeline-content.emphasized {
        animation: emphasize 2s ease-in-out;
    }
    
    @keyframes emphasize {
        0%, 100% {
            transform: scale(1);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        50% {
            transform: scale(1.05);
            box-shadow: 0 30px 60px rgba(242, 102, 34, 0.4);
        }
    }
    
    .timeline {
        transform: translateY(var(--scroll-offset, 0));
    }
`;
document.head.appendChild(style);
