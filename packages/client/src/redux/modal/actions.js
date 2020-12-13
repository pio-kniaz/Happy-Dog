import { ACTION } from '@/redux/action-types';

export const openModal = (modalParams) => ({
  type: ACTION.MODAL.MODAL_OPEN,
  payload: modalParams,
});

export const closeModal = () => ({
  type: ACTION.MODAL.MODAL_CLOSE,
});
