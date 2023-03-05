const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
let calculations = undefined;
let historyLogs = [];
//const bootstrap = require('bootstrap');

//calculations

function calculator (firstNumberInput, secondNumberInput, operator) {
    let calculations;
    switch(operator){
        case '+':
            calculations = firstNumberInput + secondNumberInput;
            break;
        case '-':
            calculations = firstNumberInput - secondNumberInput;
            break;
        case '*':
            calculations = firstNumberInput * secondNumberInput;
            break;
        case '/':
            calculations = firstNumberInput / secondNumberInput;
            break;
        default:
            calculations = 'Invalid Operator';
    }
    return calculations;
} // function to take in user number inputs with operator input to do basic math.

app.listen(PORT, () => {
    console.log('Server up and running:', PORT);
}); // made to listen to PORT 5000

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//  GET req for calculations
app.get('/calculator', (req, res) => {
    console.log('results: ', calculations);
    res.send({ result: calculations });
});

app.post('/calculator' , (req, res) => {
    console.log('in /calculator POST:', req.body);

    let firstNumberInput = Number(req.body.firstNumberInput);
    let secondNumberInput = Number(req.body.secondNumberInput);
    let mathInputs = req.body.mathInputs;

    calculations = calculator(firstNumberInput, secondNumberInput, mathInputs);

    historyLogs.push({
        firstNumberInput,
        secondNumberInput,
        mathInputs,
        calculations
    });

    res.sendStatus(201);
}); // POST request 

app.get('/historyLog', (req, res) => {
    console.log('historyLogs: ', historyLogs);
    res.send(historyLogs);
});