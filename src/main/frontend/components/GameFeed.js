import React from 'react';
import fetch from 'node-fetch';
import NewPost from './NewPost';

import * as styles from '../styles/GameFeedStyle.js';

class GameFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      playersGames: []
    };
  }

  render() {
    return (
      <div className={styles.gameFeed + " game-feed"}>
        <NewPost/>
        <div className={styles.feedItems}>
          <div className={styles.feedItem}>
            <div className={styles.itemHeader}>
              <div className={[styles.headerBox, styles.headerPlayerIcon].join(' ')}>
                <div className={styles.headerPlayerIconImage}></div>
              </div>
              <div className={[styles.headerBox, styles.headerInfo].join(' ')}>
                <div className={styles.headerTimestamp}>11:22pm on April 26</div>
                <h2 className={styles.playerName}>Ultronator</h2>
                <h3 className={styles.gameName}>playing Super Mario Bros</h3>
              </div>
            </div>
            <div className={styles.itemPost}>
              <div className={styles.postText}>Doing a warpless speed-run attempt.  Nearly flawless, but the hammer brother on 8-3 got me.  So close!</div>
              <div className={styles.postScreenShot}><img src="/images/smb_8_3.jpg"/></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GameFeed;
