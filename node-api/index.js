const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const app = express();
const port = 3000;

// Configuration CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
// Configuration de la base de données
const pool = mysql.createPool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "testdb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Vérification de la connexion à la base de données
const checkDatabaseConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✅ Connexion à la base de données établie");
    connection.release();
    return true;
  } catch (error) {
    console.error(
      "❌ Erreur de connexion à la base de données:",
      error.message
    );
    return false;
  }
};

// Routes
app.get("/api/users", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT id, name, email FROM users");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const [result] = await pool.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );
    res.status(201).json({ id: result.insertId, name, email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/books", async (req, res) => {
  try {
    const { genre } = req.query;
    let query = "SELECT * FROM books";
    const params = [];

    if (genre) {
      query += " WHERE genre = ?";
      params.push(genre);
    }

    const [rows] = await pool.query(query, params);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/books", async (req, res) => {
  try {
    const { title, author, published_date, genre } = req.body;
    const [result] = await pool.query(
      "INSERT INTO books (title, author, published_date, genre) VALUES (?, ?, ?, ?)",
      [title, author, published_date, genre]
    );
    res
      .status(201)
      .json({ id: result.insertId, title, author, published_date, genre });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/api/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("DELETE FROM books WHERE id = ?", [id]);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Livre supprimé avec succès" });
    } else {
      res.status(404).json({ message: "Livre non trouvé" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Démarrage du serveur après vérification de la base de données
const startServer = async () => {
  const dbConnected = await checkDatabaseConnection();
  if (dbConnected) {
    app.listen(port, () => {
      console.log(`🚀 Serveur démarré sur le port ${port}`);
    });
  } else {
    console.error(
      "❌ Impossible de démarrer le serveur : pas de connexion à la base de données"
    );
    process.exit(1);
  }
};

startServer();
