document.addEventListener('DOMContentLoaded', function() {
    console.log('Splash script loaded!');
    
    // Splash screen animation - runs every time this script loads
    const splash = document.getElementById('splash-overlay');
    const wordThink = document.getElementById('word-think');
    const wordBuild = document.getElementById('word-build');
    const wordSucceed = document.getElementById('word-succeed');
    const splashWords = document.getElementById('splash-words');
    const splashLogo = document.getElementById('splash-logo');
    
    console.log('Elements found:', {
        splash: !!splash,
        wordThink: !!wordThink,
        wordBuild: !!wordBuild,
        wordSucceed: !!wordSucceed,
        splashWords: !!splashWords,
        splashLogo: !!splashLogo
    });
    
    if (!splash) {
        console.error('Splash overlay not found!');
        return;
    }
    
    // Step 1: Animate words in sequence
    setTimeout(() => {
        console.log('Starting animation...');
        if (wordThink) {
            wordThink.style.opacity = 1;
            console.log('Think word shown');
        }
        setTimeout(() => {
            if (wordBuild) {
                wordBuild.style.opacity = 1;
                console.log('Build word shown');
            }
            setTimeout(() => {
                if (wordSucceed) {
                    wordSucceed.style.opacity = 1;
                    console.log('Succeed word shown');
                }
                // Step 2: Fade out words
                setTimeout(() => {
                    if (splashWords) {
                        splashWords.classList.add('hide');
                        console.log('Words hidden');
                    }
                    // Step 3: Fade in logo
                    setTimeout(() => {
                        if (splashLogo) {
                            splashLogo.style.opacity = 1;
                            console.log('Logo shown');
                        }
                        // Step 4: Hide splash and redirect to home page
                        setTimeout(() => {
                            if (splash) {
                                splash.classList.add('hide');
                                console.log('Starting redirect...');
                            }
                            setTimeout(() => {
                                console.log('Redirecting to home page...');
                                // Redirect to home page after splash animation
                                window.location.href = './html/home.html';
                            }, 500);
                        }, 1200);
                    }, 700);
                }, 700);
            }, 500);
        }, 500);
    }, 500);
});
