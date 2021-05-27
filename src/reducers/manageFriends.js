export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case "ADD_FRIEND":
      return (
        {...state,
            friends: [
              ...state.friends,
              action.friend
            ]
        }
    )

    case "REMOVE_FRIEND":
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
      return (
        {...state,
            friends: [
              ...state.friends.slice(0, removalIndex),
              ...state.friends.slice(removalIndex + 1)
            ]
        }
      )

    default:
      return state;
    }
}

// function reducer(state, action){      
//     switch (action.type) {
//       case 'INCREASE_COUNT':
//         return {count: state.count + 1}
//       case 'DECREASE_COUNT':
//         return {count: state.count - 1}
//       default:
//         return state;
//     }
//   } 