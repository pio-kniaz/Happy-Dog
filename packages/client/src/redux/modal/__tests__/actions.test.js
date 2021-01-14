import { openModal, closeModal } from '@/redux/modal/actions';
import { ACTION } from '@/redux/action-types';
import { ModalType } from '@components/modal/ModalType';

describe('Modal actions', () => {
  it(`Dispatches ${ACTION.MODAL.MODAL_OPEN} with specific params`, () => {
    const expectedAction = {
      type: ACTION.MODAL.MODAL_OPEN,
      payload: {
        modalType: ModalType.registerUser,
        title: 'Register User',
      },
    };
    expect(openModal({
      modalType: ModalType.registerUser,
      title: 'Register User',
    })).toEqual(expectedAction);
  });
  it(`Dispatches ${ACTION.MODAL.MODAL_CLOSE} with specific params`, () => {
    const expectedAction = {
      type: ACTION.MODAL.MODAL_CLOSE,
    };
    expect(closeModal()).toEqual(expectedAction);
  });
});
