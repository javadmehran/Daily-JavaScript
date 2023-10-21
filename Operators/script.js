let lblEl=document.getElementById('lbl')
function Sum(){
    let num1=+document.getElementById('num1').value;
    let num2=+document.getElementById('num2').value;
    // num1=parseInt(num1);
    // num2=parseInt(num2);
    let sum=num1+num2;
lblEl.innerHTML=sum;
}
let flo=parseFloat('25.3');
let bool=Boolean(0);
console.log(flo);
console.log(bool);