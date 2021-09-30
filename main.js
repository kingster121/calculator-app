/*
A GUI of the calculator
    -Buttons 0-9 class="numbers" id="0/1/2..."
    -Buttons basic operators class="operators" id="add/subtract/divide/multiply"
    -Button equal class="operators" id="equal"
    -Button clear class="clear" id="clear"
    -Link each of the button to an event click

Functions for basic operators
    -add, subtract, multiply, divide
    -takes two num as parameter 
    -E.G. add(num1,num2)

GLOBAL VARIABLE 
    -miniBlockChain

Function buttonClick(event)
    -IF miniBlockChain.length==0
        -IF 'this'.id=="numbers", miniBlockChain[0]='this'.id
        -ELSE prompt user to enter a number first
    -ELSE IF miniBlockChain.length==1
        -IF this.id=="numbers", miniBlockChain[0]+=this.id
        -ELSE miniBlockChain[1]=this.id
    -ELSE IF miniBlockChain.length==2
        -IF 'this'.id=="numbers", miniBlockChain[2]=this.id;
        -ELSE miniBlockChain[1]='this'.id ~~replace the previous operator~~
    ELSE IF miniBlockChain.length==3
        -IF this.id=="number", miniBlockChain[2]+=this.id
        -ELSE afterValue=whatToDo(), miniBlockChain=[afterValue] ~~reset the blockChain to length 1~~

whatToDo()
    -switch the operator found in miniBlockChain[1], to do the basic operators, return the value


*/
const container = document.querySelector('#calculator-container');
const displayContainer = container.querySelector('#display-container');

function createGUI() {
    const numContainer = document.querySelector('#num-container');
    for (let i = 9; i >= 0; i--) {
        const button = document.createElement('button');
        button.classList.add('numbers');
        button.type = "button";
        button.id = i;
        button.textContent = i;
        numContainer.appendChild(button);
    }
}
createGUI();

const buttons = container.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
})

let miniBlockChain = [];

function buttonClick(event) {
    let id = this.id;
    let classList = this.classList;
    if(id==='clear'){
        resetDisplay;
        miniBlockChain=[];
    }
    else if (miniBlockChain.length === 0) {
        if (classList.contains('numbers')) {
            miniBlockChain[0] = id;
        }
        else if (classList.contains('operators')) {
            window.alert("Please enter a number first!");
        }
        display(miniBlockChain[0]);
    }
    else if (miniBlockChain.length === 1) {
        if (classList.contains('numbers')) {
            miniBlockChain[0] += id;
        }
        else if (classList.contains('operators')) {
            miniBlockChain[1] = id;
        }
        display(miniBlockChain[0]);
    }
    else if (miniBlockChain.length === 2) {
        if (classList.contains('numbers')) {
            miniBlockChain[2] = id;
            display(miniBlockChain[2]);
        }
        else if (classList.contains('operators')) {
            miniBlockChain[1] = id;
        }
    }
    else if (miniBlockChain.length === 3) {
        if (classList.contains('numbers')) {
            miniBlockChain[2] += id;
            display(miniBlockChain[2]);
        }
        else if (classList.contains('operators')) {
            let afterValue = whatToDo();
            miniBlockChain = [afterValue.toString(),id];
            display(miniBlockChain[0]);
        }
    }
    console.log(miniBlockChain);
}

function whatToDo() {
    let currentValue;
    let num1 = parseInt(miniBlockChain[0]), num2 = parseInt(miniBlockChain[2]);

    switch (miniBlockChain[1]) {
        case '+':
            currentValue = add(num1, num2);
            break;
        case '-':
            currentValue = subtract(num1, num2);
            break;
        case '*':
            currentValue = multiply(num1, num2);
            break;
        case '/':
            currentValue = divide(num1, num2);
            break;
    }
    return currentValue;
}

// start of basic operators
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
// end of basic operators

function resetDisplay(currentValue) {
    displayContainer.textContent = null;
}


function display(currentValue) {
    displayContainer.textContent = +currentValue;
}
