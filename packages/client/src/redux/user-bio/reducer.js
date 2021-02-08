import { ACTION } from '@/redux/action-types';

const initialState = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  updatedAt: null,
  createdAt: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.USER_BIO.SET_USER_BIO:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        updatedAt: action.payload.updatedAt,
        createdAt: action.payload.createdAt,
      };
    default:
      return state;
  }
};
