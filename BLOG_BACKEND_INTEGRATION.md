# Blog Page Backend Integration Guide

## Overview
This document provides comprehensive instructions for integrating the blog page with a backend system and dashboard.

## File Structure
```
html/
  └── blog.html          # Main blog page
css/
  └── blog.css           # Blog styling
java/
  └── blog.js            # Blog functionality
images/
  └── blog/              # Blog images directory
```

## Data Structure

### Blog Post Object
```json
{
  "id": "unique-post-id",
  "title": "Post Title",
  "excerpt": "Brief description of the post...",
  "content": "Full HTML content of the post",
  "category": "Marketing",
  "categorySlug": "marketing",
  "author": {
    "name": "Author Name",
    "avatar": "author-avatar-url",
    "bio": "Author bio"
  },
  "date": "Oct 17, 2025",
  "dateISO": "2025-10-17T00:00:00Z",
  "readTime": "5 min read",
  "image": "featured-image-url",
  "imageThumbnail": "thumbnail-url",
  "tags": ["marketing", "digital", "trends"],
  "featured": false,
  "published": true,
  "views": 0,
  "likes": 0,
  "slug": "post-url-slug",
  "seo": {
    "metaTitle": "SEO Title",
    "metaDescription": "SEO Description",
    "keywords": ["keyword1", "keyword2"]
  }
}
```

### Category Object
```json
{
  "id": "category-id",
  "name": "Marketing",
  "slug": "marketing",
  "description": "Category description",
  "icon": "category-icon-url",
  "color": "#ff8800",
  "postCount": 25
}
```

## API Endpoints Required

### 1. Get Featured Post
```
GET /api/blog/featured
Response: Single blog post object
```

### 2. Get All Posts
```
GET /api/blog/posts?category={category}&page={page}&limit={limit}
Parameters:
  - category: string (optional) - Filter by category slug
  - page: number (default: 1) - Page number
  - limit: number (default: 9) - Posts per page
  - sort: string (optional) - Sort by (date, views, likes)
Response: { posts: [], totalPages: number, currentPage: number }
```

### 3. Get Single Post
```
GET /api/blog/posts/{slug}
Response: Single blog post object with full content
```

### 4. Get Categories
```
GET /api/blog/categories
Response: Array of category objects
```

### 5. Get Posts by Category
```
GET /api/blog/categories/{slug}/posts?page={page}&limit={limit}
Response: { posts: [], category: {}, totalPages: number }
```

### 6. Search Posts
```
GET /api/blog/search?q={query}&category={category}
Parameters:
  - q: string - Search query
  - category: string (optional) - Filter by category
Response: Array of matching blog posts
```

### 7. Newsletter Subscription
```
POST /api/newsletter/subscribe
Body: { "email": "user@example.com" }
Response: { "success": true, "message": "Subscribed successfully" }
```

### 8. Track Post View
```
POST /api/blog/analytics/view
Body: { "postId": "post-id" }
Response: { "success": true }
```

### 9. Like Post
```
POST /api/blog/posts/{id}/like
Response: { "success": true, "likes": number }
```

## Dashboard Features Required

### 1. Post Management
- Create new blog posts
- Edit existing posts
- Delete posts
- Publish/unpublish posts
- Set featured post
- Upload images
- Rich text editor for content
- SEO settings
- Schedule posts

### 2. Category Management
- Create/edit/delete categories
- Assign colors and icons
- Reorder categories
- View posts per category

### 3. Analytics Dashboard
- Total posts
- Total views
- Most viewed posts
- Posts by category
- Newsletter subscribers
- Popular tags
- Traffic sources
- Engagement metrics

### 4. Media Library
- Upload images
- Organize by folders
- Image optimization
- Alt text management
- Search and filter

### 5. Newsletter Management
- View subscribers
- Export subscriber list
- Send newsletters
- Newsletter templates
- Schedule newsletters
- Unsubscribe management

### 6. Comments (Optional)
- Moderate comments
- Approve/reject
- Reply to comments
- Spam filtering

## Frontend Integration Steps

### Step 1: Configure API Endpoint
Update `java/blog.js` line 5:
```javascript
const blogConfig = {
    apiEndpoint: 'https://your-backend-url.com/api/blog',
    postsPerPage: 9,
    categoriesEndpoint: 'https://your-backend-url.com/api/categories',
    featuredEndpoint: 'https://your-backend-url.com/api/blog/featured',
    newsletterEndpoint: 'https://your-backend-url.com/api/newsletter'
};
```

### Step 2: Implement API Calls
Uncomment and implement the API call functions in `blog.js`:
- `loadFeaturedPost()`
- `loadCategoryPosts()`
- Newsletter form submission
- Search functionality
- Pagination

### Step 3: Dynamic Content Rendering
All dynamic elements in the HTML are marked with `data-dynamic` attributes:
- `data-post-id`: Unique post identifier
- `data-category`: Category identifier
- `data-dynamic`: Content to be updated dynamically

Example:
```html
<h3 class="blog-card-title" data-dynamic="post-title">Title Here</h3>
```

### Step 4: Image Upload Configuration
Create the following image directories:
```
images/blog/
  ├── featured/          # Featured post images
  ├── marketing/         # Marketing category images
  ├── business/          # Business category images
  ├── development/       # Development category images
  ├── design/            # Design category images
  └── thumbnails/        # Thumbnail images
```

## Database Schema Suggestions

