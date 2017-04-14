import React from 'react';
import GameSearch from './GameSearch';
import GameShowcase from './GameShowcase';

const GameRegistration = React.createClass({
  getInitialState: function() {
    return {
      playersGames: []
    };
  },

  sortByName: function(a,b) {
    return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
  },

  sortByPlatform: function(a,b) {
    return (a.platform > b.platform) ? 1 : ((b.platform > a.platform) ? -1 : 0);
  },

  gamesArrayContains: function(gamesArray, findMe) {
    for (let i = 0; i < gamesArray.length; i++) {
      if (gamesArray[i].id === findMe.id) {
        return true;
      }
    }
    return false;
  },

  addItemCallback: function(game) {
    if (!this.gamesArrayContains(this.state.playersGames, game)) {
      let playersGames = [...this.state.playersGames, game];
      this.setState({
        playersGames: playersGames.sort(this.sortByName).sort(this.sortByPlatform)
      });
    }
  },

  render() {
    return (
      <div className="games-registration registration-split-view">
        <GameSearch addItemCallback={this.addItemCallback} sortByName={this.sortByName} availableGames={this.props.games} />
        <GameShowcase playersGames={this.state.playersGames} platforms={this.props.platforms}/>
      </div>
    )
  }
});

export default GameRegistration;
