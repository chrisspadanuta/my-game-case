import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import games from './games';

const rootReducer = combineReducers({posts, comments, games, routing: routerReducer});

export default rootReducer;
