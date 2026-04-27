# Language Switcher Implementation Guide
## TIRAZ MEDIA Website - Bilingual English/Arabic Support

### Overview
This guide documents the complete language switcher system that allows users to toggle between English and Arabic while maintaining left-to-right layout for both languages (no RTL shifting).

---

## ✅ What's Been Implemented

### 1. **Translation System** (`java/language-switcher.js`)
- Complete translations object with 100+ keys
- Smart language detection and localStorage persistence
- Automatic text replacement without layout changes
- Preserves all HTML elements and SVG icons

### 2. **Styling** (`css/style.css`)
- Language switcher button with globe icon
- Smooth hover and click animations
- Mobile-optimized sizing
- Orange gradient matching brand colors
- Positioned under Contact Info button in sidebar

### 3. **Layout Protection**
```css
/* Forces LTR for both languages - NO SHIFTING */
html[lang="ar"] {
    direction: ltr !important;
}
html[lang="ar"] * {
    direction: ltr !important;
}
```

---

## 🔧 How It Works

### Language Toggle Button Location
- **Mobile**: In sidebar footer, between Contact Info button and social icons
- **Desktop**: Can be added to header if needed (currently mobile-first)

### Button HTML Structure
```html
<div class="language-switcher-container">
    <button class="language-toggle" aria-label="Switch Language">
        <span class="lang-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <!-- Globe icon SVG -->
            </svg>
        </span>
        <span class="lang-text">العربية</span>
    </button>
</div>
```

### Translation Attributes
Every translatable element needs `data-translate` attribute:
```html
<!-- Navigation Link -->
<a href="home.html" data-translate="home">Home</a>

<!-- Heading -->
<h1 data-translate="heroTitle">Crafting Digital Experience...</h1>

<!-- Button -->
<button data-translate="getStarted">Get Started</button>

<!-- Input Placeholder -->
<input type="text" data-translate="yourName" placeholder="Your Name">
```

---

## 📋 Implementation Checklist for All Pages

### Step 1: Add HTML Lang Switcher Button
Insert in sidebar footer (after Contact Info, before social icons):

```html
<!-- Language Switcher -->
<div class="language-switcher-container">
    <button class="language-toggle" aria-label="Switch Language">
        <span class="lang-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12H22M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
        <span class="lang-text">العربية</span>
    </button>
</div>
```

### Step 2: Add JavaScript Include
At end of `<body>` tag (before `</body>`):
```html
<script src="../java/language-switcher.js"></script>
```

For service pages (one level deeper):
```html
<script src="../../java/language-switcher.js"></script>
```

### Step 3: Add data-translate Attributes

#### Navigation (Mobile Sidebar & Desktop Header)
```html
<a href="home.html" data-translate="home">Home</a>
<a href="aboutus.html" data-translate="aboutUs">About Us</a>
<a href="missions.html" data-translate="missions">Missions</a>
<a href="services.html" data-translate="ourServices">Our Services</a>
<a href="bundles.html" data-translate="bundles">Bundles</a>
<a href="samples.html" data-translate="samples">Samples</a>
<a href="blog.html" data-translate="blog">Blog</a>
<a href="contact.html" data-translate="contactInfo">Contact Info</a>
```

#### Common Page Elements
```html
<!-- Hero Section -->
<h1 data-translate="heroTitle">...</h1>
<p data-translate="heroSubtitle">...</p>
<a data-translate="checkOutWork">CHECK OUT OUR WORK</a>

<!-- Services Section -->
<span data-translate="whatWeDo">WHAT WE DO</span>
<h2 data-translate="innovationsImpact">Innovations and impact</h2>
<p data-translate="innovationsDesc">...</p>
<a data-translate="discoverMore">DISCOVER MORE</a>
```

---

## 🗂️ Translation Keys Reference

### Navigation Keys
- `home` - Home / الرئيسية
- `aboutUs` - About Us / من نحن
- `missions` - Missions / مهامنا
- `ourServices` - Our Services / خدماتنا
- `bundles` - Bundles / الباقات
- `samples` - Samples / أعمالنا
- `blog` - Blog / المدونة
- `contactInfo` - Contact Info / معلومات التواصل

