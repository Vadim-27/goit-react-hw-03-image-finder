import PropTypes from 'prop-types';
import css from './imageGallery.module.css';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ items, showImage }) => {
  return (
    <ul className={css.imageGallery}>
      {items.map(({ id, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          showImage={showImage}
          largeImageURL={largeImageURL}
          webformatURL={webformatURL}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
  showImage: PropTypes.func.isRequired,
};
