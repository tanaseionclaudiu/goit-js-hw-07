import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");

galleryItems.map((galleryItem) => {
   
    const newListItem = document.createElement('li');   // <li></li>
    newListItem.className = "gallery__item";

    const listItemLink = document.createElement('a');   // <a></a>
    listItemLink.className = "gallery__link";
    listItemLink.href = galleryItem.original;
    
    const itemImg = document.createElement('img');   // <img></img>
    itemImg.className = "gallery__image";
    itemImg.src = galleryItem.preview;
    itemImg.dataset.source = galleryItem.original;
    itemImg.alt = galleryItem.description;

    listItemLink.append(itemImg);
    newListItem.append(listItemLink);
    gallery.append(newListItem);
});

const instance = basicLightbox;

gallery.addEventListener('click', (event) => {
    event.preventDefault();
    instance.create(`<img src="${event.target.dataset.source}" alt="${event.target.alt}" >`).show()
});



window.addEventListener("keydown", logKey);

function logKey(e) {
    console.log(` ${e.code}`);
    if(e.key === "Escape") {
        // write your logic here.
        //instance.close();
    }
    
}
