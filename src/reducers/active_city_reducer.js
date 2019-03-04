export default function (state, action) {
  if (state === undefined) {
    return null;
  }

  if (action.type === 'SET_ACTIVE_CITY') {
    return action.payload;
  } else {
    return state;
  }
}

// switch(action.type) {
//   case 'SET_CITIES':
//     return action.payload;
//   default:
//     return state;
// }
