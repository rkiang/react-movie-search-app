import React, { Component } from 'react';

const movieList = [
  {
    title: 'Star Wars: A New Hope',
    url: 'https://images-na.ssl-images-amazon.com/images/I/91GAgvnO3AL._RI_.jpg',
  },
  {
    title: 'Star Wars: Return of the Jedi',
    url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/220px-ReturnOfTheJediPoster1983.jpg',
  },
  {
    title: 'The Holiday',
    url: 'https://upload.wikimedia.org/wikipedia/en/6/60/Theholidayposter.jpg',
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      currentList: movieList,
    }
    this.handlesSearchClick = this.handlesSearchClick.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  handlesSearchClick() {
    console.log('button was clicked');
    console.log('search value was ' + this.state.searchText);
    this.setState({
      currentList: movieList.filter((movie) => {
        return movie.title.toLowerCase().includes(this.state.searchText.toLowerCase())
      })
    })
  }

  render() {
    return (
      <div>
        <input placeholder="Search for a movie title" value={this.state.searchText} onChange={event => this.handleInputChange(event)} />
        <button onClick={this.handlesSearchClick}>Search</button>
        <div>
          {
            this.state.currentList.map(movie => {
              return <img key={movie.title} src={movie.url} width='200px' />
            })
          }
        </div>

      </div>
    );
  }
}

export default App;
