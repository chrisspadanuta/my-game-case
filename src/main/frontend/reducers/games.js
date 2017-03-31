// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function games(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_GAMES':
      const i = action.index;
      console.log("Incrementing games");
      return [
        ...state.slice(0,i), // before affected index
        {...state[i], likes: state[i].likes + 10},
        ...state.slice(i+1)
      ];
    default:
      return state;
  }
}

export default games;
