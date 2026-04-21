// Blog Page JavaScript
// This file handles blog functionality and will be connected to backend API

// Configuration object for backend integration
const blogConfig = {
    apiEndpoint: 'https://alt-mate.com/api/posts',
    postsPerPage: 9
};

// Initialize blog page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Blog page initialized with backend integration');
    setupBlogCardInteractions();
});

// Load blog posts from backend (updated implementation)
async function loadBlogPosts() {
    try {
        const response = await fetch(blogConfig.apiEndpoint);
        const posts = await response.json();
        
        console.log('Blog posts loaded:', posts.length);
        return posts;
    } catch (error) {
        console.error('Error loading blog posts:', error);
        return [];
    }
}

// Load featured post from backend (template for future implementation)
async function loadFeaturedPost() {
    try {
        // Example API call structure:
        // const response = await fetch(`${blogConfig.apiEndpoint}/featured`);
        // const data = await response.json();
        // updateFeaturedPost(data);
        
        console.log('Featured post loaded (placeholder)');
    } catch (error) {
        console.error('Error loading featured post:', error);
    }
}

// Load category posts from backend (template for future implementation)
async function loadCategoryPosts(category = 'all', page = 1) {
    try {
        // Example API call structure:
        // const response = await fetch(`${blogConfig.apiEndpoint}/posts?category=${category}&page=${page}`);
        // const data = await response.json();
        // updateCategoryPosts(category, data);
        
        console.log(`Loading posts for category: ${category}, page: ${page}`);
    } catch (error) {
        console.error('Error loading category posts:', error);
    }
}

// Update featured post in DOM (for backend integration)
function updateFeaturedPost(data) {
    const featuredSection = document.querySelector('.featured-story');
    if (!featuredSection) return;

    // Update featured post attributes
    featuredSection.setAttribute('data-post-id', data.id);
    
    // Update dynamic content
    const dynamicElements = {
        'featured-image': data.image,
        'featured-category': data.category,
        'featured-date': data.date,
        'featured-read-time': data.readTime,
        'featured-title': data.title,
        'featured-excerpt': data.excerpt,
        'featured-link': data.link
    };

    Object.keys(dynamicElements).forEach(key => {
        const element = featuredSection.querySelector(`[data-dynamic="${key}"]`);
        if (element) {
            if (key === 'featured-image') {
                element.src = dynamicElements[key];
                element.alt = data.title;
            } else if (key === 'featured-link') {
                element.href = dynamicElements[key];
            } else {
                element.textContent = dynamicElements[key];
            }
        }
    });
}

// Update category posts in DOM (for backend integration)
function updateCategoryPosts(category, posts) {
    const categorySection = document.querySelector(`[data-category="${category}"]`);
    if (!categorySection) return;

    const blogGrid = categorySection.querySelector('.blog-grid');
    if (!blogGrid) return;

    // Clear existing posts
    blogGrid.innerHTML = '';

    // Add new posts
    posts.forEach(post => {
        const postCard = createBlogCard(post);
        blogGrid.appendChild(postCard);
    });
}

// Create blog card element (for backend integration)
function createBlogCard(post) {
    const article = document.createElement('article');
    article.className = 'blog-card';
    article.setAttribute('data-post-id', post.id);

    article.innerHTML = `
        <div class="blog-card-image">
            <img src="${post.image}" alt="${post.title}" data-dynamic="post-image">
            <span class="blog-card-category" data-dynamic="post-category">${post.category}</span>
        </div>
        <div class="blog-card-content">
            <div class="blog-card-meta">
                <span class="blog-card-date" data-dynamic="post-date">${post.date}</span>
                <span class="blog-card-read-time" data-dynamic="post-read-time">${post.readTime}</span>
            </div>
            <h3 class="blog-card-title" data-dynamic="post-title">${post.title}</h3>
            <p class="blog-card-excerpt" data-dynamic="post-excerpt">${post.excerpt}</p>
            <a href="${post.link}" class="blog-card-link" data-dynamic="post-link">Read More</a>
        </div>
    `;

    return article;
}

// Setup newsletter form submission
function setupNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (!email) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        try {
            // Example API call for newsletter subscription:
            // const response = await fetch(blogConfig.newsletterEndpoint, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ email: email })
            // });
            
            // if (response.ok) {
            //     showNotification('Successfully subscribed to newsletter!', 'success');
            //     emailInput.value = '';
            // } else {
            //     throw new Error('Subscription failed');
            // }

            // Placeholder success message
            console.log('Newsletter subscription:', email);
            showNotification('Successfully subscribed to newsletter!', 'success');
            emailInput.value = '';
            
        } catch (error) {
            console.error('Error subscribing to newsletter:', error);
            showNotification('Failed to subscribe. Please try again later.', 'error');
        }
    });
}

// Setup blog card interactions
function setupBlogCardInteractions() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on a link
            if (e.target.tagName === 'A') return;
            
            const link = card.querySelector('.blog-card-link');
            if (link) {
                window.location.href = link.href;
            }
        });

        // Add keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const link = card.querySelector('.blog-card-link');
                if (link) {
                    window.location.href = link.href;
                }
            }
        });
    });
}

// Setup category filters
function setupCategoryFilters() {
    const categoryLinks = document.querySelectorAll('[data-category-link]');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category-link');
            
            // Future: Navigate to category page or filter posts
            console.log('Filter by category:', category);
            
            // Example: window.location.href = `/blog/category/${category}`;
        });
    });
}

// Show notification (helper function)
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `blog-notification blog-notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Search functionality (for future implementation)
function setupBlogSearch() {
    const searchInput = document.getElementById('blogSearch');
    if (!searchInput) return;

    let searchTimeout;
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.trim();
        
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (query.length >= 3) {
                searchBlogPosts(query);
            }
        }, 300);
    });
}

// Search blog posts (template for backend integration)
async function searchBlogPosts(query) {
    try {
        // Example API call:
        // const response = await fetch(`${blogConfig.apiEndpoint}/search?q=${encodeURIComponent(query)}`);
        // const results = await response.json();
        // displaySearchResults(results);
        
        console.log('Searching for:', query);
    } catch (error) {
        console.error('Error searching blog posts:', error);
    }
}

// Pagination functionality (for future implementation)
function setupPagination() {
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            const page = parseInt(this.getAttribute('data-page'));
            const category = this.getAttribute('data-category') || 'all';
            
            loadCategoryPosts(category, page);
            
            // Scroll to top of category section
            const categorySection = document.querySelector(`[data-category="${category}"]`);
            if (categorySection) {
                categorySection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Load more posts (infinite scroll - for future implementation)
function setupInfiniteScroll() {
    let loading = false;
    let currentPage = 1;

    window.addEventListener('scroll', function() {
        if (loading) return;

        const scrollPosition = window.innerHeight + window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;

        if (scrollPosition >= pageHeight - 500) {
            loading = true;
            currentPage++;
            
            loadCategoryPosts('all', currentPage).then(() => {
                loading = false;
            });
        }
    });
}

// Blog post analytics (for future implementation)
function trackBlogPostView(postId) {
    // Example analytics tracking:
    // fetch(`${blogConfig.apiEndpoint}/analytics/view`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ postId: postId })
    // });
    
    console.log('Post view tracked:', postId);
}

// Export functions for use in other scripts
window.blogFunctions = {
    loadFeaturedPost,
    loadCategoryPosts,
    updateFeaturedPost,
    updateCategoryPosts,
    createBlogCard,
    showNotification,
    searchBlogPosts,
    trackBlogPostView
};

console.log('Blog JavaScript loaded - Connected to backend at:', blogConfig.apiEndpoint);
