//===============Color theme toggle switch================
const themeToggles = document.querySelectorAll(".custom-radio-button")
const gray = document.querySelector("#gray");
const violet = document.querySelector("#violet");

function themeColorChanger (color) {
    const themeColor = document.documentElement.setAttribute("data-theme", `${color}`)
    const localStorageTheme = localStorage.setItem("data-theme", `${color}`);
    
    if(color === `${color}`){
        themeColor;
        localStorageTheme; 
    }
    if(color === `${color}`){
        themeColor;
        localStorageTheme;
    }
    if(color === `${color}`){
        themeColor;
        localStorageTheme;
    }
}

//to check for the theme selected
themeToggles.forEach(themeToggle => {
    themeToggle.addEventListener("click", (e) => {
        themeColorChanger(e.target.id);
    })
})

//Check local storage for theme
const currentTheme = localStorage.getItem("data-theme");
 if (currentTheme){
    document.documentElement.setAttribute("data-theme", currentTheme)
 }
 if (currentTheme === "violet"){
    violet.checked = true;
 }
 if (currentTheme === "gray"){
    gray.checked = true;
 }
//==========Color theme toggle switch==============


//=============Calculator Functionality==============
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operation]");
const decimalButton = document.querySelector("[data-decimal]")
const resetButton = document.querySelector("[data-resetAll]")
const display = document.querySelector(".calculator-display h1");
const deleteButton = document.querySelector("[data-delete]")

let firstValue;
let operatorValue;
let secondValue = false;

const calculate = {
    "/": (firstValue, SecondValue) => firstValue / SecondValue,
    "*": (firstValue, SecondValue) => firstValue * SecondValue,
    "+": (firstValue, SecondValue) => firstValue + SecondValue,
    "-": (firstValue, SecondValue) => firstValue - SecondValue,
    "=": (firstValue, SecondValue) => SecondValue,
}

const sendNumber = function (number){
    if (secondValue) {
        display.textContent = number;
        secondValue = false;
    } else{
        const screenDisplay = display.textContent
        if(screenDisplay === "0") display.textContent = number;
        else display.textContent = display.textContent + number;
    }
}

const sendOperator= function (operator){
    const currentValue = Number(display.textContent)
    if(operatorValue && secondValue){
        operatorValue = operator;
        return;
    }    
    if(!firstValue){
        firstValue = currentValue
    }  else { 
        const showCalculation = calculate[operatorValue](firstValue, currentValue)
        display.textContent = showCalculation.toLocaleString("en");
        firstValue = showCalculation; 
    }
        
    secondValue = true;
    operatorValue = operator;
}

const sendDecimal = function (decimal) {
    if(display.textContent.includes(".")) return
    else display.textContent = `${display.textContent}${decimal}`;  
}

const resetAllValue = function () {
    display.textContent = "0";
    firstValue;
    operatorValue;
    secondValue = false;
}

const deleteDisplayValue = function(){
    let del = display.textContent;
    display.textContent = del.slice(0, -1);
    if (display.textContent === ""){
        display.textContent = "0";
    }
}

//check which number is pressed
numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", () => {
       sendNumber(numberButton.textContent);
    })
})

//check which operator is pressed
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", () => {
        sendOperator(operatorButton.textContent);  
    })
})

//decimal button
decimalButton.addEventListener("click", () => {
    sendDecimal(decimalButton.textContent);  
})

//reset button
resetButton.addEventListener("click", () => {
    resetAllValue()
})

//delete button
deleteButton.addEventListener("click", () => {
    deleteDisplayValue();
})