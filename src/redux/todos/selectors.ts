import { IInitialState } from 'types/types';

export const selectTodos = (state: IInitialState) => state.todos.items;

export const selectError = (state: IInitialState) => state.todos.error;

export const selectIsLoading = (state: IInitialState) => state.todos.isLoading;

export const selectIsLoaded = (state: IInitialState) => state.todos.isLoaded;
