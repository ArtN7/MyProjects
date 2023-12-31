const popup = document.querySelector('.popup-order');
const buttonClose = document.querySelectorAll('.popup-button-close');
const buttonOrder = document.querySelectorAll('.button-order');
const buttonsSubmit = document.querySelectorAll('.popup-submit');
const body = document.querySelector('body');
const popupConfirmation = document.querySelector('.popup-confirmation');
const buttonOK = popupConfirmation.querySelector('.button-ok');
for (const button of buttonOrder) {
    button.addEventListener('click', () => {
        popup.classList.remove('popup-display-none');
        body.classList.add('popup-is-work');

    })
};
for (const button of buttonsSubmit) {
    button.addEventListener('click', (evt) => {
        evt.preventDefault();
        body.classList.add('popup-is-work');
        popup.classList.add('popup-display-none');
        popupConfirmation.classList.remove('popup-confirmation-order');
    })
};

for (const button of buttonClose) {
    button.addEventListener('click', () => {
        popup.classList.add('popup-display-none');
        body.classList.remove('popup-is-work');
        popupConfirmation.classList.add('popup-confirmation-order');
    })
};
buttonOK.addEventListener('click', () => {
    popupConfirmation.classList.add('popup-confirmation-order');
    body.classList.remove('popup-is-work');
});

let buttonVideo = '';
let videoPopup = '';
if (document.querySelector(".button-video") !== null) {
    buttonVideo = document.querySelector('.button-video');
    videoPopup = document.querySelector('.popup-video-index');
    buttonVideo.addEventListener('click', () => {
        body.classList.add('popup-is-work');
        videoPopup.classList.remove('popup-video-none');
    })
}
body.addEventListener('keydown', (e) => {
	if( e.key === "Escape" ){ // код клавиши Escape, но можно использовать e.key
        if (body.querySelector(".button-video") !== null) {
            videoPopup.pause();
            videoPopup.classList.add('popup-video-none');
        }
        if (popup.classList.contains('popup-display-none')) {
            body.classList.remove('popup-is-work');
            popupConfirmation.classList.add('popup-confirmation-order');
        } else {
            popup.classList.add('popup-display-none');
            body.classList.remove('popup-is-work');
        }
	}
});

if (body.querySelector(".gallary-main-img") !== null) {
    const gallaryImages = body.getElementsByClassName('gallary-main-img');
    const firstImageGallary = body.querySelector('.first-image-gallary');
    const slideToLeft = body.querySelector('.slide-to-left');
    const slideToRight = body.querySelector('.slide-to-right');
    let id = 0;
    const imagesLength = gallaryImages.length - 1;
    firstImageGallary.textContent = '0' + gallaryImages[id].id;

    slideToRight.addEventListener('click', () => {
        id += 1;
        if (id > imagesLength) {
            gallaryImages[imagesLength].classList.add('gallery-img-none');
            id = 0;
            gallaryImages[id].classList.remove('gallery-img-none');
            firstImageGallary.textContent = '0' + gallaryImages[id].id;
            return;
        } 
        firstImageGallary.textContent = '0' + gallaryImages[id].id;
        gallaryImages[id].setAttribute('src', gallaryImages[id].getAttribute('src'));
        gallaryImages[id - 1].classList.add('gallery-img-none');
        gallaryImages[id].classList.remove('gallery-img-none');

    });

    slideToLeft.addEventListener('click', () => {
        id -= 1;
        if (id < 0) {
            gallaryImages[id + 1].classList.add('gallery-img-none');
            id = imagesLength;
            gallaryImages[id].classList.remove('gallery-img-none');
            firstImageGallary.textContent = '0' + gallaryImages[id].id;
            return;
        } 
        firstImageGallary.textContent = '0' + gallaryImages[id].id;
        gallaryImages[id].setAttribute('src', gallaryImages[id].getAttribute('src'));
        gallaryImages[id + 1].classList.add('gallery-img-none');
        gallaryImages[id].classList.remove('gallery-img-none');
    });
}

const glass = body.querySelector('.div-glass');
glass.addEventListener('click', (e) => {
    
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