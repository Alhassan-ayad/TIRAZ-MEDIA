(function () {
    var STORAGE_KEY = 'tiraz-cookie-consent';
    if (localStorage.getItem(STORAGE_KEY)) return;

    var style = document.createElement('style');
    style.textContent =
        '.cookie-consent-bar{position:fixed;left:0;right:0;bottom:0;z-index:9999;' +
        'background:var(--dark-card,#0d0d14);border-top:1px solid var(--dark-border,rgba(201,168,76,0.25));' +
        'box-shadow:0 -4px 24px rgba(0,0,0,0.25);padding:18px 24px;display:flex;flex-wrap:wrap;' +
        'align-items:center;justify-content:space-between;gap:16px;font-family:"Montserrat","Segoe UI",Arial,sans-serif;}' +
        '.cookie-consent-text{color:var(--text-primary,#fff);font-size:0.92rem;line-height:1.5;flex:1;min-width:220px;margin:0;}' +
        '.cookie-consent-actions{display:flex;gap:10px;flex-shrink:0;}' +
        '.cookie-consent-actions button{cursor:pointer;border-radius:4px;padding:10px 22px;font-weight:700;' +
        'font-size:0.85rem;letter-spacing:0.5px;transition:all 0.3s;}' +
        '.cookie-consent-accept{background:var(--gold,#C9A84C);color:#000;border:1px solid var(--gold,#C9A84C);}' +
        '.cookie-consent-accept:hover{background:var(--gold-light,#E8C97A);}' +
        '.cookie-consent-reject{background:transparent;color:var(--text-muted,#A0A0B0);border:1px solid var(--dark-border,rgba(201,168,76,0.25));}' +
        '.cookie-consent-reject:hover{color:var(--text-primary,#fff);border-color:var(--gold,#C9A84C);}';
    document.head.appendChild(style);

    var bar = document.createElement('div');
    bar.className = 'cookie-consent-bar';
    bar.innerHTML =
        '<p class="cookie-consent-text" data-translate="cookieConsentText">We use cookies to improve your experience, analyze site traffic, and personalize content. By clicking "Accept", you consent to our use of cookies.</p>' +
        '<div class="cookie-consent-actions">' +
        '<button type="button" class="cookie-consent-reject" data-translate="cookieRejectBtn">Reject</button>' +
        '<button type="button" class="cookie-consent-accept" data-translate="cookieAcceptBtn">Accept</button>' +
        '</div>';
    document.body.appendChild(bar);

    function dismiss(choice) {
        localStorage.setItem(STORAGE_KEY, choice);
        bar.remove();
    }

    bar.querySelector('.cookie-consent-accept').addEventListener('click', function () { dismiss('accepted'); });
    bar.querySelector('.cookie-consent-reject').addEventListener('click', function () { dismiss('rejected'); });
})();
