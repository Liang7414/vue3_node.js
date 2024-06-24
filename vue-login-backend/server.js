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
  password: 'ji3y94u4fu3',
  database: 'sql_test',
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
  
  if (!idNumber || !password) {
    return res.status(400).json({ success: false, error: '請填寫所有欄位' });
  }

  // 验证身分證字號和密码
  const query = 'SELECT * FROM users WHERE idNumber = ? AND password_ = ?';
  db.query(query, [idNumber, password], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ success: false, error: 'Database error' });
    }

    if (results.length > 0) {
      const user = results[0];
      if (user.vote_status === 1) {
        return res.status(403).json({ success: false, error: '此用戶已完成投票' });
      }
      res.json({ success: true, message: '登入成功' });
    } else {
      res.status(401).json({ success: false, error: '無效的身分證字號或密碼' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});