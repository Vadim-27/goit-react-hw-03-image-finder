import PropTypes from 'prop-types';
import css from './imageGalleryItem.module.css';

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

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  showImage: PropTypes.func.isRequired,
};
