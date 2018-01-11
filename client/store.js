import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';


//import root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';


// create an obj for default data
const defaultState = {
  posts,
  comments
};

//shortcut to the usual last line export default xyz
export default const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

// this is the same as above ^ shortcut
// export default store;
