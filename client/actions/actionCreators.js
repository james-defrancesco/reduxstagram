// These are action creators
// they get fired off or dispatched with info on what happened
// this does NOT update state - need reducer to handle state

// increment
export function increment(index) {
  
  //return an object because actions are just objects because they have two things
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}
// remove comment

export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
