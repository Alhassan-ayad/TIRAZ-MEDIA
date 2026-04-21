# Script to update service page headers
$servicePagesPath = "D:\ALT MATE\ALT MATE before backend\ALT-MATE-WEBSITE-PROJECT-\html\services\"

$filesToUpdate = @(
    "advertising-campaigns.html",
    "automated-response.html",
    "branding-plan.html",
    "e-stores.html",
    "erp-systems.html",
    "erp-training.html",
    "managing-comments.html",
    "marketing-content.html",
    "organic-campaigns.html",
    "promo-voice-over.html",
    "social-media-campaigns.html",
    "whatsapp-campaigns.html"
)

Write-Host "Starting service pages header updates..." -ForegroundColor Cyan

foreach ($fileName in $filesToUpdate) {
    $filePath = Join-Path $servicePagesPath $fileName
    
    if (Test-Path $filePath) {
        Write-Host "`nProcessing: $fileName" -ForegroundColor Yellow
        
        $content = Get-Content $filePath -Raw -Encoding UTF8
        
        # 1. Update lang attribute
        $content = $content -replace '<html lang="en">', '<html lang="ar">'
        Write-Host "  - Updated lang attribute" -ForegroundColor Green
        
        # 2. Add FOUC prevention if not present
        if ($content -notmatch 'localStorage\.getItem') {
            $oldHead = '<link rel="stylesheet" href="../../css/style.css">'
            $newHead = @'
<link rel="stylesheet" href="../../css/style.css">
    <script>
        (function() {
            const savedLang = localStorage.getItem('language') || 'ar';
            document.documentElement.lang = savedLang;
            document.documentElement.style.visibility = 'hidden';
        })();
    </script>
    <style>
        html.lang-ready { visibility: visible !important; }
    </style>
'@
            $content = $content -replace [regex]::Escape($oldHead), $newHead
            Write-Host "  - Added FOUC prevention script" -ForegroundColor Green
        }
        
        # 3. Add language switcher to desktop header if not present
        if ($content -notmatch 'desktop-language-switcher') {
            $oldHeaderStart = '        <div class="header-right">'
            $newHeaderStart = @'
        <div class="header-right">
            <div class="desktop-language-switcher">
                <button class="lang-btn" data-lang="en">EN</button>
                <button class="lang-btn active" data-lang="ar">ع</button>
            </div>
'@
            $content = $content -replace [regex]::Escape($oldHeaderStart), $newHeaderStart
            Write-Host "  - Added language switcher to header" -ForegroundColor Green
        }
        
        # 4. Add data-translate attributes to navigation
        $content = $content -replace '<li><a href="\.\./home\.html">Home</a></li>', '<li><a href="../home.html" data-translate="home">Home</a></li>'
        $content = $content -replace '<li><a href="\.\./aboutus\.html">About Us</a></li>', '<li><a href="../aboutus.html" data-translate="aboutUs">About Us</a></li>'
        $content = $content -replace '<li><a href="\.\./missions\.html">Missions</a></li>', '<li><a href="../missions.html" data-translate="missions">Missions</a></li>'
        $content = $content -replace '<li><a href="\.\./services\.html" class="active">Our Services</a></li>', '<li><a href="../services.html" class="active" data-translate="ourServices">Our Services</a></li>'
        $content = $content -replace '<li><a href="\.\./bundles\.html">Bundles</a></li>', '<li><a href="../bundles.html" data-translate="bundles">Bundles</a></li>'
        $content = $content -replace '<li><a href="\.\./samples\.html">Samples</a></li>', '<li><a href="../samples.html" data-translate="samples">Samples</a></li>'
        $content = $content -replace '<li><a href="\.\./blog\.html">Blog</a></li>', '<li><a href="../blog.html" data-translate="blog">Blog</a></li>'
        $content = $content -replace '<a href="\.\./contact\.html" class="contact-btn">Contact Info</a>', '<a href="../contact.html" class="contact-btn" data-translate="contactInfo">Contact Info</a>'
        Write-Host "  - Added data-translate attributes" -ForegroundColor Green
        
        # 5. Add language-switcher.js if not present
        if ($content -notmatch 'language-switcher\.js') {
            $content = $content -replace '    <script src="../../java/main.js"></script>', "    <script src=`"../../java/language-switcher.js`"></script>`n    <script src=`"../../java/main.js`"></script>"
            Write-Host "  - Added language-switcher.js script" -ForegroundColor Green
        }
        
        $content | Set-Content $filePath -Encoding UTF8 -NoNewline
        Write-Host "  - Saved successfully" -ForegroundColor Green
    }
}

Write-Host "`nAll service pages updated!" -ForegroundColor Green
