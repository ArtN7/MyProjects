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


const buttonsMoreInfo = document.querySelectorAll('.main-question-button-more-info');
const answer = document.querySelectorAll('.main-question-answer');
for (let i = 0; i < buttonsMoreInfo.length; i += 1) {
    const buttonPlus = buttonsMoreInfo[i].querySelector('.main-question-button-plus-closed');
    buttonsMoreInfo[i].addEventListener('click', () => {
        if (answer[i].classList.contains('question-hidden')){
            answer[i].classList.remove('question-hidden');
            buttonPlus.classList.add('main-question-button-plus-open');
            buttonPlus.classList.remove('main-question-button-plus-closed');
        } else {
            answer[i].classList.add('question-hidden');
            buttonPlus.classList.remove('main-question-button-plus-open');
            buttonPlus.classList.add('main-question-button-plus-closed');
        }

    })
}