// Admin login: validates credentials against the backend using HTTP Basic auth.
const AUTH_VALIDATE_URL = 'https://tirazbusiness.com/api/allcontacts'; // any protected endpoint

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = '';

    // Basic auth token (base64 of "username:password")
    const token = btoa(`${username}:${password}`);

    try {
        const response = await fetch(AUTH_VALIDATE_URL, {
            headers: { 'Authorization': `Basic ${token}` }
        });

        if (response.ok) {
            // Store the token for the dashboard session, then enter the dashboard
            sessionStorage.setItem('tirazAuth', token);
            window.location.href = 'dashboard_index.html';
        } else if (response.status === 401) {
            errorDiv.textContent = 'Invalid username or password.';
        } else {
            errorDiv.textContent = `Login failed (server returned ${response.status}).`;
        }
    } catch (err) {
        errorDiv.textContent = 'Could not reach the server. Please try again.';
        console.error('Login error:', err);
    }
}
