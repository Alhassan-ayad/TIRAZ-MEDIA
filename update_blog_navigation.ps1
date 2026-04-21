# Blog Navigation Update Script
# This PowerShell script helps update all HTML pages to include the blog link

Write-Host "=== ALT MATE Blog Navigation Update ===" -ForegroundColor Cyan
Write-Host ""

$htmlFiles = @(
    "aboutus.html",
    "bundles.html",
    "contact.html",
    "missions.html",
    "request-service.html",
    "samples_clean.html",
    "services.html"
)

Write-Host "Files to update:" -ForegroundColor Yellow
foreach ($file in $htmlFiles) {
    Write-Host "  - html/$file"
}

Write-Host ""
Write-Host "Navigation additions needed:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Desktop Navigation (add after samples.html link):" -ForegroundColor Green
Write-Host '   <li><a href="blog.html">Blog</a></li>' -ForegroundColor White
Write-Host "" i
Write-Host "2. Mobile Sidebar (add after Samples link):" -ForegroundColor Green
Write-Host @"
   <li>
       <a href="blog.html">
           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M4 4h12v2H4V4zm0 5h12v2H4V9zm0 5h8v2H4v-2z" fill="currentColor"/>
           </svg>
           Blog
       </a>
   </li>
"@ -ForegroundColor White

Write-Host ""
Write-Host "Instructions:" -ForegroundColor Cyan
Write-Host "1. Open each HTML file listed above"
Write-Host "2. Find the desktop navigation section (<nav class='main-nav'>)"
Write-Host "3. Add the blog link after the Samples link"
Write-Host "4. Find the mobile sidebar section (<nav class='sidebar-nav'>)"
Write-Host "5. Add the blog link after the Samples link"
Write-Host "6. Save the file"
Write-Host ""

Write-Host "Tip: Use 'active' class on blog.html link when on the blog page" -ForegroundColor Yellow
Write-Host 'Example: <a href="blog.html" class="active">Blog</a>' -ForegroundColor White
Write-Host ""

Write-Host "Update complete for home.html ✓" -ForegroundColor Green
Write-Host "Remaining files: $($htmlFiles.Count)" -ForegroundColor Yellow
Write-Host ""

# Ask if user wants to see the updated home.html as reference
$response = Read-Host "Would you like to see home.html as a reference? (y/n)"
if ($response -eq 'y' -or $response -eq 'Y') {
    Write-Host ""
    Write-Host "Opening home.html..." -ForegroundColor Cyan
    Start-Process "html\home.html"
}

Write-Host ""
Write-Host "Done! Happy coding! 🚀" -ForegroundColor Green
