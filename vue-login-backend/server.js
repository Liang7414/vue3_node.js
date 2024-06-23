const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// 配置数据库连接
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ji3y94u4fu3',
  database: 'sql_test'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

// 登录端点
app.post('/login', (req, res) => {
    const { idNumber, password_ } = req.body;
    const query = 'SELECT * FROM users WHERE idNumber = ? AND password_ = ?';
    db.query(query, [idNumber, password_], (err, results) => {
      if (err) {
        res.status(500).send({ error: 'Database error' });
      } else if (results.length > 0) {
        const user = results[0];
        if (user.vote_status === 0) {
          res.send({ success: true, message: 'Login successful' });
        } else {
          res.status(403).send({ error: 'Login not allowed: vote_status is 1' });
        }
      } else {
        res.status(401).send({ error: 'Invalid credentials' });
      }
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});