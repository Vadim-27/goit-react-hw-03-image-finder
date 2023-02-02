import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './seafchbar.module.css';

import { FcSearch } from 'react-icons/fc';

class Searchbar extends Component {
  state = {
    search: '',
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.search.trim()) {
      return alert(`Enter your query in the search bar`);
    }
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };
  reset() {
    this.setState({
      search: '',
    });
  }
  render() {
    const { search } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}><FcSearch  /></span>
          </button>

          <input
            value={search}
            name="search"
            onChange={handleChange}
            className={css.searchFormiInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
