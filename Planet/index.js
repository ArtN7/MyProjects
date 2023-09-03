const popup = document.querySelector('.popup');
const buttonClose = popup.querySelector('.popup-button-close');
const buttonOrder= document.querySelector('.button-order');
const body = document.querySelector('body');

buttonOrder.addEventListener('click', () => {
    popup.classList.remove('popup-display-none');
    body.classList.add('popup-is-work')
})
buttonClose.addEventListener('click', () => {
    popup.classList.add('popup-display-none');
    body.classList.remove('popup-is-work')
})