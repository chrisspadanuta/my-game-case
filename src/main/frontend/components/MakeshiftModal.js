import React from 'react';
import fetch from 'node-fetch';
import GameSearch from './GameSearch';
import GameShowcase from './GameShowcase';

import css from '../css/makeshift-modal.scss';

class MakeshiftModal extends React.Component {
  render() {
    return (
      <div className="makeshift-modal">
        <div className="backdrop" onClick={() => (this.props.closeCallback()) }></div>
        <div className="box">
          <div className="header">
            <div className="close-btn" onClick={() => (this.props.closeCallback()) }>&times;</div>
            <div className="title">{this.props.title}</div>
          </div>
          <div className="body">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default MakeshiftModal
