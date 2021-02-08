import { ACTION } from '@/redux/action-types';

export const setUserBio = (userBio) => ({
  type: ACTION.USER_BIO.SET_USER_BIO,
  payload: userBio,
});
export const clearUserBio = () => ({
  type: ACTION.USER_BIO.CLEAR_USER_BIO,
});
