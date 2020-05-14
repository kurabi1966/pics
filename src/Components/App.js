import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term, per_page: 20 },
    });
    this.setState({ images: response.data.results });
  };

  render = () => {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList imgList={this.state.images} />
      </div>
    );
  };
}

export default App;

// https://api.unsplash.com/search/photos?page=1&query=office
// Access Key: hrcQl-My1wOR1PNDr2DY8tq1aOTz28_pPWqbXjFtNA0
// Secrit Key: GJ6UUlrRnmSZwWL5xvpmmBwl3Mlc6jIDVU8KMvs4z7g
//
