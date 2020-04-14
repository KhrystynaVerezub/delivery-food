const cartButton = document.querySelector('#cart-button');/*клик на кнопку Корзина*/
const modal = document.querySelector('.modal');/*объявление переменной для модального окна*/
const close = document.querySelector('.close');/*объявление переменной для кнопки Закрыть*/

cartButton.addEventListener('click', toggleModal);
    /*при клике на Корзину вызывается команда toggleModal и открывае список*/

close.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('is-open');
    /*при клике на Крестик вызывается команда toggleModal и закрывает список*/
}

/*активируем библиотеку WOW JS*/
new WOW().init();