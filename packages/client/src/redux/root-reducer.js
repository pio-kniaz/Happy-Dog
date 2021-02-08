import { combineReducers } from 'redux';

import { reducer as modal } from '@/redux/modal/reducer';
import { reducer as userBio } from '@/redux/user-bio/reducer';

export const rootReducer = combineReducers({
  modal,
  userBio,
});
