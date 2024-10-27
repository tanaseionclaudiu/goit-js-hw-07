import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryUl = document.querySelector(".gallery");

galleryItems.map((galleryItem) => {
   
    const newListItem = document.createElement('li');   // <li></li>
    newListItem.className = "gallery__item";

    const listItemLink = document.createElement('a');   // <a></a>
    listItemLink.className = "gallery__link";
    listItemLink.href = galleryItem.original;
    
    const itemImg = document.createElement('img');   // <img></img>
    itemImg.className = "gallery__image";
    itemImg.src = galleryItem.preview;
    //itemImg.title = galleryItem.description;
    itemImg.alt = galleryItem.description;

    listItemLink.append(itemImg);
    newListItem.append(listItemLink);
    galleryUl.append(newListItem);
});

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', 
    fadeSpeed: 250
});

gallery.on('show.simplelightbox', function () {
	console.log('aaaa');
})


console.log(gallery);