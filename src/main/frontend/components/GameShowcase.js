import React from 'react';
import GameSearch from './GameSearch';
import GamePlatformTable from './GamePlatformTable';

const GameShowcase = React.createClass({
  createGameTables() {
    let gamesByPlatformTables = [];
    if (this.props.playersGames.length > 0) {
      let gamesForPlatform = [];
      let lastPlatform = this.props.playersGames[0].platform;

      this.props.playersGames.forEach((game) => {
        if (game.platform !== lastPlatform) {
          gamesByPlatformTables.push(
            <GamePlatformTable key={lastPlatform} platform={this.props.platforms[lastPlatform]} games={gamesForPlatform} />
          );
          gamesForPlatform = [];
        }
        gamesForPlatform.push(game);
        lastPlatform = game.platform;
      });
      gamesByPlatformTables.push(
        <GamePlatformTable key={lastPlatform} platform={this.props.platforms[lastPlatform]} games={gamesForPlatform} />
      );
    }
    return gamesByPlatformTables;
  },

  render() {
    let gamesByPlatformTables = this.createGameTables();
    return (
      <div className="game-showcase">
        <div className="player-info">
          <div className="picture"></div>
          <div className="name">Ultronator's</div>
        </div>
        <div className="game-list">
          <h2>--- GAMES ---</h2>
          {gamesByPlatformTables}
        </div>
      </div>
    );
  }
});

export default GameShowcase;
