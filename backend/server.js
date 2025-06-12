const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 5000;

const pool = new Pool({
  host: "db",
  user: "postgres",
  password: "postgres",
  database: "mydb",
});

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json({ time: result.rows[0] });
});

app.listen(port, () => console.log(`Backend running on port ${port}`));
