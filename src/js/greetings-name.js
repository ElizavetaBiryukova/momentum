const nameInput = document.querySelector('.name');

nameInput.placeholder = '[Enter name]'

nameInput.value = localStorage.getItem('name');
nameInput.oninput = () => {
    localStorage.setItem('name', nameInput.value)
};
