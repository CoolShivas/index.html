// let arr = document.querySelector('#items');

// console.log(arr.parentElement);

// console.log(arr.lastElementChild);

// console.log(arr.lastChild);

// let brr = document.createElement('li');
// brr.setAttribute('class','list-group-item');
// console.log(brr);

// let crr = document.createTextNode('Item 5');
// brr.appendChild(crr);

// console.log(arr.lastChild);


// console.log(arr.firstElementChild);

// console.log(arr.firstChild);

// console.log(arr.nextSibling);

// console.log(arr.nextElementSibling);

// console.log(arr.previousSibling);

// console.log(arr.previousElementSibling);


let crr = document.createElement('div');
console.log(crr);
crr.setAttribute('class','new');
crr.setAttribute('id','nw')

let drr = document.createTextNode('HEllo');
crr.appendChild(drr);

let err = document.querySelector('header .container');
//console.log(err);
let frr = document.querySelector('header h1');
//console.log(frr);
err.insertBefore(crr,frr);
crr.style.fontSize = '20px';


let lrr = document.getElementsByTagName('li');
lrr[0].textContent = 'HEllo World';


let grr = document.createElement('li');
console.log(grr);
grr.setAttribute('class','list-group-item');

let hrr = document.createTextNode('Item 1');
grr.appendChild(hrr);



let irr = document.querySelector('ul .list-group-item');
//console.log(irr);
let jrr = document.querySelector('li list-group-item:first-child');
// console.log(jrr);
irr.insertBefore(grr,jrr);


// let odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0; i<odd.length; i++)
// {
//     odd[i].style.backgroundColor = '#ccc';
// }

let krr = document.querySelector('#items');
// console.log(krr.parentNode);
krr.parentNode.style.backgroundColor = '#ccc';


