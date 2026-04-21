# PowerShell script to add card-inner wrappers to all service cards

$htmlFile = "html\services.html"
$content = Get-Content $htmlFile -Raw

# Add card-inner wrapper to each service card (4-20)
for ($i = 4; $i -le 20; $i++) {
    $pattern = '<div class="portfolio-card service-' + $i + '">'
    $replacement = '<div class="portfolio-card service-' + $i + '"><div class="card-inner">'
    $content = $content -replace [regex]::Escape($pattern), $replacement
    
    # Add closing div before the closing </div></div> of each portfolio-item
    $cardPattern = '(\s+</div>\s+</div>\s+</div>\s+</div>\s+)'
    $content = $content -replace $cardPattern, '</div>$1'
}

# Write the updated content back
$content | Set-Content $htmlFile -Encoding UTF8

Write-Host "Fixed card structure for services 4-20"
