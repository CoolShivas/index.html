function localStorageSaving(event){
    event.preventDefault();
    const nameInput = event.target.fullname.value;
    const emailInput =event.target.userid.value;

    localStorage.setItem('name', nameInput);
    localStorage.setItem('email',emailInput);

    nameInput.value='';
    emailInput.value='';
}