export function managePresents(state = {numberOfPresents: 0}, action){
    switch (action.type) {
        case 'INCREASE':
            return {numberOfPresents: state.numberOfPresents + 1}
        default:
            return state
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