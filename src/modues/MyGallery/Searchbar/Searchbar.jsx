import { Component } from 'react';

class Searchbar extends Component {
    state = {
        search: "",
    }
    handleChange =({ target })=> {
        const { name, value } = target;
        this.setState({ [name]: value });
     }
    handleSubmit = (e) => {
        e.preventDefault();
        const { onSubmit } = this.props;
        onSubmit({ ...this.state });
        this.reset();
    }
    reset() {
        this.setState({
            search: "",
        })
    }
    render() {
        const { search } = this.state;
        const { handleChange, handleSubmit } = this;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={handleSubmit}>
          {/* <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button> */}

          <input
            value={search}
            name="search"
            onChange={handleChange}
            // class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
