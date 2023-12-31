var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

function addItem(e){
  e.preventDefault();
  var newItem = document.getElementById('item').value;

  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));

  
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);

    
  let editBtn = document.createElement('button');
  editBtn.className = 'btn btn-info btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode('/'));
  li.appendChild(editBtn);
  itemList.appendChild(li);
}

itemList.addEventListener('click', removeItem);

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
