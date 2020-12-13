import { ACTION } from '@/redux/action-types';

const initialState = {
  modalType: null,
  params: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.MODAL.MODAL_OPEN:
      return {
        modalType: action.payload.modalType,
        params: action.payload.params,
      };
    case ACTION.MODAL.MODAL_CLOSE:
      return initialState;
    default:
      return state;
  }
};
