import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Game = React.createClass({
  render() {
    const { game, i } = this.props;
    return (
      <div className="game-box" id="game_{game.id}">
        {game.name}<br/>
        {game.platform}<br/>
      </div>
    )
  }
});

export default Game;
