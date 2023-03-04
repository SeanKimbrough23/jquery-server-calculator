const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;


app.listen(PORT, () => {
    console.log('Server up and running:', PORT);
});

app.use(express.static('server/public'));
