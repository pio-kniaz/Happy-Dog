import { ACTION } from '@/redux/action-types';
import { reducer } from '@/redux/modal/reducer';
import { ModalType } from '@components/modal/ModalType';

const initialState = {
  modalType: null,
  params: {},
};
describe('Modal reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, { type: '@@init' })).toEqual(initialState);
  });
  it(`Should handle ${ACTION.MODAL.MODAL_OPEN}`, () => {
    const currentState = {
      ...initialState,
      modalType: ModalType.registerUser,
      params: {
        title: 'Open Modal',
      },
    };
    expect(reducer(initialState, {
      type: ACTION.MODAL.MODAL_OPEN,
      payload: {
        modalType: ModalType.registerUser,
        params: {
          title: 'Open Modal',
        },
      },
    })).toEqual(currentState);
  });
  it(`Should handle ${ACTION.MODAL.MODAL_CLOSE}`, () => {
    expect(reducer(initialState, {
      type: ACTION.MODAL.MODAL_COSE,
    })).toEqual(initialState);
  });
});
