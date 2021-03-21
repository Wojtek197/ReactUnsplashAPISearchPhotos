import React from 'react';
import "./images.css";

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <h1 className='title'> Image Search: </h1>
            <input className='searchInput'
              type='text'
              value={this.state.term}
              placeholder={"Wpisz szukaną fraze"}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;