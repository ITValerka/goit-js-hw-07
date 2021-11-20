import { galleryItems } from './gallery-items.js'
const galleryItemsList = document.querySelector('.gallery')
function galleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a 
      class="gallery__item" 
      href="${original}"
      >
      <img 
      class="gallery__image" 
      src="${preview}" 
      alt="${description}"  
      />
    </a>`
    })
    .join('')
}
galleryItemsList.insertAdjacentHTML('afterbegin', galleryItem(galleryItems))

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionType: 'attr',
  captionDelay: 250,
})
lightbox()
console.log(galleryItems)
