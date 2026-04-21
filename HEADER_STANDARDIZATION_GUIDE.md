# Header Standardization Guide

## Standard Header Code for Main Pages

Copy this entire header code and use it to replace the header section in each page (from `<body>` to `</header>`):

```html
<body>
    <!-- Hamburger Menu Button (Mobile Only) -->
    <button class="hamburger-menu-btn" id="hamburgerBtn" aria-label="Open Menu">
        <img src="../images/hamburger-menu.png" alt="Menu" style="width: 28px; height: 28px;">
    </button>

    <!-- Mobile Sidebar Navigation -->
    <div class="mobile-sidebar" id="mobileSidebar">
        <div class="sidebar-header">
            <img src="../images/logo.svg" alt="ALT MATE Logo" style="height: 48px;">
            <button class="close-sidebar-btn" id="closeSidebarBtn" aria-label="Close Menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="#192f59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <nav class="sidebar-nav">
            <ul>
                <li>
                    <a href="home.html">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 10L10 3L17 10V17C17 17.5304 16.7893 18.0391 16.4142 18.4142C16.0391 18.7893 15.5304 19 15 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Home
                    </a>
                </li>
                <li>
                    <a href="aboutus.html">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2"/>
                            <path d="M10 6V10L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        About Us
                    </a>
                </li>
                <li>
                    <a href="missions.html">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2L12.5 7.5L18 8.5L14 13L15 18.5L10 15.5L5 18.5L6 13L2 8.5L7.5 7.5L10 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Missions
                    </a>
                </li>
                <li>
                    <a href="services.html">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2C10.5304 2 11.0391 2.21071 11.4142 2.58579C11.7893 2.96086 12 3.46957 12 4V16C12 16.5304 11.7893 17.0391 11.4142 17.4142C11.0391 17.7893 10.5304 18 10 18C9.46957 18 8.96086 17.7893 8.58579 17.4142C8.21071 17.0391 8 16.5304 8 16V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2Z" stroke="currentColor" stroke-width="2"/>
                        </svg>
                        Our Services
                    </a>
                </li>
                <li>
                    <a href="bundles.html">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4h4v4H4V4zm6 0h6v4h-6V4zM4 10h4v6H4v-6zm6 0h6v6h-6v-6z" stroke="currentColor" stroke-width="2"/>
                        </svg>
                        Bundles
                    </a>
                </li>
                <li>
                    <a href="samples.html">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="6" height="6" stroke="currentColor" stroke-width="2"/>
                            <rect x="11" y="3" width="6" height="6" stroke="currentColor" stroke-width="2"/>
                            <rect x="3" y="11" width="6" height="6" stroke="currentColor" stroke-width="2"/>
                            <rect x="11" y="11" width="6" height="6" stroke="currentColor" stroke-width="2"/>
                        </svg>
                        Samples
                    </a>
                </li>
                <li>
                    <a href="blog.html">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4h12v2H4V4zm0 5h12v2H4V9zm0 5h8v2H4v-2z" fill="currentColor"/>
                        </svg>
                        Blog
                    </a>
                </li>
            </ul>
        </nav>
        <div class="sidebar-footer">
            <a href="contact.html" class="sidebar-contact-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6.5A2 2 0 0 1 5 4.5h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7Zm1.75.75 5.25 3.5 5.25-3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Contact Info
            </a>
            <div class="sidebar-social-icons">
                <a href="https://www.facebook.com/share/1EiuaBL4qq/" target="_blank"><img src="../images/facebook-icon.png" alt="Facebook"></a>
                <a href="https://www.instagram.com/alt_mate_?igsh=MXYxZGkxaGFybWRyaA==" target="_blank"><img src="../images/instagram-icon.png" alt="Instagram"></a>
                <a href="https://www.linkedin.com/company/alt-mate-agency/" target="_blank"><img src="../images/linkedin-icon.png" alt="LinkedIn"></a>
            </div>
        </div>
    </div>

    <!-- Desktop Header (Hidden on Mobile) -->
    <header class="main-header">
        <div class="logo">
            <img src="../images/logo.svg" alt="ALT MATE Logo" style="height:54px;vertical-align:middle;">
        </div>
        <div class="header-right">
            <nav class="main-nav">
                <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="aboutus.html">About Us</a></li>
                    <li><a href="missions.html">Missions</a></li>
                    <li><a href="services.html">Our Services</a></li>
                    <li><a href="bundles.html">Bundles</a></li>
                    <li><a href="samples.html">Samples</a></li>
                    <li><a href="blog.html">Blog</a></li>
                </ul>
            </nav>
            <div class="header-buttons">
                <a href="contact.html" class="contact-btn">Contact Info</a>
            </div>
        </div>
    </header>
```

## For Service Pages (services/*.html)

Use this version with adjusted paths (`../` becomes `../../`):

