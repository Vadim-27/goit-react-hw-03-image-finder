import { Component } from "react";
import searchImages from "components/servises/gallery-api";

// import Modal from "components/Modal/Modal";

// import { searchImages } from "../../components/servises/gallery-api.js";

import Searchbar from "./Searchbar/Searchbar";


class MyGallery extends Component {
  state = {
    search: '',
    items: [],
    page: 1,
    error: null,
    loading: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    // this.fetchImg();
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImg();
      console.log(this.fetchImg());
    }
  }

  async fetchImg() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
        const data = await searchImages(search, page);
        console.log(data);
      // this.setState(({ items }) => ({ items: [...items, ...data] }));
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

  render() {
    const { searchPictures, error } = this;
    const { items } = this.state;

    const picture = items.map(({ id, largeImageURL }) => (
      <li key={id}>
        <img src={largeImageURL} alt="" />
      </li>
    ));
    console.log(picture);

    return (
      <div>
        <Searchbar onSubmit={searchPictures} />
        {error && <p>{error}</p>}
        <ul>
          <li>{picture}</li>
        </ul>
            <button>load more</button>
            {/* <Modal/> */}
      </div>
    );
  }
}
export default MyGallery;