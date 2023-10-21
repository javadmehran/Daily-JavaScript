const inputEl=document.querySelector('#inpEl')
const addBtn=document.querySelector('#add-num')
const maxBtn=document.querySelector('#max-btn')
const minBtn=document.querySelector('#min-btn')
const h1Num=document.querySelector('#num')
let num=[];
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