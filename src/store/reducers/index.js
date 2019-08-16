import { combineReducers } from 'redux';

import selection from './selection';
import options from './options';
import practice from './practice';

const reducer = combineReducers({
  selection,
  options,
  practice
});

export default reducer;