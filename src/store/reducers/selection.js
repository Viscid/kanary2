import { TOGGLE_KANA, TOGGLE_KANA_SET } from '../actions';
import kana from 'data/kana.json';

const initialState = kana.map((kana) => kana.id);

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_KANA:
      return state.includes(action.kana.id) ? state.filter((id) => id !== action.kana.id) : [...state, action.kana.id];
    case TOGGLE_KANA_SET:
      const kanaIds = action.kanaSet.map((kana) => kana.id);
      return kanaIds.some((id) => state.includes(id)) ?
        state.filter((id) => !kanaIds.includes(id)) :
       [...state, ...kanaIds]
    default: 
      return state;
  }
}