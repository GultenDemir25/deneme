const keypadEl= document.querySelector(".calculator .keypad");
const operationsEl =document.querySelector(".calculator .operations");
const resultEl = document.querySelector("calculator .result");

keypadEl.addEventListener("click", (e)=>{
    const buttonVal=e.target.innerText;

    if(buttonVal=== "="){
        const result=eval(operationsEl.innerText);
        resultEl.innerText=result;
    }
    else{
        operationsEl.innerText+=buttonVal
    }
    operationsEl.innerText=buttonVal;
})