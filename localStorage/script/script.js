// localStorage.clear();
// localStorage.setItem('name','java');
// localStorage.setItem('lname','mehran')
// localStorage.removeItem('name')
// // console.log(localStorage.getItem('lname'));
// let obgL={
//     fname:'javad',
//     lname:'mehran',
//     age:29
// }
// localStorage.setItem('obg',JSON.stringify(obgL));
// console.log(JSON.parse(localStorage.getItem('obg')));
// sessionStorage.setItem('name','javad')
const userInp=document.querySelector('#user');
const passInp=document.querySelector('#pass');
const btnS=document.querySelector('#btnSubmit');

// fetch('https://fakestoreapi.com/users')
//             .then(res=>res.json())
//             .then(json=>console.log(json))



btnS.addEventListener('click',()=>{
    localStorage.clear()
    fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        body:JSON.stringify({
            username:userInp.value,
            password:passInp.value
        }),
        headers:{
            'content-type':'application/json'
        }
    })
    .then(res=>res.json())
    .then(data=>localStorage.setItem('token',data.token))
    .catch(err=>alert('wrong'))
})
document.cookie="javad;expires=Fri,3,Nov,2023 12:00:00 UTC"