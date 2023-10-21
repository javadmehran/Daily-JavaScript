const inputEl=document.querySelector('#inpEl')
const addBtn=document.querySelector('#add-num')
const maxBtn=document.querySelector('#max-btn')
const minBtn=document.querySelector('#min-btn')
const checkBtn=document.querySelector('#check-even')
const h1Num=document.querySelector('#num')
let num=[];
let eventCount=0;
addBtn.addEventListener('click',()=>{
    num.push(inputEl.value)
    inputEl.value='';
})
maxBtn.addEventListener('click',()=>{
    h1Num.textContent=Math.max(...num)
})
minBtn.addEventListener('click',()=>{
    h1Num.textContent=Math.min(...num)
})
const checkEven=(x)=>x%2==0
checkBtn.addEventListener('click',()=>{
    num.map((y)=>{
        checkEven(y)&&eventCount++
    })
    h1Num.textContent=`event count : ${eventCount}`
})