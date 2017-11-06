import React from 'react';

import { render } from 'react-dom';

// Import css-loader
//import css from './styles/style.styl';
//import css2 from './css/main.css';
import css3 from './css/main.scss';

// Import Components
import App from './components/App';
import GameFeed from './components/GameFeed';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import GameRegistration from './components/GameRegistration';
import PlayerProfile from './components/PlayerProfile';
import SoundTest from './components/SoundTest';

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={GameFeed}></IndexRoute>
        <Route path="/registration" component={GameRegistration}></Route>
        <Route path="/players/:playerId/profile" component={PlayerProfile}></Route>
        <Route path="/soundtest" component={SoundTest}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
