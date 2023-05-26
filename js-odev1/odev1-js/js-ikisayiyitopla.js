const txtNum1=document.querySelector("#txtNum1")
const txtNum2=document.querySelector("#txtNum2")
const lblResult=document.querySelector("#lblResult span")
function sum(){
   const num1=txtNum1.value;
   const num2=txtNum2.value;

   if(!num1 || !num2) return;

   const result=Number(num1)+Number(num2)
   lblResult.innerHTML=result;

}