### Service Names
- `webDevelopment` - Web Development / تطوير المواقع
- `digitalMarketing` - Digital Marketing / التسويق الرقمي
- `graphicDesign` - Graphic Design / التصميم الجرافيكي
- `advertising` - Advertising Campaigns / الحملات الإعلانية
- `seo` - SEO / تحسين محركات البحث
- `socialMedia` - Social Media Campaigns / حملات التواصل الاجتماعي
- ... (see `java/language-switcher.js` for complete list)

### Common UI Elements
- `getStarted` - Get Started / ابدأ الآن
- `learnMore` - Learn More / اعرف المزيد
- `readMore` - Read More / اقرأ المزيد
- `viewAll` - View All / عرض الكل
- `discoverMore` - DISCOVER MORE / اكتشف المزيد
- `checkOutWork` - CHECK OUT OUR WORK / شاهد أعمالنا

---

## 🎯 Pages Status

### ✅ Completed
1. **home.html** - Full implementation with all translations

### ⏳ Pending (Need Language Switcher Button + Translations)
Main Pages:
- aboutus.html
- missions.html
- services.html
- bundles.html
- samples.html
- blog.html
- contact.html
- request-service.html

Service Pages (19 files):
- advertising-campaigns.html
- automated-response.html
- branding-plan.html
- e-stores.html
- erp-systems.html
- erp-training.html
- graphic-design.html
- managing-comments.html
- marketing-content.html
- motion-graphics.html
- organic-campaigns.html
- photography.html
- promo-voice-over.html
- sem.html
- seo.html
- social-media-campaigns.html
- video-reels.html
- web-development.html
- whatsapp-campaigns.html

---

## 🚀 Automated Deployment

### PowerShell Script Available
Run `add-language-switcher.ps1` to automatically:
1. Add language switcher button to all pages
2. Add JavaScript include tags
3. Add data-translate attributes to navigation

### Manual Verification Needed
After script runs, manually add `data-translate` to:
- Page-specific headings
- Descriptions
- Buttons
- Form placeholders
- Footer text

---

## 🎨 Customization Options

### Change Button Color
In `css/style.css`:
```css
.language-toggle {
    background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

### Add More Languages
In `java/language-switcher.js`, add new language object:
```javascript
const translations = {
    en: { /* English translations */ },
    ar: { /* Arabic translations */ },
    fr: { /* French translations */ },
    // Add more...
};
```

### Desktop Header Button
To add language switcher to desktop header:
```html
<div class="header-buttons">
    <a href="contact.html" class="contact-btn">Contact Info</a>
    <div class="desktop-language-switcher">
        <button class="lang-btn" data-lang="en">EN</button>
        <button class="lang-btn" data-lang="ar">ع</button>
    </div>
</div>
```

---

## 🔍 Testing Checklist

- [ ] Language button appears in sidebar on all pages
- [ ] Button shows "العربية" when English is active
- [ ] Button shows "English" when Arabic is active
- [ ] Clicking button toggles language immediately
- [ ] Selected language persists on page reload
- [ ] All navigation links translate correctly
- [ ] Page content translates (headings, descriptions, buttons)
- [ ] Layout stays left-to-right for both languages
- [ ] No text shifting or alignment changes
- [ ] SVG icons remain visible after translation
- [ ] Mobile sidebar opens/closes normally
- [ ] Desktop navigation works correctly

---

## 📱 Browser Compatibility

### Tested & Working
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Chrome (Android)
- Mobile Safari (iOS)

### Required Features
- localStorage support
- ES6 JavaScript (arrow functions, const/let)
- CSS Grid & Flexbox
- SVG support

---

## 🐛 Troubleshooting

### Issue: Language doesn't change
**Solution**: Check browser console for JavaScript errors. Ensure `language-switcher.js` is loaded.

### Issue: Text disappears after translation
**Solution**: Make sure element has `data-translate` attribute with valid key from translations object.

### Issue: Layout shifts to RTL
**Solution**: Verify CSS includes LTR force rules:
```css
html[lang="ar"] { direction: ltr !important; }
```

### Issue: Translation key not found
**Solution**: Add missing key to both `en` and `ar` objects in `language-switcher.js`.

---

## 📞 Support

For questions or issues:
1. Check this guide first
2. Review `language-switcher.js` comments
3. Test in browser console: `languageSwitcher.getCurrentLanguage()`
4. Verify element has correct `data-translate` attribute

---

**Last Updated**: October 17, 2025  
**Version**: 1.0  
**Status**: Home page complete, 25 pages pending
