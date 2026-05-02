// basic calculator functions
function round3dp(num){
    return Math.round(num * 1000)/ 1000;
}

let add = (a,b) => round3dp(+a + +b);
let substract = (a,b) => round3dp(a - b);
let multiply = (a,b) => round3dp(a * b);
let divide = (a,b) => b ? round3dp(a / b) : "Division By Zero";
let power = (a,b) => round3dp(a ** b);

// Helper func to perform different calculations
let operate = (m,a,b) => {
    switch (m){
        case "+":
            return add(a,b);
        case "-":
            return substract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            if (typeof divide(a,b) == 'string'){
                display.textContent = "DIVISION BY ZERO"
                clearBuffer();
                return "0";
            };
            return divide(a,b);
        case "**":
            return power(a,b);
        default:
            // invalid calculation would to led restart of board
            display.textContent = "SYNTAX ERROR"
            clearBuffer();
            return "0";

    }
};

// global variables
let num1 = "0";
let operator = "";
let num2 = "";

// special keywords
let num1Turn = 1;
let override = 1;

// Init list
let opList = [{text : "+", func : add}, {text : "-", func : substract}, {text: "*", func: multiply }, {text:"/", func:divide}, {text:"**", func:power}];

// Create node variables
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
const display = document.querySelector(".display");

// Helper func to display screen
function updateDisplay(){
    display.textContent = num1 + operator + num2;
}

// helper func to clear buffer
function clearBuffer(){
    num1Turn = 1;
    override = 1;

    num1 = "0";
    operator = "";
    num2 = "";
}

// Create the nine numbers
for (let num = 0; num <= 9; num ++){
    const curr_num = document.createElement("div");
    // store number as textcontent
    curr_num.textContent = num;
    // add proper classlists
    curr_num.classList.add(`num${num}`, "number", "border");
    curr_num.addEventListener("click", e =>{
        // update when its num1's turn override after 
        if (num1Turn){
            if (override){
                num1 = e.target.textContent;
                override = 0;
                updateDisplay();
            }
            else{
                num1 += e.target.textContent;
                updateDisplay();
            }
        }
        else{
            num2 += e.target.textContent;
            updateDisplay();
        }
        
    });
    
    numbers.appendChild(curr_num);
}

let dotSign = document.createElement("div");
dotSign.textContent = ".";
dotSign.classList.add("number", "border");
dotSign.addEventListener("click", e =>{
    if (num1Turn){
        if (override){
            num1 = e.target.textContent;
            override = 0;
            updateDisplay();
        }
        else{
            num1 += e.target.textContent;
            updateDisplay();
        }
    }
    else{
        num2 += e.target.textContent;
        updateDisplay();
    }
    
});

let clear = document.createElement("div");
clear.textContent = "CE";
clear.classList.add("number", "border");
clear.style["background-color"] = "#ffb5b5";
clear.addEventListener("click", ()=> {
    clearBuffer();
    updateDisplay();
})

numbers.appendChild(dotSign);
numbers.appendChild(clear);


opList.forEach(op=>{
    const currOp = document.createElement("div");
    // assign correct operators
    currOp.textContent = op.text;
    currOp.addEventListener("click", (e)=>{
        // 112 (current state, enter or leave blank for num1)
        if (num2 == ""){
            num1Turn = 0; // goes to num2's turn
            operator = op.text;
            updateDisplay();
        }
        else{
            num1 = operate(operator, num1, num2);
            operator = op.text;
            num2 = "";
            updateDisplay();
        }
    })
    currOp.classList.add("operator", "border");
    operators.appendChild(currOp);

});

const eqSign = document.createElement("div");
eqSign.textContent = "=";
eqSign.addEventListener("click", () => {
    num1 = operate(operator, num1, num2);
    operator = "";
    num2 = "";
    override = 1;
    num1Turn = 1;
    updateDisplay();
})
eqSign.classList.add("border", "eqSign");
operators.appendChild(eqSign);
