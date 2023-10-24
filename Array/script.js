// let Name='iman';
// let Family='jonas'
// document.write(Name+' '+Family);
// let Names=['Ali','jim','mohammad','sara']
// let Names2=Names.sort();
// document.write("<br/>");
// document.write(Names.length);
// document.write("<br/>");
// document.write(Names[1]);



// let myArray=new Array('iman','Ali',20)
// myArray[2]='mina';
// document.write(myArray[2])

// let productCount = 3;
// let productPrice = 1000;
// let credit = 1200;
// let buy = productCount > 4 || credit > productPrice;
// console.log(buy);

// let javad='mona';
// switch(javad){
//     case 'mehrpan':
//         console.log('yes');
//         break;
//     case 'number':
//         console.log('no');
//         break;
//     case 'mona':
//         console.log('its mona');
//         break;
//     default:
//         console.log('default');    
// }
// let i=0;
// while(i<5){
//     console.log(i);
//    i++;
// }
// const person={
//     names:'javad',
//     family:'mehran',
//     age:29
// }
// for(let key in person){
//     // console.log(key);
//     console.log(person[key]);
// }
// const colors=['red','green','blu'];
// for(let color in colors){
//     console.log(colors[color]);
// }
let i=0;
while(i<=10){
    if(i==7){
        i++;
        continue;
    }
    console.log(i);
    i++;
}