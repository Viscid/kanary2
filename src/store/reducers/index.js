import { combineReducers } from 'redux';

import selection from './selection';
import options from './options';
import practice from './practice';
import history from './history';

const reducer = combineReducers({
  selection,
  options,
  practice,
  history
});

export default reducer;