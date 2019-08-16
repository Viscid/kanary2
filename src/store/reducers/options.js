import { SET_MODE } from '../actions';

const initialState = {
  mode: 'hiragana'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        mode: action.mode
      }
    default: 
      return state;
  }
}