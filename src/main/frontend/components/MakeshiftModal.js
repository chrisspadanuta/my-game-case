import React from 'react';
import fetch from 'node-fetch';
import GameSearch from './GameSearch';
import GameShowcase from './GameShowcase';

import css from '../css/makeshift-modal.scss';

class MakeshiftModal extends React.Component {
  render() {
    return (
      <div className="makeshift-modal">
        <div className="area">
          <div className="box">
            <div className="header">
              {this.props.title}
              <div className="close-btn" onClick={() => (this.props.closeCallback()) }>&times;</div>
            </div>
            <div className="body">
              {this.props.children}
            </div>
          </div>
        </div>
        <div className="backdrop"></div>
      </div>
    )
  }
}

export default MakeshiftModal