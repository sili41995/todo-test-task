import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import { loginUser, refreshUser, registerUser } from './operations';
import { IAuthInitialState } from 'types/types';

const authState: IAuthInitialState = initialState.auth;

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    logout: (state) => ({
      ...initialState.auth,
      user: {
        ...initialState.auth.user,
        name: state.user.name,
        avatar: state.user.avatar,
      },
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(loginUser.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        token: payload.access_token,
      }))
      .addCase(refreshUser.pending, (state) => ({
        ...state,
        isLoading: true,
        isRefreshing: true,
      }))
      .addCase(refreshUser.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        user: {
          name: payload.name,
          email: payload.email,
          avatar: payload.avatar,
        },
        isLoggedIn: true,
        isRefreshing: false,
      }))
      .addCase(refreshUser.rejected, (state) => ({
        ...state,
        isLoading: false,
        isRefreshing: false,
      }))
      .addMatcher(
        isAnyOf(registerUser.pending, loginUser.pending),
        (state) => ({ ...state, isLoading: true, error: null })
      )
      .addMatcher(
        isAnyOf(registerUser.rejected, loginUser.rejected),
        (state, { payload }) => ({
          ...state,
          isLoading: false,
          error: payload as string,
        })
      );
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
