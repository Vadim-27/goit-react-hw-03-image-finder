import { Component } from 'react';
import searchImages from 'components/services/gallery-api';

import Modal from 'components/Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

// import { searchImages } from "../../components/servises/gallery-api.js";

import Searchbar from './Searchbar/Searchbar';

class MyGallery extends Component {
  state = {
    search: '',
    items: [],
    page: 1,
    error: null,
    loading: false,
    showModal: false,
    imageDetails: '',
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

      this.setState(({ items }) => ({ items: [...items, ...data.hits] }));
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
    const { items, showModal, imageDetails, loading } = this.state;

    return (
      <div>
        <Searchbar onSubmit={searchPictures} />
        {loading && <Loader />}
        {error && <p>{error}</p>}
        <ImageGallery items={items} showImage={showImage} />
        {Boolean(items.length) && <Button onLoadMore={loadMore} />}

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
