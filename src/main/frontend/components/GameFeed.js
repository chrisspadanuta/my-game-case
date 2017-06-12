import React from 'react';
import fetch from 'node-fetch';
import NewPost from './NewPost';

const GameFeed = React.createClass({
  getInitialState: function() {
    return {
      games: [],
      playersGames: []
    };
  },

  render() {
    return (
      <div className="game-feed">
        <NewPost/>
        <div className="feed-items">
          <div className="feed-item">
            <div className="header">
              <div className="box player-icon">
                <div className="image"></div>
              </div>
              <div className="box info">
                <div className="timestamp">11:22pm on April 26</div>
                <h2 className="player-name">Ultronator</h2>
                <h3 className="game-name">playing Super Mario Bros</h3>
              </div>
            </div>
            <div className="post">
              <div className="text">Doing a warpless speed-run attempt.  Nearly flawless, but the hammer brother on 8-3 got me.  So close!</div>
              <div className="screen-shot"><img src="/images/smb_8_3.jpg"/></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default GameFeed;
