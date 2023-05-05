// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const list = document.querySelector('.gallery');

const makeGallery = item => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');
  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.setAttribute('href', `${item.original}`);
  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.setAttribute('src', `${item.preview}`);
  image.setAttribute('alt', `${item.description}`);
  image.setAttribute('title', `${item.description}`);
  link.append(image);
  listItem.append(link);

  return listItem;
};

const gallery = galleryItems.map(makeGallery);

list.append(...gallery);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
