# Fix Arabic character encoding in service page headers
$servicePagesPath = "D:\ALT MATE\ALT MATE before backend\ALT-MATE-WEBSITE-PROJECT-\html\services\"

$filesToFix = @(
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

Write-Host "Fixing Arabic character encoding in service pages..." -ForegroundColor Cyan

foreach ($fileName in $filesToFix) {
    $filePath = Join-Path $servicePagesPath $fileName
    
    if (Test-Path $filePath) {
        Write-Host "`nProcessing: $fileName" -ForegroundColor Yellow
        
        # Read file with UTF8 encoding
        $content = Get-Content $filePath -Raw -Encoding UTF8
        
        # Replace the incorrectly encoded Arabic character
        $oldButton = '<button class="lang-btn active" data-lang="ar">Ø¹</button>'
        $newButton = '<button class="lang-btn active" data-lang="ar">ع</button>'
        
        if ($content -match [regex]::Escape($oldButton)) {
            $content = $content -replace [regex]::Escape($oldButton), $newButton
            
            # Save with UTF8 encoding
            [System.IO.File]::WriteAllText($filePath, $content, [System.Text.UTF8Encoding]::new($false))
            
            Write-Host "  - Fixed Arabic character encoding" -ForegroundColor Green
        } else {
            Write-Host "  - Already correct or different encoding" -ForegroundColor Gray
        }
    }
}

Write-Host "`nAll files processed!" -ForegroundColor Green
