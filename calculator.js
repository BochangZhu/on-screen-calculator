let add = (a,b) => a + b;
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


const numbers = document.querySelector(".numbers");

for (let num = 1; num <= 9; num ++){
    const curr_num = document.createElement("div");
    curr_num.textContent = num;
    curr_num.classList.add(`num${num}`, "number");
    curr_num.addEventListener("click", e =>{
        num1 += e.target.textContent;
        alert(num1);
    });
    
    numbers.appendChild(curr_num);
}