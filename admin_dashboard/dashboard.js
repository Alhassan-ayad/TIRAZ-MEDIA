
const API_URL = 'https://tirazbusiness.com/api/allcontacts';

function logout() {
    window.location.href = 'login.html';
}

function fetchContacts() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => renderContacts(data))
        .catch(() => {
            const tbody = document.querySelector('#contacts-table tbody');
            tbody.innerHTML = '<tr><td colspan="5">Failed to load contacts.</td></tr>';
        });
}

function renderContacts(contacts) {
    const tbody = document.querySelector('#contacts-table tbody');
    tbody.innerHTML = '';
    if (!contacts || contacts.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5">No contacts found.</td></tr>';
        return;
    }
    contacts.forEach(contact => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contact.name || ''}</td>
            <td>${contact.email || ''}</td>
            <td>${contact.phone_number || ''}</td>
            <td>${contact.service || ''}</td>
            <td>${contact.messages || ''}</td>
        `;
        tbody.appendChild(row);
    });
}

window.onload = fetchContacts;
