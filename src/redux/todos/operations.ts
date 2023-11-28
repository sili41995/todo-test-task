import { createAsyncThunk } from '@reduxjs/toolkit';
import todosServiceApi from 'service/todosServiceApi';
import { ITodo } from 'types/types';

export const fetchTodos = createAsyncThunk<
  ITodo[],
  undefined,
  { rejectValue: string }
>(
  'todos/fetchAll',
  async (
    _,
    {
      rejectWithValue,
      signal,
    }: { rejectWithValue: Function; signal: AbortSignal }
  ) => {
    try {
      const Todos = await todosServiceApi.fetchTodos(signal);
      return Todos;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const addTodo = createAsyncThunk<ITodo, ITodo, { rejectValue: string }>(
  'todos/addTodo',
  async (todo: ITodo, { rejectWithValue }: { rejectWithValue: Function }) => {
    try {
      const response = await todosServiceApi.addTodo(todo);
      return { ...response, ...todo };
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const deleteTodo = createAsyncThunk<
  ITodo,
  number,
  { rejectValue: string }
>(
  'todos/deleteTodo',
  async (id: number, { rejectWithValue }: { rejectWithValue: Function }) => {
    try {
      await todosServiceApi.deleteTodo(id);
      return { id };
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateTodo = createAsyncThunk<
  ITodo,
  ITodo,
  { rejectValue: string }
>(
  'todos/updateTodo',
  async (data, { rejectWithValue }: { rejectWithValue: Function }) => {
    try {
      await todosServiceApi.updateTodo(data);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
