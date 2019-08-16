import { INITIALIZE_PRACTICE } from '../actions';

const initialState = {
  orderedKana: [],
  currentKanaIndex: undefined,
  input: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_PRACTICE: 
      return {
        ...state,
        orderedKana: action.initializedKana
      }
    default: 
      return state;
  }
}