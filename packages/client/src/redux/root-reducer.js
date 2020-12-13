import { combineReducers } from 'redux';

import { reducer as modal } from '@/redux/modal/reducer';

export const rootReducer = combineReducers({
  modal,
});
