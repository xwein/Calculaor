let myDisplay = document.getElementById('display');
const equal = document.getElementById('equal');
const operators = document.getElementsByClassName("operator");
const zero = document.getElementById('zero')
equal.disabled = true;
zero.disabled = false;
// loop through the operators and set them all to disabled
for (let i = 0; i < operators.length; i++) {
  operators[i].disabled = true;
}

function addNumber (num){
  let myDisplay = document.getElementById('display');
  myDisplay.innerHTML += num;

  // loop through the operators and enable them all
  for (let i = 0; i < operators.length; i++) {
    operators[i].disabled = false;
  }
  equal.disabled = false;
  zero.disabled = false ;
}

function addOperator(oper){
  let myDisplay = document.getElementById('display');
  myDisplay.innerHTML += oper;

  // loop through the operators and disable them all
  for (let i = 0; i < operators.length; i++) {
    operators[i].disabled = true;
  }
  
}


function calculate() {
  let x = myDisplay.innerHTML;
  let arr = x.split(" ");
  

  // perform all the operations in the correct mathematical order
  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] === "*" || arr[i] === "/") {
      let operator = arr[i];
      let operand1 = parseFloat(arr[i - 1]);
      let operand2 = parseFloat(arr[i + 1]);
      let result = operator === "*" ? operand1 * operand2 : operand1 / operand2;
      arr.splice(i - 1, 3, result); // replace operand1, operator, operand2 with the result
      i -= 2; // adjust the index to account for the removed items
    }
  }
  let total = parseFloat(arr[0]);
  //perform all the additions and subtractions
   for (let i = 1; i < arr.length; i += 2) {
    
     if (arr[i] === "+") {
       total += parseFloat(arr[i + 1]);
     } else if (arr[i] === "-") {
       total -= parseFloat(arr[i + 1]);
     }
   }

  myDisplay.innerHTML = total;
}



  function clearDisplay(){
    myDisplay.innerHTML ='';
    for (let i = 0; i < operators.length; i++) {
      operators[i].disabled = true;
    }
    equal.disabled = true;
  }

  function deleteDisplay() {
    let x = myDisplay.innerHTML;
    let arr = x.split(" ");
    arr.splice(arr.length - 1, 1);
    myDisplay.innerHTML = arr.join(" ");
  }
