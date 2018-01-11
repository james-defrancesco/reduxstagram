//connect is from redux and allows to inject data wherever you need it

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import Main from './Main';

//
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);

}

//instead of React.createClass we use connect() (from redux)
//call it immediately against main.js, it's going to add all of the data from
//state to props, adds actionCreators which dispatch to props as well
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
