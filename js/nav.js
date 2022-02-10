const dropdown = document.querySelector('#dropdown');
const avatar = document.querySelector('#drop-btn');

avatar.addEventListener('click', function(){
    dropdown.classList.toggle("dropdown-menu");
});

