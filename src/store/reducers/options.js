import { SET_MODE, SET_DRILL_LENGTH } from '../actions';

const initialState = {
  mode: 'hiragana',
  drillLength: 50,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        mode: action.mode
      }
    case SET_DRILL_LENGTH:
      return {
        ...state,
        drillLength: action.length
      }
    default: 
      return state;
  }
}