import React from 'react';
import SearchList from './SearchList';

const GameSearch = React.createClass({
  getInitialState: function() {
    return {
      searchText: ""
    };
  },

  addItemCallback: function(game) {
    this.setState({
      searchText: ""
    })
    this.props.addItemCallback(game);
  },

  updateSearch: function(e) {
    this.setState({
      searchText: e.target.value
    });
  },

  render() {
    let searchText = this.state.searchText || "";
    let filteredGames = this.props.availableGames.filter(function(game) {
      return game.name.toLowerCase().startsWith(searchText.toLowerCase());
    }).sort(this.props.sortByName);

    return (
      <div className="games-search">
        <input type="text" name="games_search" id="games_search" placeholder="Game Search" onChange={this.updateSearch} value={this.state.searchText}/>
        <button name="register_game">Add New</button>
        {
          searchText.length > 1 && filteredGames.length > 0
          ? <SearchList filteredList={filteredGames} addItemCallback={this.addItemCallback} />
          : null
        }
      </div>
    )
  }
});

export default GameSearch;
