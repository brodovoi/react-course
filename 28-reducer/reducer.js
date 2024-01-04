const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_NAME':
      return [...state, action.payload];
    case 'DELETE_NAME':
      return state.filter((personeName) => personeName !== action.payload);
    case 'CLEAR_NAMES':
      return [];
    default:
      return state;
  }

  //   if (action.type === 'ADD_NAME') {
  //     return [...state, action.payload];
  //   }
  //   if (action.type === 'DELETE_NAME') {
  //     return state.filter((personeName) => personeName !== action.payload);
  //   }
  //   if (action.type === 'CLEAR_NAMES') {
  //     return [];
  //   }
  return state;
}

let newState = reducer(initialState, { type: 'ADD_NAME', payload: 'Artem' });
console.log(newState);

newState = reducer(newState, { type: 'ADD_NAME', payload: 'Alice' });
console.log(newState);

newState = reducer(newState, { type: 'DELETE_NAME', payload: 'Alice' });
console.log(newState);

newState = reducer(newState, { type: 'CLEAR_NAMES', payload: 'Alice' });
console.log(newState);

newState = reducer(initialState, { type: 'ADD_NAME', payload: 'Bob' });
console.log(newState);
