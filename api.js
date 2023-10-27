const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')

//get request
router.get('/api/notes', async (req, res) =>{
  const dbJson = await JSON.parse(fs.readFileSync('db/db.json'))
  res.json(dbJson);
});


//post request
router.post('/api/notes', (req, res) =>{
  const dbJson = JSON.parse(fs.readFileSync('db/db.json'))
  const newNotes = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  dbJson.push(newNotes);
  fs.writeFileSync('db/db.json', JSON.stringify(dbJson));
  res.json(dbJson);
});

//export
module.exports = router;