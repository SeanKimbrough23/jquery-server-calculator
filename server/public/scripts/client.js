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
    historyLogs();
    $('#deleteBtn').on('click', onDeleteBtn);
    


  
}
// function enterCalculations (event){
//     console.log('inside enterCalculations function');


// }
function render (){
    console.log('Inside the render function');
}


// GET to retrieve calculated result 
function getResults() {
    $.ajax({
      method: 'GET',
      url: '/calculator',
    }).then(function (response) {
      calculatedResult = response.result;
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
  function historyLogs() {
    $.ajax({
      method: 'GET',
      url: '/historyLog',
    }).then(function (response) {
      console.log('inside historyLogs', response);
      historyLogs = response;
  
      // then call the render() to display the result on DOM
      render();
    });
  }
  function onDeleteBtn() {
    historyLogs = [];
    $('#historyLogs').empty();
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