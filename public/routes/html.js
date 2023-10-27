const router = require('express').Router();
const path = require('path');

//Route to Index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

//Route to Notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
  });

//Export
module.exports = router;