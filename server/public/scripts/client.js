console.log('READY TO GO');

$(document).ready(onReady);

let historyLogs = [];
let currentNumberInputs = '';
let mathInputs = '';
let firstNumberInput = '';
let secondNumberInput = '';


function onReady(){
    console.log('Inside onReady Function');
    $('.btn').on('click', userSelectedInputs);
   historyLogsGET();
    $('#deleteBtn').on('click', onDeleteBtn);
     
}
// function enterCalculations (event){
//     console.log('inside enterCalculations function');


// }

// GET to retrieve calculated result 
function getResults() {
    $.ajax({
      method: 'GET',
      url: '/calculator',
    }).then(function (response) {
      calculations = response.result;
      historyLogs();
    });
  }

  function usersInputs() {
    
    let newInputs = {
      firstNumberInput,
      secondNumberInput: secondNumberInput.substring(1),
      mathInputs,
    };
    console.log('in usersInputs', newInputs);
  $.ajax({
    type: 'POST',
    url: '/calculator',
    data: newInputs,
  }).then(function (response) {
    console.log('ajax POST is successful');

    // after POST ---  created a GET to retrieve calculated result
    getResults();
  });
}


function userSelectedInputs() {
    // want the number that is being clicked on
    const buttonClicked = $(this)[0].innerText;
    if (mathInputs === '') {
      firstNumberInput = currentNumberInputs;
    } if ( buttonClicked === '+' ||
      buttonClicked === '-' ||
      buttonClicked === '*' ||
      buttonClicked === '/'
    ) {
      if (mathInputs !== '') {
        return;
      }
      mathInputs = buttonClicked;
    }
    currentNumberInputs = currentNumberInputs.concat(buttonClicked);
    if (buttonClicked === '=') {
      usersInputs();
      $('.calculator').val('');
      currentNumberInputs = '';
      mathInputs = '';
      firstNumberInput = '';
      secondNumberInput = '';
    } else {
      $('.calculator').val(currentNumberInputs);
    }
  
    if (buttonClicked === 'Clear') {
      $('.calculator').val('');
      currentNumberInputs = '';
      mathInputs = '';
      firstNumberInput = '';
      secondNumberInput = '';
      $('#resultDisplay').empty();
    }
  
    if (mathInputs !== '') {
      secondNumberInput = secondNumberInput.concat(buttonClicked);
    }
  }

  function historyLogsGET() {
    $.ajax({
      method: 'GET',
      url: '/historyLog',
    }).then(function (response) {
      console.log('inside historyLogsGET', response);
      historyLogs = response;
  
      // then call the render() to display the result on DOM
      render();
    });
  }
  function onDeleteBtn() {
    historyLogs = [];
    $('#historyLogs').empty();
  }
  function render() {
    console.log('historyLogs', historyLogs);
    // create list  element will show the history log
    let history = '';
    for (let i = 0; i < historyLogs.length; i++) {
      let log = historyLogs[i];
      console.log('render log: ', log);
      history += `
      <li>${log.firstNumberInput} ${log.mathInputs} ${log.secondNumberInput} = ${log.calculations}</li>
      `;
    }
        $('#historyLogs').empty();
        $('#resultDisplay').empty();

    // Display the history on the DOM
    $('#historyLogs').append(history);
    $('.calculator').val( );
}

  






















//   function calculator (num1, num2, operator) {
//     let result;

//     switch(operator){
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             result = 'Invalid Operator';
//     }
//     return result;
//     console.log('inside calculator function', result);
//     $.ajax({
//         method: 'POST',
//         url: '/calculator',
//         data: result
//     });


// let result = calculator(5, 3, '+');
// console.log(result); 

// result = calculator(5, 3, '-');
// console.log(result); 

// result = calculator(5, 3, '*');
// console.log(result); 

// result = calculator(5, 3, '/');
// console.log(result); 

// result = calculator(5, 3, '%');
// console.log(result); 