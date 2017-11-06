import React from 'react';
import fetch from 'node-fetch';
import GameShowcase from './GameShowcase';

import playerProfileStyles from '../styles/PlayerProfileStyle';

class PlayerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersGames: []
    };
  }

  componentWillMount() {
    // called before first render
  }

  componentDidMount() {
    const currentLocation = window.location;
    const urlStart = `${currentLocation.protocol}//${currentLocation.host}`;

    //TODO: Break this out into a service class so it can also be used in GameRegistration
    fetch(`${urlStart}/games/players/1234/games`)
      .then((response) => response.json())
      .then(playersGames => {
        console.log(playersGames);
        this.setState({ playersGames });
      }).catch((error) => {
          console.error(error);
      });
  }

  render() {
    return (
      <div className={playerProfileStyles.root}>
        <div className={playerProfileStyles.contentArea}>
          <GameShowcase playersGames={this.state.playersGames} platforms={this.props.platforms}/>
        </div>
      </div>
    )
  }
}

export default PlayerProfile
