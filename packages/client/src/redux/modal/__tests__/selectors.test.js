import { modalSelector } from '@/redux/modal/selectors';
import { mockStore } from '@test-utils/mockStore';

const mockState = {
  modal: {
    modalType: null,
    params: {},
  },
};
it('Should return modal state', () => {
  mockStore.getState = () => mockState;
  const state = mockStore.getState();
  expect(modalSelector(state)).toEqual({
    modalType: null,
    params: {},
  });
});
