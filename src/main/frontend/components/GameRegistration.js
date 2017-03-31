import React from 'react';
import GameSearch from './GameSearch';

const GameRegistration = React.createClass({
  getInitialState: function() {
    return {
      games: this.props.games,
      playersGames: []
    };
  },

  addItemCallback: function(game) {
    //console.log(game.name);
    this.setState({
      games: this.state.games,
      playersGames: [...this.state.playersGames, game]
    });
  },

  renderGame(game, i) {
    //console.log(game);
    return (
      <div className="game" key={i}>
        {game.name}, {game.platform}
      </div>
    );
  },

  render() {
    return (
      <div className="games-registration">
        {this.state.playersGames.map(this.renderGame)}
        <GameSearch addItemCallback={this.addItemCallback} {...this.props} />
      </div>
    )
  }
});

export default GameRegistration;
