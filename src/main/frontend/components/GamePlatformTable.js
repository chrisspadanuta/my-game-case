import React from 'react';

const GamePlatformTable = React.createClass({
  propTypes: {
    platform: React.PropTypes.string,
    games: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.number,
        name: React.PropTypes.string,
        platform: React.PropTypes.string
      })
    )
  },

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>{this.props.platform}</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.games.map(game => {
              return (<tr key={game.id}><td key={game.id}>{game.name}</td></tr>)
            }, this)
          }
        </tbody>
      </table>
    );
  }
});

export default GamePlatformTable;
