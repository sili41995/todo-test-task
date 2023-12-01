import { IInitialState } from 'types/types';

const initialState: IInitialState = {
  todos: {
    items: [],
    isLoading: false,
    isLoaded: false,
    error: null,
  },
  auth: {
    user: { name: null, email: null, avatar: null, id: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },
};

export default initialState;
