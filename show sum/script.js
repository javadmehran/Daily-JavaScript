// var Name='joo';
// let Number=7500;
// let IsExists=true;
// function javad(){
//     let x=150;
//     let y=302;
//     let c=x+y;
//     alert(c)
// }

const divEl = document.querySelector('.container')
const proId = document.querySelector('#product')
const search = document.querySelector('.btn')
let arr = [];
search.addEventListener('click', () => {
   const b = proId.value;
   arr = b.split("-");
   arr.map((async e => {
      if (e < 21) {
         const res = await fetch(`https://fakestoreapi.com/products/${e}`);
         const data = await res.json();
         divEl.innerHTML += `<div>
        <img src="${data.image}">
        <h2>${data.title}</h2>
        <span>${data.description.slice(0, 50)}...</span>
        </div>`

      } else {
         alert(`id: ${e} :not found`)
      }
   }))

})


// search.addEventListener('click',async()=>{
//     let productId=proId.value;
//     let number=divEl.split('-')
//     if(productId){
//         const res=await fetch(`https://fakestoreapi.com/products/${productId}`);
//         const data=await res.json();
//         console.log(data);
//        divEl.innerHTML=`<div>
//        <img src="${data.image}">
//        <h3>${data.title}</h3>
//        <span>${data.description.slice(0,50)}...</span>
//        </div>`
//     }
//     console.log(number);
// })
