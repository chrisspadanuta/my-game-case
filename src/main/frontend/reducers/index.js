import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import games from './games';
import platforms from './platforms';

const rootReducer = combineReducers({posts, comments, games, platforms, routing: routerReducer});

export default rootReducer;
