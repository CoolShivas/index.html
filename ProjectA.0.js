let hTitle = document.getElementById("header-title");
hTitle.style.borderBottom = "solid 3px #000";
console.log(hTitle);


let arr = document.getElementsByClassName("list-group-item");

for(var i=0; i<arr.length; i++)
{
    arr[i].style.color="green";
    arr[i].style.fontWeight='bold';
}
console.log(arr);