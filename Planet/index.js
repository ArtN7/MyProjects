const popup = document.querySelector('.popup');
const buttonClose = popup.querySelector('.popup-button-close');
const buttonOrder = document.querySelectorAll('.button-order');
const body = document.querySelector('body');

for (const button of buttonOrder) {
    button.addEventListener('click', () => {
        popup.classList.remove('popup-display-none');
        body.classList.add('popup-is-work');
    })
}
buttonClose.addEventListener('click', () => {
    popup.classList.add('popup-display-none');
    body.classList.remove('popup-is-work');
})
