const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')

//get request
router.get('/api/notes', async (req, res) =>{
    try {
        const filePath = path.join(__dirname, 'db', 'db.json'); 
        const dbJson = JSON.parse(fs.readFileSync(filePath)); 
        res.json(dbJson);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });


//post request
router.post('/api/notes', (req, res) =>{
    try {
        const filePath = path.join(__dirname, 'db', 'db.json'); 
        const dbJson = JSON.parse(fs.readFileSync(filePath)); 
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4(),
        };
        dbJson.push(newNote);
        fs.writeFileSync(filePath, JSON.stringify(dbJson));
        res.json(dbJson);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

//export
module.exports = router;