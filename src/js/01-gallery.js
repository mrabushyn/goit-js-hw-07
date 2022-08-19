import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListItem = document.querySelector(".gallery");

const createList = createListItem(galleryItems);

function createListItem(items) {
    return items
        .map(
            ({ preview, original, description }) =>
                `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`
        )
        .join("");
}

galleryListItem.insertAdjacentHTML("beforeend", createList);

galleryListItem.addEventListener("click", largePicture);

function largePicture(e) {
    e.preventDefault();
    if (!e.target.classList.contains("gallery__image")) 
    return;
        const showLargePic = basicLightbox.create(`<img src="${e.target.dataset.source}">`)
        showLargePic.show()
    
}
