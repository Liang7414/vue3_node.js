const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// 创建MySQL数据库连接
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpd',
  database: 'yourdb',
});

// 连接到MySQL数据库
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ', err);
    return;
  }
  console.log('Connected to the MySQL server.');
});

// 登入API
app.post('/login', (req, res) => {
  const { idNumber, password } = req.body;
  const query = 'SELECT * FROM user WHERE idNumber = ? AND password_ = ?';
  db.query(query, [idNumber, password], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length > 0) {
      const user = results[0];
      if (user.vote_status) {
        res.send({ success: false, error: '您已經投票，無法再次登入' });
      } else {
        res.send({ success: true, vote_status: user.vote_status });
      }
    } else {
      res.send({ success: false, error: '無效的身分證字號或密碼' });
    }
  });
});

app.post('/vote', (req, res) => {
  const { idNumber, voteChoice } = req.body;
  const updateQuery = 'UPDATE user SET vote_choice = ?, vote_status = true WHERE idNumber = ?';

  db.query(updateQuery, [voteChoice, idNumber], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.affectedRows > 0) {
      res.send({ success: true });
    } else {
      res.send({ success: false, error: '投票失敗' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
