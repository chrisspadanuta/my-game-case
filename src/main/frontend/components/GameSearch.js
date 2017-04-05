import React from 'react';
import SearchList from './SearchList';

const GameSearch = React.createClass({
  getInitialState: function() {
    return {
      games: this.props.games,
      searchText: ""
    };
  },

  updateSearch: function(e) {
    //console.log("update search " + e.target.value);
    this.setState({
      games: this.state.games,
      searchText: e.target.value
    });
  },

  /*handleSubmit(e) {
    e.preventDefault();
    console.log("submitting");
    console.log(this.refs);
    const {postId} = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    console.log(postId, author, comment);
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },*/

  render() {
    const { games } = this.props;
    //const games = this.props.games || [];

    let searchText = this.state.searchText || "";
    let filteredGames = this.state.games.filter(function(game) {
      return game.name.toLowerCase().startsWith(searchText.toLowerCase());
    });
    //console.log(filteredGames);

    return (
      <div className="games-search">
        <input type="text" name="games_search" id="games_search" placeholder="Game Search" onChange={this.updateSearch}/>
        <button name="register_game">Add New</button>
        <SearchList filteredList={filteredGames} addItemCallback={this.props.addItemCallback} />
      </div>
    )
  }
});

export default GameSearch;
