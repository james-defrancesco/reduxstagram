// let's go!
//always required at the beginning of a react program
import React from 'react';
import { render } from 'react-dom';

//import css
import css from './styles/style.styl';

//import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
//import store because it is "export default", { history } because it is a
//named import
import store, { history } from './store';



const router = (
  <Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
    {/* Pass "Main" either "PhotoGrid" or "Single" depending on what is in the URL */}
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
</Provider>
)

render(router, document.getElementById('root'));
