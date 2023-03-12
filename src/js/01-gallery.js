
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const containerEl = document.querySelector('.gallery')

galleryItems.forEach(item => {
    let div = document.createElement('div');
    div.classList.add('class', "gallery__item");
    div.innerHTML = `
<a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
    /></a> `
    containerEl.append(div)
    div.addEventListener('click', (e) => {
    e.preventDefault()
    const instance = basicLightbox.create(`
    <img src= "${item.original}">`)
    instance.show()
    instance = basicLightbox.create(`
    <img src='${e.target.src}'/>`);
        instance.show();
    })
})