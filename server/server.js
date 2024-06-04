const express = require('express');
const http = require('http');
const PORT = process.env.PORT || '3002';
const app = express();
const router = express.Router();
const mariadb = require('mariadb');




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'thats-what-she-said-react-nodejs-rjtw.vercel.app/');
    next();
  });

const pool = mariadb.createPool({
    host: '127.0.0.1', 
    port: 3307, 
    user: 'root',
    password: '',
    database: 'thats_what_she_said',
});



app.get('/yo', (req, res) => {
    res.status(200).json({
        message: 'Ahoy there sailorsss'
    });
});

app.get('/author', async (req, res) => {
  let conn;
  try {
      conn = await pool.getConnection();
      const sqlQuery =  'SELECT quotes.*, author.* FROM quotes INNER JOIN author ON quotes.id_author = author.author_id ORDER BY RAND() LIMIT 1;'
      const [data] = await pool.execute(sqlQuery);
      res.status(200).json({data});

  } catch (error) {
      console.error("Erreur :", error);
      res.status(400).send({ message: error.message });

  } finally {

      if (conn) {
          conn.release();
      }
  }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = router;