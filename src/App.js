import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    }
    this.handlesSearchClick = this.handlesSearchClick.bind(this);
  }

  handleInputChange (event) {
    this.setState({
      searchText: event.target.value,
    })
  }

  handlesSearchClick () {
    console.log('button was clicked');
    console.log('search value was ' + this.state.searchText);
  }

  render() {
    return (
      <div>
        <input placeholder="Search for a movie title" value={this.state.searchText} onChange={event => this.handleInputChange(event)}/>
        <button onClick={this.handlesSearchClick}>Search</button>
      </div>
    );
  }
}

export default App;
