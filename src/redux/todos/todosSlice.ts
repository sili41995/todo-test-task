import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import { addTodo, deleteTodo, fetchTodos, updateTodo } from './operations';
import { ITodosInitialState } from 'types/types';
import { logout } from 'redux/auth/authSlice';

const todosState: ITodosInitialState = initialState.todos;

const todosSlice = createSlice({
  name: 'Todos',
  initialState: todosState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        isLoaded: true,
        error: initialState.todos.error,
        items: payload,
      }))
      .addCase(addTodo.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: [...state.items, payload],
      }))
      .addCase(deleteTodo.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: state.items.filter(({ id }) => id !== payload.id),
      }))
      .addCase(updateTodo.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: [...state.items.filter(({ id }) => id !== payload.id), payload],
      }))
      .addCase(logout, () => ({ ...initialState.todos }))
      .addMatcher(
        isAnyOf(
          fetchTodos.pending,
          addTodo.pending,
          deleteTodo.pending,
          updateTodo.pending
        ),
        (state) => ({
          ...state,
          isLoading: true,
        })
      )
      .addMatcher(
        isAnyOf(
          fetchTodos.rejected,
          addTodo.rejected,
          deleteTodo.rejected,
          updateTodo.rejected
        ),
        (state, { payload }) => ({
          ...state,
          isLoading: false,
          error: payload as string,
        })
      );
  },
});

export default todosSlice.reducer;
