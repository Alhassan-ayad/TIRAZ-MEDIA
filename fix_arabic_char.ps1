# Fix Arabic character in all service pages using direct file manipulation
$servicePagesPath = "D:\ALT MATE\ALT MATE before backend\ALT-MATE-WEBSITE-PROJECT-\html\services\"

$filesToFix = @(
    "advertising-campaigns.html",
    "automated-response.html",
    "branding-plan.html",
    "erp-systems.html",
    "erp-training.html",
    "managing-comments.html",
    "marketing-content.html",
    "organic-campaigns.html",
    "promo-voice-over.html",
    "social-media-campaigns.html",
    "whatsapp-campaigns.html"
)

Write-Host "Fixing Arabic character in language switcher buttons..." -ForegroundColor Cyan

foreach ($fileName in $filesToFix) {
    $filePath = Join-Path $servicePagesPath $fileName
    
    if (Test-Path $filePath) {
        Write-Host "`nProcessing: $fileName" -ForegroundColor Yellow
        
        # Read file
        $content = Get-Content $filePath -Raw
        
        # Check if it has the bad encoding
        if ($content -match 'data-lang="ar">Ø¹<') {
            # Replace the bad encoding with correct Arabic character
            $content = $content -replace 'data-lang="ar">Ø¹<', 'data-lang="ar">ع<'
            
            # Write back
            $content | Set-Content $filePath -Encoding UTF8 -NoNewline
            
            Write-Host "  - Fixed Arabic character" -ForegroundColor Green
        } else {
            Write-Host "  - Already correct" -ForegroundColor Gray
        }
    }
}

Write-Host "`nAll files processed!" -ForegroundColor Green
