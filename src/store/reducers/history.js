import { ADD_ITEM_TO_HISTORY } from 'store/actions';
import { CLEAR_HISTORY } from 'store/actions';

const initialState = [];


/* Item
  Length (secs) 
  Kana
  right
  Wrong
  Date / Time
*/


export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_HISTORY:
      return [...state, action.item];
    case CLEAR_HISTORY:
      return [];
    default: 
      return state;
  }
}