console.log('READY TO GO');

$(document).ready(onReady);

let currentNumberInputs = '';
let mathInputs = '';
let firstNumberInput = '';
let secondNumberInput = '';


function onReady(){
    console.log('Inside onReady Function');
 $('#resultBtn').on('click' , calculator);


  
}
function enterCalculations (event){
    console.log('inside enterCalculations function');


}
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
      mathInput,
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
    if (mathInput === '') {
      firstNumberInput = currentNumberInputs;
    }
  
    if (
      inputClicked === '+' ||
      inputClicked === '-' ||
      inputClicked === '*' ||
      inputClicked === '/'
    ) {
      if (mathInput !== '') {
        return;
      }
      mathInput = buttonClicked;
    }
    currentNumberInputs = currentNumberInputs.concat(buttonClicked);
    if (buttonClicked === '=') {
      usersInputs();
      $('.calculator-screen').val('');
      currentNumberInputs = '';
      mathInput = '';
      firstNumberInput = '';
      secondNumberInput = '';
    } else {
      $('.calculator-screen').val(currentNumberInputs);
    }
  
    if (buttonClicked === 'Clear') {
      $('.calculator-screen').val('');
      currentNumberInputs = '';
      mathInput = '';
      firstNumberInput = '';
      secondNumberInput = '';
      $('#resultDisplay').empty();
    }
  
    if (mathInput !== '') {
      secondNumberInput = secondNumberInput.concat(buttonClicked);
    }
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

}
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