import React from 'react';
import fetch from 'node-fetch';
import GameSearch from './GameSearch';
import GameShowcase from './GameShowcase';

import css from '../css/makeshift-modal.scss';

class MakeshiftModal extends React.Component {
  render() {
    return (
      <div className="makeshift-modal">
        <div className="backdrop" onClick={!this.props.cancelText && (() => (this.props.cancelCallback()))}></div>
        <div className="box">
          <div className="header">
            {!this.props.cancelText && <div className="close-btn" onClick={() => (this.props.cancelCallback()) }>&times;</div>}
            <div className="title">{this.props.title}</div>
          </div>
          <div className="body">
            {this.props.children}
          </div>
          <div className="footer">
            {(this.props.cancelText || this.props.confirmText)
            && <div className="actions">
              {this.props.cancelText && <div className="button-wrap"><button name="cancel" onClick={this.props.cancelCallback}>{this.props.cancelText}</button></div>}
              {this.props.confirmText && <div className="button-wrap"><button name="confirm" onClick={this.props.confirmCallback}>{this.props.confirmText}</button></div>}
            </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default MakeshiftModal
