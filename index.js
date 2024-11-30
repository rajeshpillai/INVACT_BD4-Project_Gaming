const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3010;

app.use(cors());
app.use(express.static('static'));

// Connect to SQLite database
const db = new sqlite3.Database('./db/database.sqlite', (err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// Utility function to query database
const queryDatabase = (sql, params = []) =>
  new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });

// Routes

// Exercise 1: Get All Games
app.get('/games', async (req, res) => {
  try {
    const games = await queryDatabase('SELECT * FROM games');
    res.json({ games });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Exercise 2: Get Game by ID
app.get('/games/details/:id', async (req, res) => {
  try {
    const game = await queryDatabase('SELECT * FROM games WHERE id = ?', [
      req.params.id,
    ]);
    res.json({ game: game[0] || null });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Exercise 3: Get Games by Genre
app.get('/games/genre/:genre', async (req, res) => {
  try {
    const genre = req.params.genre.toLowerCase();
    const games = await queryDatabase(
      'SELECT * FROM games WHERE LOWER(genre) = ?',
      [genre]
    );
    res.json({ games });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Exercise 4: Get Games by Platform
app.get('/games/platform/:platform', async (req, res) => {
  try {
    const platform = req.params.platform.toLowerCase();
    const games = await queryDatabase(
      'SELECT * FROM games WHERE LOWER(platform) = ?',
      [platform]
    );
    res.json({ games });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Exercise 5: Get Games Sorted by Rating
app.get('/games/sort-by-rating', async (req, res) => {
  try {
    const games = await queryDatabase(
      'SELECT * FROM games ORDER BY rating DESC'
    );
    res.json({ games });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Exercise 6: Get All Players
app.get('/players', async (req, res) => {
  try {
    const players = await queryDatabase('SELECT * FROM players');
    res.json({ players });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Exercise 7: Get Player by ID
app.get('/players/details/:id', async (req, res) => {
  try {
    const player = await queryDatabase('SELECT * FROM players WHERE id = ?', [
      req.params.id,
    ]);
    res.json({ player: player[0] || null });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Exercise 8: Get Players by Platform
app.get('/players/platform/:platform', async (req, res) => {
  try {
    const platform = req.params.platform.toLowerCase();
    const players = await queryDatabase(
      'SELECT * FROM players WHERE LOWER(platform) = ?',
      [platform]
    );
    res.json({ players });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Exercise 9: Get Players Sorted by Rating
app.get('/players/sort-by-rating', async (req, res) => {
  try {
    const players = await queryDatabase(
      'SELECT * FROM players ORDER BY rating DESC'
    );
    res.json({ players });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Exercise 10: Get All Tournaments
app.get('/tournaments', async (req, res) => {
  try {
    const tournaments = await queryDatabase('SELECT * FROM tournaments');
    res.json({ tournaments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Exercise 11: Get Tournament by ID
app.get('/tournaments/details/:id', async (req, res) => {
  try {
    const tournament = await queryDatabase(
      'SELECT * FROM tournaments WHERE id = ?',
      [req.params.id]
    );
    res.json({ tournament: tournament[0] || null });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Exercise 12: Get Tournaments by Game ID
app.get('/tournaments/game/:id', async (req, res) => {
  try {
    const tournaments = await queryDatabase(
      'SELECT * FROM tournaments WHERE gameId = ?',
      [req.params.id]
    );
    res.json({ tournaments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Exercise 13: Get Tournaments Sorted by Prize Pool
app.get('/tournaments/sort-by-prize-pool', async (req, res) => {
  try {
    const tournaments = await queryDatabase(
      'SELECT * FROM tournaments ORDER BY prizePool DESC'
    );
    res.json({ tournaments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
