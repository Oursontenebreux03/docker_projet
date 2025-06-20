const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
  host: process.env.DB_HOST || "db",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "mydb"
});

// Création automatique de la table à chaque démarrage
const createTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS utilisateurs (
      id SERIAL PRIMARY KEY,
      nom VARCHAR(100),
      age INTEGER,
      email VARCHAR(100)
    );
  `);
  console.log("Table 'utilisateurs' prête !");
};

app.post('/api/users', async (req, res) => {
  const { nom, age, email } = req.body;
  if (!nom || !age || !email) return res.status(400).json({ error: "Champs requis !" });
  try {
    await pool.query(
      'INSERT INTO utilisateurs (nom, age, email) VALUES ($1, $2, $3)',
      [nom, age, email]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Erreur BDD", details: err.message });
  }
});

app.get('/api/users', async (req, res) => {
  const result = await pool.query('SELECT * FROM utilisateurs');
  res.json(result.rows);
});

app.listen(5000, async () => {
  await createTable();
  console.log('Backend démarré sur le port 5000');
});
