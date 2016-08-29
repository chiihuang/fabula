const router = require('express').Router();
const db = require('../lib/db');

router.get('/api/history', (req, res) => {
  db.getHistories().then(history => res.json(history));
});

module.exports = router;
