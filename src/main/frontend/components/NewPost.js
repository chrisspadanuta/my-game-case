import React from 'react';
import fetch from 'node-fetch';
import DropDownSearch from './DropDownSearch';

import { newPost } from '../styles/GameFeedStyle.js';
import css from '../css/new-post.scss';

const NewPost = React.createClass({
  getInitialState: function() {
    return {
      playersGames: [],
      newPost: {
        message: "",
        game: null
      }
    };
  },

  componentDidMount() {
    // called after first render
    fetch('http://localhost:8080/games/players/1234/games')
      .then((response) => response.json())
      .then(playersGames => {
        console.log(playersGames);
        this.setState({ playersGames });
      }).catch((error) => {
          console.error(error);
      });
  },

  sortByName: function(a,b) {
    return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
  },

  updateMessage: function(e) {
    this.setState({
      newPost: {
        message: e.target.value,
        game: this.state.newPost.game
      }
    });
  },

  selectGame: function(game) {
    this.setState({
      newPost: {
        message: this.state.newPost.message,
        game: game
      }
    });
  },

  createPost: function() {
    fetch('http://localhost:8080/games/players/1234/post', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.newPost)
      })
      .then((response) => response.text()).then((body) => {
        //console.log("saved players games");
      }).catch((error) => {
        console.error(error);
      })
  },

  render() {
    return (
      <div className={newPost + " new-post"}>
        <div className="post-content">
          <textarea id="post_text" className="post-text" onChange={this.updateSearch}></textarea>
        </div>
        <div className="table">
          <div className="cell">
            <DropDownSearch sortByName={this.sortByName} availableGames={this.state.playersGames} selectCallback={this.selectGame}/>
          </div>
          <div className="cell" style={{ textAlign: 'right' }}>
            <button name="post_button" onClick={this.createPost}>Post</button>
          </div>
        </div>
      </div>
    )
  }
});

export default NewPost;
