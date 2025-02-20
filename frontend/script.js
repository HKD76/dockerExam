const API_URL = '/api';

// Fonction pour charger les utilisateurs
async function loadUsers() {
    try {
        const response = await fetch(`${API_URL}/users`);
        const users = await response.json();
        const usersList = document.getElementById('usersList');
        const userCount = document.getElementById('userCount');
        
        usersList.innerHTML = '';
        userCount.textContent = users.length;
        
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML = `
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>ID: #${user.id}</p>
            `;
            usersList.appendChild(userCard);
        });
    } catch (error) {
        console.error('Erreur lors du chargement des utilisateurs:', error);
    }
}

// Gestion du formulaire
document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    try {
        const response = await fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            document.getElementById('userForm').reset();
            loadUsers();
        }
    } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Charger les utilisateurs au démarrage
    loadUsers(); 
});