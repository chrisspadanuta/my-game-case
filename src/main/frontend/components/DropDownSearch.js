import React from 'react';
import SearchList from './SearchList';

const DropDownSearch = React.createClass({
  getInitialState: function() {
    return {
      searchText: "",
      selected: false
    };
  },

  addItemCallback: function(game) {
    this.setState({
      searchText: game.name,
      selected: true
    });
    this.props.selectCallback(game);
  },

  updateSearch: function(e) {
    this.setState({
      searchText: e.target.value
    });
  },

  clearSelection: function() {
    this.setState({
      searchText: "",
      selected: false
    })
  },

  render() {
    let searchText = this.state.searchText || "";
    let filteredGames = [];
    if (!this.state.selected && searchText.length > 1) {
      filteredGames = this.props.availableGames.filter(function(game) {
        return game.name.toLowerCase().startsWith(searchText.toLowerCase());
      }).sort(this.props.sortByName);
    }

    return (
      <div className="games-dropdown">
        <input type="text" name="games_search" id="games_search" placeholder="My Games" onChange={this.updateSearch} value={this.state.searchText} readOnly={this.state.selected}/>
        <button name="clear_selection" className="clear-selection" onClick={this.clearSelection} disabled={!this.state.selected}> X </button>
        {
          filteredGames.length > 0
          ? <SearchList filteredList={filteredGames} addItemCallback={this.addItemCallback} />
          : null
        }
      </div>
    )
  }
});

export default DropDownSearch;
