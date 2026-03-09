const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'biblioteca',
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
});

function verifyConnection(attempt = 1) {
  pool.getConnection((err, connection) => {
    if (err) {
      if (attempt <= 10) {
        console.warn(`Database not ready yet (attempt ${attempt}/10). Retrying...`);
        setTimeout(() => verifyConnection(attempt + 1), 3000);
        return;
      }
      console.error('Error connecting to the database after retries:', err.message);
      return;
    }

    console.log('Connected to the database');
    connection.release();
  });
}

verifyConnection();

module.exports = pool;