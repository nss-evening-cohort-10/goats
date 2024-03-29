import React from 'react';
import './App.scss';

import goatData from '../helpers/data/goatData';

import GoatCoral from '../components/GoatCoral/GoatCoral';
import AvailableCount from '../components/AvailableCount/AvailableCount';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  freeGoat = (goatId) => {
    goatData.freeAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  useGoat = (goatId) => {
    goatData.useAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    return (
        <div className="App">
          <h1>Underwater Goat Yoga</h1>
          <AvailableCount goats={this.state.goats} />
          <GoatCoral butts={this.state.goats} freeGoat={this.freeGoat} useGoat={this.useGoat} />
        </div>
    );
  }
}

export default App;
