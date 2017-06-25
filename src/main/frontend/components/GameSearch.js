import React from 'react';
import SearchList from './SearchList';
import MakeshiftModal from './MakeshiftModal';

import gameSearchStyles from '../styles/GameSearchStyle';

class GameSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      newGameModal: false,
      modalForm: {}
    };
    this.addItemCallback = this.addItemCallback.bind(this);
    this.showNewGameModal = this.showNewGameModal.bind(this);
    this.handleModalChangeField = this.handleModalChangeField.bind(this);
    this.submitNewGame = this.submitNewGame.bind(this);
    this.closeNewGameModal = this.closeNewGameModal.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  addItemCallback(game) {
    this.setState({
      searchText: ""
    })
    this.props.addItemCallback(game);
  }

  showNewGameModal() {
    this.setState({
      newGameModal: true,
      modalForm: {
        name: this.state.searchText || ''
      }
    });
  }

  /*handleModalChangeFieldClosure(name) {
    const fieldName = name;
    return (event) => {
      this.setState({
        modalForm: {
          ...this.state.modalForm,
          [fieldName]: event.target.value
        }
      });
    }
  }*/

  handleModalChangeField(event) {
    this.setState({
      modalForm: {
        ...this.state.modalForm,
        [event.target.id]: event.target.value
      }
    });
  }

  submitNewGame(event) {
    event.preventDefault();
    if (this.state.modalForm.name && this.state.modalForm.platform) {
      const newGame = {
        name: this.state.modalForm.name,
        platform: this.state.modalForm.platform
      };
      console.log("adding newGame: " + newGame.name + ", " + newGame.platform);
      this.addItemCallback(newGame);
    }
    this.closeNewGameModal();
  }

  closeNewGameModal() {
    this.setState({
      newGameModal: false,
      modalForm: {}
    });
  }

  updateSearch(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  render() {
    let searchText = this.state.searchText || "";
    let filteredGames = this.props.availableGames.filter(function(game) {
      return game.name.toLowerCase().startsWith(searchText.toLowerCase());
    }).sort(this.props.sortByName);

    let newGameModal = null;
    if (this.state.newGameModal) {
      newGameModal = (<MakeshiftModal title="Add New Game" closeCallback={this.closeNewGameModal}>
        <form className="form-area" onSubmit={this.submitNewGame}>
          <div className="form-item">Name:<br/><input type="text" id="name" name="name" value={this.state.modalForm.name || this.state.searchText} onChange={this.handleModalChangeField}/></div>
          <div className="form-item">Platform:<br/><input type="text" id="platform" name="platform" onChange={this.handleModalChangeField}/></div>
          <div className="submit-btn"><button name="submit" onClick={this.submitNewGame}>Create</button></div>
          {this.state.modalForm.name}<br/>
        {this.state.modalForm.platform}<br/>
      </form>
      </MakeshiftModal>);
    }

    // className={gameSearchStyles.root}

    return (
      <div className="games-search">
        {newGameModal}
        <div className="search-controls">
          <input type="text" name="games_search" id="games_search" placeholder="Game Search" onChange={this.updateSearch} value={this.state.searchText}/>
          <button name="register_game" onClick={this.showNewGameModal}></button>
        </div>
        {
          searchText.length > 1 && filteredGames.length > 0
          ? <SearchList filteredList={filteredGames} addItemCallback={this.addItemCallback} />
          : null
        }
      </div>
    )
  }
}

export default GameSearch
