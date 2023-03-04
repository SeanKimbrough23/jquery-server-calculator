const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;


app.listen(PORT, () => {
    console.log('Server up and running:', PORT);
});

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/calculator' , (req, res) => {
    console.log('in /calculator POST:', req.body);
    res.sendStatus(201);
})

