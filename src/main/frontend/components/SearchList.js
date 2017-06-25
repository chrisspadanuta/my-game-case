import React from 'react';

const SearchList = React.createClass({
  propTypes: {
    filteredList: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.number,
        name: React.PropTypes.string,
        platform: React.PropTypes.string
      })
    )
  },

  render() {
    const renderOne = (item) => (
      <div className="search-match" key={item.id} onClick={() => (this.props.addItemCallback(item)) }>
        {item.name} ({item.platform})
      </div>
    );

    return (
      <div className="search-list">
        { this.props.filteredList.map(renderOne) }
      </div>
    );
  }
});

export default SearchList;
