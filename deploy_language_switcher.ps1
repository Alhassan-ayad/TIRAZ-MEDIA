# PowerShell script to add language switcher to all HTML pages
# This script updates HTML files with language switcher components

$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$PSDefaultParameterValues['*:Encoding'] = 'utf8'

# Define the FOUC prevention script to inject into <head>
$fouc Prevention = @'
    <!-- Prevent FOUC (Flash of Unstyled Content) by setting language before page renders -->
    <script>
        // This runs immediately before the page renders
        (function() {
            const savedLang = localStorage.getItem('language') || 'ar';
            document.documentElement.lang = savedLang;
            // Hide body until translations are applied
            document.documentElement.style.visibility = 'hidden';
        })();
    </script>
    <style>
        /* Ensure body is visible after JS loads */
        html.lang-ready {
            visibility: visible !important;
        }
    </style>
</head>
'@

# Define desktop language switcher HTML
$desktopSwitcher = @'
            <!-- Language Switcher (Next to Home) -->
            <div class="desktop-language-switcher">
                <button class="lang-btn" data-lang="en">EN</button>
                <button class="lang-btn active" data-lang="ar">ع</button>
            </div>
            
            <nav class="main-nav">
'@

# Define mobile language switcher HTML
$mobileSwitcher = @'
                <!-- Language Switcher Toggle Button -->
                <li class="language-toggle">
                    <button id="languageToggleBtn" class="language-toggle-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="2"/>
                        </svg>
                        <span data-translate="language">العربية</span>
                    </button>
                    <div class="language-switcher-container">
                        <button class="lang-option" data-lang="en">English</button>
                        <button class="lang-option" data-lang="ar">العربية</button>
                    </div>
                </li>
                
                <li>
'@

Write-Host "Language Switcher Deployment Script" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# List of main pages to update (relative to html folder)
$mainPages = @(
    "services.html",
    "bundles.html", 
    "samples.html",
    "contact.html",
    "request-service.html"
)

# List of service pages (in services subfolder)
$servicePages = @(
    "services/web-development.html",
    "services/graphic-design.html",
    "services/video-reels.html",
    "services/photography.html",
    "services/motion-graphics.html",
    "services/seo.html",
    "services/sem.html",
    "services/social-media-campaigns.html",
    "services/advertising-campaigns.html",
    "services/organic-campaigns.html",
    "services/whatsapp-campaigns.html",
    "services/automated-response.html",
    "services/managing-comments.html",
    "services/marketing-content.html",
    "services/promo-voice-over.html",
    "services/branding-plan.html",
    "services/e-stores.html",
    "services/erp-systems.html",
    "services/erp-training.html"
)

function Update-HTMLFile {
    param(
        [string]$FilePath,
        [string]$ScriptPath = "../java/language-switcher.js"
    )
    
    if (-not (Test-Path $FilePath)) {
        Write-Host "  [SKIP] File not found: $FilePath" -ForegroundColor Yellow
        return $false
    }
    
    $content = Get-Content $FilePath -Raw -Encoding UTF8
    $originalContent = $content
    $changed = $false
    
    # 1. Change html lang from "en" to "ar"
    if ($content -match '<html lang="en">') {
        $content = $content -replace '<html lang="en">', '<html lang="ar">'
        $changed = $true
    }
    
    # 2. Add FOUC prevention script before </head> if not already present
    if ($content -notmatch 'localStorage\.getItem\(' -and $content -match '</head>') {
        $content = $content -replace '</head>', $foucPrevention
        $changed = $true
    }
    
    # 3. Add desktop language switcher before <nav class="main-nav"> if not present
    if ($content -notmatch 'desktop-language-switcher' -and $content -match '<nav class="main-nav">') {
        $content = $content -replace '<nav class="main-nav">', $desktopSwitcher
        $changed = $true
    }
    
    # 4. Add data-translate attributes to navigation links if not present
    if ($content -notmatch 'data-translate="home"') {
        $content = $content -replace '(<li><a href="home\.html"[^>]*>)([^<]*)(</a>)', '$1<span data-translate="home">$2</span>$3'
        $content = $content -replace '(<li><a href="aboutus\.html"[^>]*>)([^<]*)(</a>)', '$1<span data-translate="aboutUs">$2</span>$3'
        $content = $content -replace '(<li><a href="missions\.html"[^>]*>)([^<]*)(</a>)', '$1<span data-translate="missions">$2</span>$3'
        $content = $content -replace '(<li><a href="services\.html"[^>]*>)([^<]*)(</a>)', '$1<span data-translate="ourServices">$2</span>$3'
        $content = $content -replace '(<li><a href="bundles\.html"[^>]*>)([^<]*)(</a>)', '$1<span data-translate="bundles">$2</span>$3'
        $content = $content -replace '(<li><a href="samples\.html"[^>]*>)([^<]*)(</a>)', '$1<span data-translate="samples">$2</span>$3'
        $content = $content -replace '(<a href="contact\.html" class="contact-btn"[^>]*>)([^<]*)(</a>)', '$1<span data-translate="contactInfo">$2</span>$3'
        $changed = $true
    }
    
    # 5. Add JavaScript include before </body> if not present
    if ($content -notmatch 'language-switcher\.js') {
        $scriptTag = "`n    <script src=`"$ScriptPath`"></script>"
        $content = $content -replace '</body>', "$scriptTag`n</body>"
        $changed = $true
    }
    
    if ($changed) {
        $content | Out-File -FilePath $FilePath -Encoding UTF8 -NoNewline
        return $true
    }
    
    return $false
}

# Process main pages
Write-Host "Processing Main Pages..." -ForegroundColor Green
$mainUpdated = 0
foreach ($page in $mainPages) {
    $fullPath = Join-Path "html" $page
    Write-Host "  Processing: $page" -ForegroundColor White
    if (Update-HTMLFile -FilePath $fullPath) {
        $mainUpdated++
        Write-Host "    [OK] Updated successfully" -ForegroundColor Green
    } else {
        Write-Host "    [SKIP] No changes needed" -ForegroundColor Gray
    }
}

# Process service pages
Write-Host "`nProcessing Service Pages..." -ForegroundColor Green
$serviceUpdated = 0
foreach ($page in $servicePages) {
    $fullPath = Join-Path "html" $page
    Write-Host "  Processing: $page" -ForegroundColor White
    if (Update-HTMLFile -FilePath $fullPath -ScriptPath "../../java/language-switcher.js") {
        $serviceUpdated++
        Write-Host "    [OK] Updated successfully" -ForegroundColor Green
    } else {
        Write-Host "    [SKIP] No changes needed or file not found" -ForegroundColor Gray
    }
}

Write-Host "`n=====================================" -ForegroundColor Cyan
Write-Host "Deployment Complete!" -ForegroundColor Green
Write-Host "  Main pages updated: $mainUpdated / $($mainPages.Count)" -ForegroundColor White
Write-Host "  Service pages updated: $serviceUpdated / $($servicePages.Count)" -ForegroundColor White
Write-Host "  Total updated: $($mainUpdated + $serviceUpdated) pages" -ForegroundColor White
Write-Host ""
