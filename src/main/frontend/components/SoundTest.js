import React from 'react';
import fetch from 'node-fetch';

const SoundTest = React.createClass({
  getInitialState: function() {
    let audio = new Audio('/sound/duck_hunt.mp3');
    return {
      audio: audio
    };
  },

  testSound: function() {
      console.log("play sound");
      this.state.audio.play();

  },

  render() {
    return (
      <div className="sound-test">
        <button onClick={() => (this.testSound()) }>play sound</button>
        test test test
      </div>
    )
  }
});

export default SoundTest;
