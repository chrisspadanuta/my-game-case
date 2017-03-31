import React from 'react';

const SearchList = React.createClass({
  getInitialState: function() {
    return {
      filteredList: this.props.filteredList
    };
  },

  componentWillReceiveProps(nextProps) {
    this.setState({filteredList: nextProps.filteredList});
  },

  renderSearchMatch(game, i) {
    //console.log(game);
    return (
      <div className="search-match" key={i} onClick={this.props.addItemCallback.bind(this, game)}>
        {game.name} ({game.platform})
      </div>
    );
  },

  render() {
    const { seed } = this.props;

    //console.log(this.props.addItemCallback);

    return (
      <div className="search-list">
        { this.state.filteredList.map(this.renderSearchMatch) }
        <br/>
      </div>
    );
  }
});

export default SearchList;
