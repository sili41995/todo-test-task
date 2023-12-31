import { createAsyncThunk } from '@reduxjs/toolkit';
import contactsServiceApi from 'service/todosServiceApi';
import { ICredentials, IInitialState, IUser, IAuthResponse } from 'types/types';

export const registerUser = createAsyncThunk<
  IAuthResponse,
  ICredentials,
  { rejectValue: string }
>(
  'auth/registerUser',
  async (
    credentials: ICredentials,
    { rejectWithValue }: { rejectWithValue: Function }
  ) => {
    try {
      const response = await contactsServiceApi.registerUser(credentials);
      if (!response.id) {
        throw Error('Sign Up failed');
      }
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk<
  IAuthResponse,
  ICredentials,
  { rejectValue: string }
>(
  'auth/loginUser',
  async (
    credentials: ICredentials,
    {
      rejectWithValue,
      signal,
    }: { rejectWithValue: Function; signal: AbortSignal }
  ) => {
    try {
      const response = await contactsServiceApi.loginUser(credentials, signal);
      if (!response.access_token) {
        throw new Error('Wrong username or password');
      }
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const refreshUser = createAsyncThunk<
  IUser,
  undefined,
  { rejectValue: string }
>(
  'auth/refreshUser',
  async (
    _,
    {
      rejectWithValue,
      getState,
    }: { rejectWithValue: Function; getState: Function }
  ) => {
    const state = getState() as IInitialState;
    const { token } = state.auth;
    try {
      contactsServiceApi.token = token;
      const response = await contactsServiceApi.refreshUser();
      if (!response.id) {
        throw Error('Log In failed');
      }
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
