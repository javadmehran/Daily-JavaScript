localStorage.clear();
localStorage.setItem('name','java');
localStorage.setItem('lname','mehran')
localStorage.removeItem('name')
// console.log(localStorage.getItem('lname'));
let obgL={
    fname:'javad',
    lname:'mehran',
    age:29
}
localStorage.setItem('obg',JSON.stringify(obgL))
console.log(JSON.parse(localStorage.getItem('obg')));