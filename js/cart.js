const promocodeOpen = document.querySelector('.summary-promocode');
const promocodeContent = document.querySelector('.promocode-content');
const promocodeInput = document.querySelector('.promocode-inp');
const promocodeClose = document.querySelector('.promocode-cross');

promocodeOpen.addEventListener('click', function(){
    promocodeContent.classList.add("promocode-content-visible");
});

promocodeClose.addEventListener('click', function(){
    promocodeInput.value = '';
    promocodeContent.classList.remove("promocode-content-visible");
});
