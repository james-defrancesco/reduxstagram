import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//pull in all reducers to rootReducer
//this is where they get combined into one reducer
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;
