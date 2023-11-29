import { combineReducers } from '@reduxjs/toolkit';
import todosReducer from './todos/todosSlice';
import authReducer from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  todos: todosReducer,
  auth: persistedReducer,
});

export default rootReducer;
