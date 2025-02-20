const API_URL = "/api";

// Fonction pour charger les utilisateurs
async function loadUsers() {
  try {
    const response = await fetch(`${API_URL}/users`);
    const users = await response.json();
    const usersList = document.getElementById("usersList");
    const userCount = document.getElementById("userCount");

    usersList.innerHTML = "";
    userCount.textContent = users.length;

    users.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.className = "user-card";
      userCard.innerHTML = `
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>ID: #${user.id}</p>
            `;
      usersList.appendChild(userCard);
    });
  } catch (error) {
    console.error("Erreur lors du chargement des utilisateurs:", error);
  }
}

async function loadBooks() {
  try {
    const genre = document.getElementById("genreSelect").value;
    const response = await fetch(
      `${API_URL}/books${genre ? `?genre=${genre}` : ""}`
    );
    const books = await response.json();
    const booksList = document.getElementById("booksList");
    const bookCount = document.getElementById("bookCount");

    booksList.innerHTML = "";
    bookCount.textContent = books.length;

    books.forEach((book) => {
      const bookCard = document.createElement("div");
      bookCard.className = "book-card";
      bookCard.innerHTML = `
                    <h3>${book.title}</h3>
                    <p>Auteur: ${book.author}</p>
                    <p>Date de publication: ${book.published_date}</p>
                    <p>Genre: ${book.genre}</p>
                    <button onclick="deleteBook(${book.id})">Supprimer</button>
                `;
      booksList.appendChild(bookCard);
    });
  } catch (error) {
    console.error("Erreur lors du chargement des livres:", error);
  }
}

// Gestion du formulaire
document.getElementById("userForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      document.getElementById("userForm").reset();
      loadUsers();
    }
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'utilisateur:", error);
  }
});

// Gestion du formulaire
document.getElementById("userForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      document.getElementById("userForm").reset();
      loadUsers();
    }
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'utilisateur:", error);
  }
});

// Delete book
async function deleteBook(id) {
  try {
    const response = await fetch(`${API_URL}/books/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      loadBooks();
    } else {
      console.error("Erreur lors de la suppression du livre");
    }
  } catch (error) {
    console.error("Erreur lors de la suppression du livre:", error);
  }
}

// Gestion du formulaire pour les livres
document.getElementById("bookForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    published_date: document.getElementById("published_date").value,
    genre: document.getElementById("genre").value,
  };

  try {
    const response = await fetch(`${API_URL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      document.getElementById("bookForm").reset();
      loadBooks();
    }
  } catch (error) {
    console.error("Erreur lors de l'ajout du livre:", error);
  }
});

// Ajout d'un champ de sélection pour le genre
document.addEventListener("DOMContentLoaded", () => {
  const genreSelect = document.getElementById("genreSelect");
  genreSelect.addEventListener("change", loadBooks);
  loadUsers();
  loadBooks();
});
