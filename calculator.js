let add = (a,b) => +a + +b;
let substract = (a,b) => a - b;
let multiply = (a,b) => a * b;
let divide = (a,b) => a / b;
let power = (a,b) => a ** b;

let operate = (m,a,b) => {
    switch (m){
        case "+":
            return add(a,b);
        case "-":
            return substract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        case "**":
            return power(a,b);
    }
};

let num1 = "";
let operator = "";
let num2 = "";

let opList = [{text : "+", func : add}, {text : "-", func : substract}, {text: "*", func: multiply }, {text:"/", func:divide}, {text:"**", func:power}];
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");

for (let num = 1; num <= 9; num ++){
    const curr_num = document.createElement("div");
    curr_num.textContent = num;
    curr_num.classList.add(`num${num}`, "number", "border");
    curr_num.addEventListener("click", e =>{
        num1 += e.target.textContent;
        alert(num1);
    });
    
    numbers.appendChild(curr_num);
}

opList.forEach(op=>{
    const currOp = document.createElement("div");
    currOp.textContent = op.text;
    currOp.addEventListener("click", (e)=>{
        operator = op.text;
        alert(operator);
    })
    currOp.classList.add("operator", "border");
    operators.appendChild(currOp);

});

const eqSign = document.createElement("div");
eqSign.textContent = "=";
eqSign.addEventListener("click", e=>{   
})
eqSign.classList.add("border", "eqSign");
operators.appendChild(eqSign);
