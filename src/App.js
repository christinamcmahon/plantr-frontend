import React, { Component } from 'react';
import PlantsContainer from './containers/PlantsContainer';
import UsersContainer from './containers/UsersContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersContainer />
        <PlantsContainer />
      </div>
    );
  }
};

export default App
