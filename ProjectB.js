console.log("Hello Universe");
let arr = document.getElementsByClassName("list-group-item");

arr[2].style.backgroundColor='green';
console.log(arr[2]);

for(let i=0; i<arr.length; i++)
{
    arr[i].style.fontWeight='bold';
    arr[i].style.color='red';
}

console.log(arr);
