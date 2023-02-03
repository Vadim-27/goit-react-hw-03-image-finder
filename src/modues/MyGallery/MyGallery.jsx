import { Component } from 'react';
import searchImages from 'components/services/gallery-api';

import Modal from 'components/Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';



import Searchbar from './Searchbar/Searchbar';
import css from './my-gallery.module.css';

class MyGallery extends Component {
  state = {
    search: '',
    items: [],
    page: 1,
    error: null,
    loading: false,
    showModal: false,
    imageDetails: '',
    total: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImg();
    }
  }

  async fetchImg() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const data = await searchImages(search, page);

      this.setState(({ items }) => ({ items: [...items, ...data.hits], total: data.totalHits }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  searchPictures = ({ search }) => {
    this.setState({ search, items: [], page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  showImage = largeImageURL => {
    this.setState({ showModal: true, imageDetails: largeImageURL });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { searchPictures, error, loadMore, closeModal, showImage } = this;
    const { items, showModal, imageDetails, loading, total, page } = this.state;
  
    const totalPage = total / (page * items.length);
    return (
      <div className={css.wrapper}>
        <Searchbar onSubmit={searchPictures} />
        {loading && <Loader />}
        {error && <p>{error}</p>}
        <ImageGallery items={items} showImage={showImage} />
        {totalPage > 1 && <Button onLoadMore={loadMore} />}

        {showModal && (
          <Modal close={closeModal}>
            <img src={imageDetails} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
export default MyGallery;
