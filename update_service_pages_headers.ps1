# PowerShell script to update service page headers with translation support
# This script updates the <head> section and adds the desktop header with language switcher

$servicePagesPath = "D:\ALT MATE\ALT MATE before backend\ALT-MATE-WEBSITE-PROJECT-\html\services\"

# List of files to update
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

# Old head pattern to replace
$oldHeadPattern = @'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
'@

# New head replacement (with FOUC prevention)
$newHeadReplacement = @'
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
'@

# After title and css link, add FOUC prevention script
$afterStylesheetPattern = '<link rel="stylesheet" href="../../css/style.css">'
$foucPrevention = @'
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

# Old desktop header pattern (simple one without language switcher)
$oldDesktopHeaderPattern = @'
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
                    <li><a href="../services.html" class="active">Our Services</a></li>
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
'@

# New desktop header with language switcher and data-translate attributes
$newDesktopHeader = @'
    <!-- Desktop Header (Hidden on Mobile) -->
    <header class="main-header">
        <div class="logo">
            <img src="../../images/logo.svg" alt="ALT MATE Logo" style="height:54px;vertical-align:middle;">
        </div>
        <div class="header-right">
            <div class="desktop-language-switcher">
                <button class="lang-btn" data-lang="en">EN</button>
                <button class="lang-btn active" data-lang="ar">ع</button>
            </div>
            <nav class="main-nav">
                <ul>
                    <li><a href="../home.html" data-translate="home">Home</a></li>
                    <li><a href="../aboutus.html" data-translate="aboutUs">About Us</a></li>
                    <li><a href="../missions.html" data-translate="missions">Missions</a></li>
                    <li><a href="../services.html" class="active" data-translate="ourServices">Our Services</a></li>
                    <li><a href="../bundles.html" data-translate="bundles">Bundles</a></li>
                    <li><a href="../samples.html" data-translate="samples">Samples</a></li>
                    <li><a href="../blog.html" data-translate="blog">Blog</a></li>
                </ul>
            </nav>
            <div class="header-buttons">
                <a href="../contact.html" class="contact-btn" data-translate="contactInfo">Contact Info</a>
            </div>
        </div>
    </header>
'@

# Pattern to find closing body/html tags to add language-switcher.js before main.js
$oldScriptPattern = '    <script src="../../java/main.js"></script>'
$newScriptReplacement = @'
    <script src="../../java/language-switcher.js"></script>
    <script src="../../java/main.js"></script>
'@

Write-Host "Starting service pages header updates..." -ForegroundColor Cyan
Write-Host ""

foreach ($fileName in $filesToUpdate) {
    $filePath = Join-Path $servicePagesPath $fileName
    
    if (Test-Path $filePath) {
        Write-Host "Processing: $fileName" -ForegroundColor Yellow
        
        # Read file content
        $content = Get-Content $filePath -Raw -Encoding UTF8
        
        # 1. Update lang attribute
        $content = $content -replace '<html lang="en">', '<html lang="ar">'
        
        # 2. Add FOUC prevention script after stylesheet
        if ($content -notmatch 'localStorage.getItem\(''language''\)') {
            $content = $content -replace [regex]::Escape($afterStylesheetPattern), $foucPrevention
            Write-Host "  ✓ Added FOUC prevention script" -ForegroundColor Green
        } else {
            Write-Host "  - FOUC prevention already exists" -ForegroundColor Gray
        }
        
        # 3. Update desktop header (add language switcher and data-translate attributes)
        if ($content -match [regex]::Escape($oldDesktopHeaderPattern)) {
            $content = $content -replace [regex]::Escape($oldDesktopHeaderPattern), $newDesktopHeader
            Write-Host "  ✓ Updated desktop header with language switcher" -ForegroundColor Green
        } else {
            Write-Host "  - Header already updated or has different structure" -ForegroundColor Gray
        }
        
        # 4. Add language-switcher.js script if not present
        if ($content -notmatch 'language-switcher\.js') {
            $content = $content -replace [regex]::Escape($oldScriptPattern), $newScriptReplacement
            Write-Host "  ✓ Added language-switcher.js script" -ForegroundColor Green
        } else {
            Write-Host "  - language-switcher.js already included" -ForegroundColor Gray
        }
        
        # Write updated content back to file
        $content | Set-Content $filePath -Encoding UTF8 -NoNewline
        Write-Host "  ✓ File saved successfully" -ForegroundColor Green
        Write-Host ""
    } else {
        Write-Host "File not found: $fileName" -ForegroundColor Red
        Write-Host ""
    }
}

Write-Host "All service pages have been updated!" -ForegroundColor Green
Write-Host ""
Write-Host "Summary of changes:" -ForegroundColor Cyan
Write-Host "1. Changed lang='en' to lang='ar'" -ForegroundColor White
Write-Host "2. Added FOUC prevention script in <head>" -ForegroundColor White
Write-Host "3. Added language switcher buttons to desktop header" -ForegroundColor White
Write-Host "4. Added data-translate attributes to navigation links" -ForegroundColor White
Write-Host "5. Added language-switcher.js script reference" -ForegroundColor White
