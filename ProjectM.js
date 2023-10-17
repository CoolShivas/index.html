let arr = document.querySelector('.container');
arr.parentElement.style.backgroundColor = '#ccc';

let brr = document.querySelector('form');
brr.parentElement.style.backgroundColor = '#000';


function localPageStoring(event){
    event.preventDefault();
     
    const objNew = {
        name : event.target.userName.value,
        email : event.target.userId.value
    }
    localStorage.setItem(objNew.name , JSON.stringify(objNew));
    storageToPageLocal(objNew);
}

function storageToPageLocal(objNew){
    const parentElement = document.getElementById("candidates");
    const childElement = document.createElement('li');
    childElement.className = 'list-group-item';
    childElement.appendChild(document.createTextNode(`${objNew.name} : ${objNew.email}`));

    let delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right mr-3 delete';
    delBtn.value = 'delete';
    delBtn.appendChild(document.createTextNode('DELETE'));
    
    delBtn.onclick = () => {
        localStorage.removeItem(objNew.name);
        parentElement.removeChild(childElement);
    }
    childElement.appendChild(delBtn);


    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-info btn-sm float-right mr-3 edit';
    editBtn.value = 'edit';
    editBtn.appendChild(document.createTextNode('EDIT'));

    editBtn.onclick = () => {
        localStorage.removeItem(objNew.name);
        parentElement.removeChild(childElement);
        document.getElementById('fn').value = objNew.name;
        document.getElementById('mail').value = objNew.email;
    }
    childElement.appendChild(editBtn);



    parentElement.appendChild(childElement);

}