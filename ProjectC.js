let arr = document.getElementsByClassName("list-group-item");
arr[0].style.color = 'orange';
arr[0].style.fontWeight = 'bold';
console.log(arr[0]);

arr[3].style.backgroundColor = 'yellow';
console.log(arr[3]);

arr[1].innerText = 'Hagona';
arr[1].style.borderBottom = 'solid 3px #000';
console.log(arr[1]);

arr[2].textContent = 'Matata';
arr[2].style.color = 'purple';
console.log(arr[2]);




let brr = document.getElementsByTagName('li1');
brr[0].style.color = 'orange';
brr[0].style.fontWeight = 'bold';
console.log(brr[0]);

brr[1].innerText = 'Hagona';
brr[1].style.borderBottom = 'solid 3px #000';
console.log(brr[1]);

brr[2].textContent = 'Matata';
brr[2].style.color = 'purple';
console.log(brr[2]);

brr[3].style.backgroundColor = 'yellow';
console.log(brr[3]);