// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state

// when this first runs, state will be = to nothing, so we set it to an empty array
function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
    console.log("Incrementing!");
    const i = action.index;
    return [
      ...state.slice(0,i), //before the one we are updating
      {...state[i], likes: state[i].likes + 1},
      ...state.slice(i + 1), //after the one we are updating

    ]
    //return the updated state
    default:
      return state;
  }

}

export default posts;
