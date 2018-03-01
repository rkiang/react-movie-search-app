import React, { Component } from 'react';

class App extends Component {

  handlesSearchClick () {
    console.log('button was clicked');
    
  }

  render() {
    return (
      <div>
        <input placeholder="Search for a movie title" />
        <button onClick={this.handlesSearchClick}>Search</button>
      </div>
    );
  }
}

export default App;
