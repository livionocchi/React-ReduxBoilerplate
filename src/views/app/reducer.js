import {initialState} from './App';

 function AppReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_APP_COLOR':
      return {
        ...state,
        color: action.color
      }
    default:
      return state
  }
}

export default AppReducer;
