const popup = document.querySelector('.popup');
const buttonClose = document.querySelectorAll('.popup-button-close');
const buttonOrder = document.querySelectorAll('.button-order');
const buttonSend = document.querySelector('.popup-button-send');
const body = document.querySelector('body');
const popupConfirmation = document.querySelector('.popup-confirmation');

for (const button of buttonOrder) {
    button.addEventListener('click', () => {
        popup.classList.remove('popup-display-none');
        body.classList.add('popup-is-work');
    })
}
buttonSend.addEventListener('click', () => {
})
for (const button of buttonClose) {
    button.addEventListener('click', () => {
        popup.classList.add('popup-display-none');
        body.classList.remove('popup-is-work');
    })
}
