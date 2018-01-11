// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state

// when this first runs, state will be = to nothing, so we set it to an empty array
function posts(state = [], action) {
  console.log(state, action);
    // return state because reducers take in state and modify it, then they have
    // to return it
  return state;

}
 export default posts;
