import React from 'react';
import fetch from 'node-fetch';
import GameSearch from './GameSearch';
import GameShowcase from './GameShowcase';

import gameRegistrationStyles from '../styles/GameRegistrationStyle';

const GameRegistration = React.createClass({
  getInitialState: function() {
    return {
      games: [],
      playersGames: []
    };
  },

  componentWillMount() {
    // called before first render
  },

  componentDidMount() {
    // called after first render
    fetch('http://localhost:8080/games/list')
      .then((response) => response.json())
      .then(games => {
        //console.log(games);
        this.setState({ games });
      }).catch((error) => {
          console.error(error);
      });
      fetch('http://localhost:8080/games/players/1234/games')
        .then((response) => response.json())
        .then(playersGames => {
          console.log(playersGames);
          this.setState({ playersGames });
        }).catch((error) => {
            console.error(error);
        });
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (prevState.playersGames !== this.state.playersGames) {
      //console.log("players games changed");
      //console.log(JSON.stringify(this.state.playersGames));
      fetch('http://localhost:8080/games/players/1234/games', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state.playersGames)
        })
        .then((response) => response.text()).then((body) => {
          //console.log("saved players games");
        }).catch((error) => {
          console.error(error);
        })
    }
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
    if (!game.id) {
      game.id = this.state.games[this.state.games.length - 1].id + 1;
      this.state.games.push(game);
      //console.log(this.state.games);
    }
    if (!this.gamesArrayContains(this.state.playersGames, game)) {
      let playersGames = [...this.state.playersGames, game];
      this.setState({
        playersGames: playersGames.sort(this.sortByName).sort(this.sortByPlatform)
      });
    }
  },

  // className={gameRegistrationStyles.root}

  render() {
    return (
      <div className="games-registration registration-split-view">
        <GameSearch addItemCallback={this.addItemCallback} sortByName={this.sortByName} availableGames={this.state.games} />
        <GameShowcase playersGames={this.state.playersGames} platforms={this.props.platforms}/>
      </div>
    )
  }
});

export default GameRegistration;
