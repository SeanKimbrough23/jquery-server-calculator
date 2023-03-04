console.log('READY TO GO');

$(document).ready(onReady);

function onReady(){
    console.log('Inside onReady Function');

  
}
function enterCalculations (event){
    console.log('inside enterCalculations function');


}

function calculator (num1, num2, operator) {
    let result;

    switch(operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid Operator';
    }
    return result;
    console.log('inside calculator function', result);
};
// let result = calculator(5, 3, '+');
// console.log(result); // Output: 8

// result = calculator(5, 3, '-');
// console.log(result); // Output: 2

// result = calculator(5, 3, '*');
// console.log(result); // Output: 15

// result = calculator(5, 3, '/');
// console.log(result); // Output: 1.6666666666666667

// result = calculator(5, 3, '%');
// console.log(result); // Output: Invalid operator
