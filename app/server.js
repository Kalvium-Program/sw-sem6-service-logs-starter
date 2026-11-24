const http = require('node:http');
const { Pool } = require('pg');
const db = new Pool({ connectionTimeoutMillis: 3000 });

http.createServer(async (req, res) => {
  if (req.method !== 'GET' || req.url !== '/api/inventory') {
    res.writeHead(404).end();
    return;
  }
  res.setHeader('Content-Type', 'application/json');
  try {
    const { rows } = await db.query('SELECT item, available FROM inventory ORDER BY item');
    console.log('GET /api/inventory status=200');
    res.writeHead(200).end(JSON.stringify(rows));
  } catch (err) {
    // Log a diagnostic code, not a connection string or request data.
    console.error(`GET /api/inventory status=500 db_code=${err.code || 'unknown'}`);
    res.writeHead(500).end(JSON.stringify({ error: 'Inventory unavailable' }));
  }
}).listen(3000, '0.0.0.0', () => console.log('Inventory API listening on 3000'));
