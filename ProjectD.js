// let arr = document.querySelector(".list-group-item:nth-child(2)");
// arr.style.backgroundColor = "green";

// let brr = document.querySelector(".list-group-item:nth-child(3)");
// brr.style.color = 'white';


// let crr = document.querySelectorAll("list-group-item:nth-child(3)");
// crr.style.color = 'green';

let odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let i=0; i<odd.length; i++)
{
    odd[i].style.backgroundColor = 'green';
}


