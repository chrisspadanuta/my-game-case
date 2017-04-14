import React from 'react';
import GameSearch from './GameSearch';

const GameShowcase = React.createClass({
  render() {
    let gamesByPlatformTables = [];
    if (this.props.playersGames.length > 0) {
      let gamesForPlatform = [];
      let lastPlatform = this.props.playersGames[0].platform;

      this.props.playersGames.forEach((game) => {
        if (game.platform !== lastPlatform) {
          gamesByPlatformTables.push(
            <table key={lastPlatform}>
              <thead>
                <tr>
                  <th>{this.props.platforms[lastPlatform]}</th>
                </tr>
              </thead>
              <tbody>
                {gamesForPlatform}
              </tbody>
            </table>
          );
          gamesForPlatform = [];
        }
        gamesForPlatform.push(<tr key={game.id}><td key={game.id}>{game.name}</td></tr>);
        lastPlatform = game.platform;
      });
      gamesByPlatformTables.push(
        <table key={lastPlatform}>
          <thead>
            <tr>
              <th>{this.props.platforms[lastPlatform]}</th>
            </tr>
          </thead>
          <tbody>
            {gamesForPlatform}
          </tbody>
        </table>
      );
    }

    return (
      <div className="game-showcase">
        <div className="player-info">
          <div className="picture"></div>
          <div className="name">Ultronator</div>
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
