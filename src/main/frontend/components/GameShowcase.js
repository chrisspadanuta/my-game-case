import React from 'react';
import GameSearch from './GameSearch';
import GamePlatformTable from './GamePlatformTable';
import MakeshiftModal from './MakeshiftModal';

import css from '../css/game-showcase.scss';

class GameShowcase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cancelConfirmModal: false
    };
    this.showCancelConfirmModal = this.showCancelConfirmModal.bind(this);
    this.closeCancelConfirmModal = this.closeCancelConfirmModal.bind(this);
    this.createGameTables = this.createGameTables.bind(this);
  }

  showCancelConfirmModal() {
    this.setState({
      cancelConfirmModal: true
    });
  }

  closeCancelConfirmModal() {
    this.setState({
      cancelConfirmModal: false
    });
  }

  createGameTables() {
    let gamesByPlatformTables = [];
    if (this.props.playersGames.length > 0) {
      let gamesForPlatform = [];
      let lastPlatform = this.props.playersGames[0].platform;

      this.props.playersGames.forEach((game) => {
        if (game.platform !== lastPlatform) {
          gamesForPlatform.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
          gamesByPlatformTables.push(
            <GamePlatformTable key={lastPlatform} platform={this.props.platforms[lastPlatform]} games={gamesForPlatform} />
          );
          gamesForPlatform = [];
        }
        gamesForPlatform.push(game);
        lastPlatform = game.platform;
      });
      gamesForPlatform.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      gamesByPlatformTables.push(
        <GamePlatformTable key={lastPlatform} platform={this.props.platforms[lastPlatform]} games={gamesForPlatform} />
      );


    }
    return gamesByPlatformTables;
  }

  render() {
    let cancelConfirmModal = null;
    if (this.state.cancelConfirmModal) {
      cancelConfirmModal = (
        <MakeshiftModal title="Are You Sure?" cancelCallback={this.closeCancelConfirmModal} cancelText="Deny" confirmCallback={this.closeCancelConfirmModal} confirmText="Confirm">
          Please confirm your action here.
        </MakeshiftModal>
      );
    }

    let gamesByPlatformTables = this.createGameTables();
    return (
      <div className="game-showcase">
        {cancelConfirmModal}
        <div className="player-info">
          <div className="picture" onClick={this.showCancelConfirmModal}></div>
          <div className="name">Ultronator's</div>
        </div>
        <div className="game-list">
          <h2>--- GAMES ---</h2>
          {gamesByPlatformTables}
        </div>
      </div>
    );
  }
}

export default GameShowcase;
