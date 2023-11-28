import { IInitialState } from 'types/types';

const initialState: IInitialState = {
  todos: {
    items: [],
    isLoading: false,
    isLoaded: false,
    error: null,
  },
};

export default initialState;
