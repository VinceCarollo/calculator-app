function add(a,b){
  return a + b;
}

function subtract(a,b){
  return a - b;
}

function multiply(a,b){
  return a * b;
}

function devide(a,b){
  return a / b;
}

function operate(operator, a, b){
  switch(operator){
    case '+':
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case '*':
      return multiply(a, b);
      break;
    case '/':
      return devide(a, b);
      break;
  }
}


let buttons = document.querySelectorAll('button');
let display = document.getElementById('nums');
let runningNum = '';
let runningTotal = 0;
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    let input = event.target.innerHTML;
    let inputId = event.target.id;
    //if clear button pushed
    if(inputId === 'clearButton'){
      display.innerHTML = '';
      runningNum = '';
    //if back button pushed
    }else if(inputId === 'backArrow' || inputId === 'backButton'){
      display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1)
      runningNum = runningNum.substring(0, runningNum.length -1)
    //if devide, multiply, add, or subtract buttons pushed
    }else if(inputId === 'devideButton' || inputId === 'timesButton' || inputId === 'minusButton' || inputId === 'plusButton'){
      //insert function here that takes operator and runningNum
    }else{
      display.innerHTML += input;
      runningNum += input;
      console.log(runningNum);
    }
  })
})