```html
<body>
    <!-- Hamburger Menu Button (Mobile Only) -->
    <button class="hamburger-menu-btn" id="hamburgerBtn" aria-label="Open Menu">
        <img src="../../images/hamburger-menu.png" alt="Menu" style="width: 28px; height: 28px;">
    </button>

    <!-- Mobile Sidebar Navigation -->
    <div class="mobile-sidebar" id="mobileSidebar">
        <div class="sidebar-header">
            <img src="../../images/logo.svg" alt="ALT MATE Logo" style="height: 48px;">
            <button class="close-sidebar-btn" id="closeSidebarBtn" aria-label="Close Menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="#192f59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <nav class="sidebar-nav">
            <ul>
                <li>
                    <a href="../home.html">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 10L10 3L17 10V17C17 17.5304 16.7893 18.0391 16.4142 18.4142C16.0391 18.7893 15.5304 19 15 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Home
                    </a>
                </li>
                <li>
                    <a href="../aboutus.html">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2"/>
                            <path d="M10 6V10L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        About Us
                    </a>
                </li>
                <li>
                    <a href="../missions.html">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2L12.5 7.5L18 8.5L14 13L15 18.5L10 15.5L5 18.5L6 13L2 8.5L7.5 7.5L10 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Missions
                    </a>
                </li>
                <li>
                    <a href="../services.html">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2C10.5304 2 11.0391 2.21071 11.4142 2.58579C11.7893 2.96086 12 3.46957 12 4V16C12 16.5304 11.7893 17.0391 11.4142 17.4142C11.0391 17.7893 10.5304 18 10 18C9.46957 18 8.96086 17.7893 8.58579 17.4142C8.21071 17.0391 8 16.5304 8 16V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2Z" stroke="currentColor" stroke-width="2"/>
                        </svg>
                        Our Services
                    </a>
                </li>
                <li>
                    <a href="../bundles.html">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4h4v4H4V4zm6 0h6v4h-6V4zM4 10h4v6H4v-6zm6 0h6v6h-6v-6z" stroke="currentColor" stroke-width="2"/>
                        </svg>
                        Bundles
                    </a>
                </li>
                <li>
                    <a href="../samples.html">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="6" height="6" stroke="currentColor" stroke-width="2"/>
                            <rect x="11" y="3" width="6" height="6" stroke="currentColor" stroke-width="2"/>
                            <rect x="3" y="11" width="6" height="6" stroke="currentColor" stroke-width="2"/>
                            <rect x="11" y="11" width="6" height="6" stroke="currentColor" stroke-width="2"/>
                        </svg>
                        Samples
                    </a>
                </li>
                <li>
                    <a href="../blog.html">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4h12v2H4V4zm0 5h12v2H4V9zm0 5h8v2H4v-2z" fill="currentColor"/>
                        </svg>
                        Blog
                    </a>
                </li>
            </ul>
        </nav>
        <div class="sidebar-footer">
            <a href="../contact.html" class="sidebar-contact-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6.5A2 2 0 0 1 5 4.5h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7Zm1.75.75 5.25 3.5 5.25-3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Contact Info
            </a>
            <div class="sidebar-social-icons">
                <a href="https://www.facebook.com/share/1EiuaBL4qq/" target="_blank"><img src="../../images/facebook-icon.png" alt="Facebook"></a>
                <a href="https://www.instagram.com/alt_mate_?igsh=MXYxZGkxaGFybWRyaA==" target="_blank"><img src="../../images/instagram-icon.png" alt="Instagram"></a>
                <a href="https://www.linkedin.com/company/alt-mate-agency/" target="_blank"><img src="../../images/linkedin-icon.png" alt="LinkedIn"></a>
            </div>
        </div>
    </div>

    <!-- Desktop Header (Hidden on Mobile) -->
    <header class="main-header">
        <div class="logo">
            <img src="../../images/logo.svg" alt="ALT MATE Logo" style="height:54px;vertical-align:middle;">
        </div>
        <div class="header-right">
            <nav class="main-nav">
                <ul>
                    <li><a href="../home.html">Home</a></li>
                    <li><a href="../aboutus.html">About Us</a></li>
                    <li><a href="../missions.html">Missions</a></li>
                    <li><a href="../services.html">Our Services</a></li>
                    <li><a href="../bundles.html">Bundles</a></li>
                    <li><a href="../samples.html">Samples</a></li>
                    <li><a href="../blog.html">Blog</a></li>
                </ul>
            </nav>
            <div class="header-buttons">
                <a href="../contact.html" class="contact-btn">Contact Info</a>
            </div>
        </div>
    </header>
```

## Pages to Update

### Main Pages (7 files):
- [ ] aboutus.html
- [ ] missions.html
- [ ] services.html
- [ ] bundles.html
- [ ] samples.html
- [ ] contact.html
- [ ] request-service.html

### Service Pages (19 files):
- [ ] services/advertising-campaigns.html
- [ ] services/automated-response.html
- [ ] services/branding-plan.html
- [ ] services/e-stores.html
- [ ] services/erp-systems.html
- [ ] services/erp-training.html
- [ ] services/graphic-design.html
- [ ] services/managing-comments.html
- [ ] services/marketing-content.html
- [ ] services/motion-graphics.html
- [ ] services/organic-campaigns.html
- [ ] services/photography.html
- [ ] services/promo-voice-over.html
- [ ] services/sem.html
- [ ] services/seo.html
- [ ] services/social-media-campaigns.html
- [ ] services/video-reels.html
- [ ] services/web-development.html
- [ ] services/whatsapp-campaigns.html

## Quick Instructions

1. Open the file in VS Code
2. Find the `<body>` tag
3. Select from `<body>` to `</header>` (include the closing header tag)
4. Replace with the appropriate standard header code above
5. Add `class="active"` to the appropriate nav link for that page
6. Save the file

## Using VS Code Find & Replace

You can use VS Code's multi-file find and replace:

1. Press `Ctrl+Shift+H` to open Find and Replace
2. Click the "Use Regular Expression" button (.*) 
3. Find what: `<body>[\s\S]*?</header>`
4. Replace with: [paste the standard header]
5. Use "Replace" button one file at a time to review changes

---

**Total Files**: 26 pages
**Already Done**: home.html, blog.html
**Remaining**: 24 pages
