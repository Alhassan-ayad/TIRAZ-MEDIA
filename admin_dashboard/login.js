// Simple login logic (demo only)
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = '';

    // Demo credentials (replace with real auth in production)
    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'dashboard_index.html';
    } else {
        errorDiv.textContent = 'Invalid username or password.';
    }
}
