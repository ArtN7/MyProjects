let bigImage = document.querySelector('.gallary-img img');
let miniImages = document.querySelectorAll('.gallary-mini-img a img');
for (let image of miniImages) {
    image.addEventListener('click', function (evt) {
        evt.preventDefault();
        //Для изменения большой картинки в отделе галереи. Нужны фотографии большего разрешения
        // let path = image.src.split('/');
        // const nameImage = path.at(-1)
        //     .split('.')[0];
        // const renameImage = nameImage.split('-')[0] + '.jpg';
        // path[path.length - 1] = renameImage;
        // bigImage.src = path.join('/');
    });
}