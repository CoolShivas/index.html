let filter = document.getElementById("filter");
// console.log(filter);
let form = document.getElementById('addForm');
// console.log(form);
let product = document.getElementById("items");
// console.log(item);
let itemList = document.getElementsByClassName("list-group-item");
// console.log(itemList);



// // Adding edit button to all the list tag or especially to those who exist previously;
for(let i=0; i<itemList.length; i++)
{
    // // Creation of edit button with class;
    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm float-right mr-2 edit';
    // // Pushing text node to editBtn;
    editBtn.appendChild(document.createTextNode('edit'));
    // // And finally Pushing inside the itemlist or list-group-item tags;
    itemList[i].appendChild(editBtn);
}



// // Formation of form event;
form.addEventListener('submit' , onSubmit);
// // Formation of form function to add the new items;
function onSubmit(a){
    a.preventDefault();
    // console.log(1234456);

    // // Addition of newItem in the li tag with the help of input id="star";
    let newItem = document.getElementById("star").value;
    // // Addition of description in the li tag with the help of input id="starMega";
    let description = document.getElementById("starMega").value;

    // // Formation of new li element tag with class;
    let li = document.createElement('li');
    li.className = "list-group-item";
    // console.log(li);

    // // Pushing the text node inside the li tag;
    li.appendChild(document.createTextNode(newItem));
    // // Pushing the text node inside the li tag;
    li.appendChild(document.createTextNode(" "+description));

    // // Formation of delete button with class in the li tag;
    let delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    
    // // Pushing the text node inside the li tag;
    delBtn.appendChild(document.createTextNode('X'));

    // // Pushing the delBtn inside the li tag;
    li.appendChild(delBtn);
    
    // // Formation of edit button with class inside the li tag;
    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm float-right mr-2 edit';

    // // Pushing the text node inside the editBtn;
    editBtn.appendChild(document.createTextNode('edit'));

    // // Pushing the editBtn inside the li tag;
    li.appendChild(editBtn);


    // // Pushing the li tag inside the ul tag;
    product.appendChild(li);
}


// // Formation of delete or remove event;
product.addEventListener('click' , onDeleteRemove);
// // Formation of delete or remove function;
function onDeleteRemove(b){
    // // Targetting the removing tag;
    if(b.target.classList.contains('delete'))
    {
        // // Making the confirmation before deleting;
        if(confirm('Surely you want to remove'))
        {
            // // Now removing it with the help of parent element;
            let arr = b.target.parentElement;
            product.removeChild(arr);
        }
    }
}


// // Formation of filter or search event;
filter.addEventListener('keyup' , onSearchFilter)
// // Formation of filter or search function;
function onSearchFilter(c){
    // // Converting the values in upper case to lower case ;
    let str = c.target.value.toLowerCase();
    // console.log(str);
    let revStr = product.getElementsByTagName('li');
    // // Now converting HTML collection to array;
    Array.from(revStr).forEach(function(d){
        // // It will search with the help of firstChild textContent for the first input tag;
        let arr = product.firstChild.textContent;
        // // It will search with the help of childNodes[1] textContent for the secong input tag;
        let brr = product.childNodes[1].textContent;
        // // Comparing both the condition and one of it is true and will execute;
        if(arr.toLowerCase().indexOf(str) !== -1 || brr.toLowerCase().indexOf(str) !== -1)
        {
            // // If condition satisfy then the block will appear on the screen;
            d.style.display = 'block';
        }
        else
        {
            // // If condition dis-satisfy then the block will not appear on the screen;
            d.style.display = 'none';
        }
    })

}