### Posts Table
```sql
CREATE TABLE blog_posts (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  slug VARCHAR(500) UNIQUE NOT NULL,
  excerpt TEXT,
  content LONGTEXT,
  category_id VARCHAR(255),
  author_id VARCHAR(255),
  featured_image VARCHAR(500),
  thumbnail_image VARCHAR(500),
  read_time VARCHAR(50),
  featured BOOLEAN DEFAULT FALSE,
  published BOOLEAN DEFAULT FALSE,
  views INT DEFAULT 0,
  likes INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  published_at TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id),
  FOREIGN KEY (author_id) REFERENCES users(id)
);
```

### Categories Table
```sql
CREATE TABLE categories (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  icon VARCHAR(500),
  color VARCHAR(50),
  order_index INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Newsletter Subscribers Table
```sql
CREATE TABLE newsletter_subscribers (
  id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  active BOOLEAN DEFAULT TRUE,
  unsubscribe_token VARCHAR(255)
);
```

### Post Views Table (Analytics)
```sql
CREATE TABLE post_views (
  id VARCHAR(255) PRIMARY KEY,
  post_id VARCHAR(255),
  viewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ip_address VARCHAR(50),
  user_agent TEXT,
  FOREIGN KEY (post_id) REFERENCES blog_posts(id)
);
```

### Tags Table (Optional)
```sql
CREATE TABLE tags (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE post_tags (
  post_id VARCHAR(255),
  tag_id VARCHAR(255),
  PRIMARY KEY (post_id, tag_id),
  FOREIGN KEY (post_id) REFERENCES blog_posts(id),
  FOREIGN KEY (tag_id) REFERENCES tags(id)
);
```

## SEO Considerations

### Meta Tags
Add to each blog post page:
```html
<meta name="description" content="Post description">
<meta name="keywords" content="keyword1, keyword2, keyword3">
<meta property="og:title" content="Post Title">
<meta property="og:description" content="Post description">
<meta property="og:image" content="Featured image URL">
<meta property="og:url" content="Post URL">
<meta name="twitter:card" content="summary_large_image">
```

### Structured Data (JSON-LD)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Post Title",
  "image": "Featured image URL",
  "datePublished": "2025-10-17",
  "dateModified": "2025-10-17",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "TIRAZ MEDIA",
    "logo": {
      "@type": "ImageObject",
      "url": "Logo URL"
    }
  },
  "description": "Post description"
}
</script>
```

## Security Considerations

1. **Input Validation**: Sanitize all user inputs (newsletter emails, search queries)
2. **SQL Injection Prevention**: Use parameterized queries
3. **XSS Prevention**: Escape HTML in user-generated content
4. **CSRF Protection**: Implement CSRF tokens for forms
5. **Rate Limiting**: Limit API requests to prevent abuse
6. **Authentication**: Secure dashboard with proper authentication
7. **Authorization**: Role-based access control for dashboard

## Performance Optimization

1. **Image Optimization**: 
   - Compress images before upload
   - Use WebP format
   - Implement lazy loading
   - Generate thumbnails automatically

2. **Caching**:
   - Cache blog posts for 15 minutes
   - Cache categories indefinitely (update on change)
   - Use CDN for images

3. **Database Indexing**:
   - Index slug, category_id, published, featured
   - Full-text search index on title and content

4. **Pagination**:
   - Implement cursor-based pagination for better performance
   - Limit results per page to 9-12 posts

## Testing Checklist

- [ ] Featured post loads correctly
- [ ] Category posts display properly
- [ ] Pagination works
- [ ] Search functionality
- [ ] Newsletter subscription
- [ ] Responsive design on all devices
- [ ] Image loading and fallbacks
- [ ] Error handling
- [ ] Loading states
- [ ] Analytics tracking
- [ ] SEO meta tags
- [ ] Social sharing
- [ ] Accessibility (ARIA labels, keyboard navigation)

## Example Backend Implementation (Node.js/Express)

```javascript
// Example blog posts endpoint
app.get('/api/blog/posts', async (req, res) => {
  try {
    const { category, page = 1, limit = 9 } = req.query;
    const offset = (page - 1) * limit;

    let query = 'SELECT * FROM blog_posts WHERE published = TRUE';
    const params = [];

    if (category) {
      query += ' AND category_id = (SELECT id FROM categories WHERE slug = ?)';
      params.push(category);
    }

    query += ' ORDER BY published_at DESC LIMIT ? OFFSET ?';
    params.push(parseInt(limit), offset);

    const posts = await db.query(query, params);
    
    const countQuery = category 
      ? 'SELECT COUNT(*) as total FROM blog_posts WHERE published = TRUE AND category_id = (SELECT id FROM categories WHERE slug = ?)'
      : 'SELECT COUNT(*) as total FROM blog_posts WHERE published = TRUE';
    
    const [{ total }] = await db.query(countQuery, category ? [category] : []);
    
    res.json({
      posts,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page)
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});
```

## Next Steps

1. Set up backend server and database
2. Create API endpoints as documented
3. Build dashboard interface
4. Implement authentication system
5. Configure image upload system
6. Test all functionality
7. Deploy to production
8. Set up monitoring and analytics

## Support

For questions or issues during integration, refer to:
- Frontend code comments in `blog.js`
- HTML data attributes in `blog.html`
- CSS classes in `blog.css`

---

**Last Updated**: October 17, 2025
**Version**: 1.0
**Status**: Ready for Backend Integration
