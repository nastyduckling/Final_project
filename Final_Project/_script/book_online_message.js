(function(){
    const selectElement = document.querySelector('.main-section-book');
    const btnElement = selectElement.querySelector('.book-btn');
    const btnElement2 = selectElement.querySelector('.book-btn2');
    const btnElement3 = selectElement.querySelector('.book-btn3');
    const btnCloesed = selectElement.querySelector('.book-online-message-close');
    const messageActive = selectElement.querySelector('.book-online-message');

    function btnClick(){
        console.log('Cliked batton');
        messageActive.style.opacity = '1';
    }

    function btnClickCloese(){
        console.log('Cliked batton');
        messageActive.style.opacity = '0';
    }

    btnElement.addEventListener('click', btnClick);
    btnElement2.addEventListener('click', btnClick);
    btnElement3.addEventListener('click', btnClick);

    btnCloesed.addEventListener('click', btnClickCloese);

})();

