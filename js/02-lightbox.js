import { galleryItems } from './gallery-items.js'
const galleryItemsList = document.querySelector('.gallery')
function galleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    })
    .join('')
}
galleryItemsList.insertAdjacentHTML('afterbegin', galleryItem(galleryItems))
galleryItemsList.addEventListener('click', (e) => {
  e.preventDefault()
  if (e.target.nodeName !== 'IMG') {
    return
  }
  let simpleLightbox = new SimpleLightbox('.gallery a', {})
})
console.log(galleryItems)
