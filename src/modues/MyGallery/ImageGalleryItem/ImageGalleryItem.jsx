import css from "./imageGalleryItem.module.css"

const ImageGalleryItem = ({ largeImageURL, webformatURL, showImage }) => {
  return (
    <li
      className={css.imageGalleryItem}
      onClick={() => {
        showImage(largeImageURL);
      }}
    >
      <img className={css.imageGalleryItemImage} src={webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;