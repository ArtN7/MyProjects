const popup = document.querySelector('.popup-order');
const buttonClose = document.querySelectorAll('.popup-button-close');
const buttonOrder = document.querySelectorAll('.button-order');
const buttonSubmit = document.querySelector('.popup-submit');
const body = document.querySelector('body');
const popupConfirmation = document.querySelector('.popup-confirmation');
const buttonOK = popupConfirmation.querySelector('.button-ok');
for (const button of buttonOrder) {
    button.addEventListener('click', () => {
        popup.classList.remove('popup-display-none');
        body.classList.add('popup-is-work');
    })
}
buttonSubmit.addEventListener('click', (evt) => {
    evt.preventDefault();
    popup.classList.add('popup-display-none');
    popupConfirmation.classList.remove('popup-confirmation-order');
})
for (const button of buttonClose) {
    button.addEventListener('click', () => {
        popup.classList.add('popup-display-none');
        body.classList.remove('popup-is-work');
        popupConfirmation.classList.add('popup-confirmation-order');
    })
}
buttonOK.addEventListener('click', () => {
    popupConfirmation.classList.add('popup-confirmation-order');
    body.classList.remove('popup-is-work');
})