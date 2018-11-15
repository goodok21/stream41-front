import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const URL = 'http://159.65.207.28'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>how are you</code>?
          </p>
          <div>
            <h1>Audio</h1>
            <audio controls type="audio/ogg">
              <source src={`${URL}/birds.ogg`} type="video/ogg" />
                Your browser does not support the audio element.
            </audio>
          </div>
          <div>
            <h1>Video</h1>
            <video width="320" height="240" controls autoplay="true">
              <source src={`${URL}/videoplayback`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
