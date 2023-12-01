export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  message?: string;
}

export interface ITodosInitialState {
  items: ITodo[];
  isLoading: boolean;
  isLoaded: boolean;
  error: string | null;
}

export interface IUser {
  id: number | null;
  name: string | null;
  email: string | null;
  lastName?: string;
  avatar: string | null;
  dateOfBirth?: string;
  phoneNumber?: string;
  location?: string;
}

export interface IAuthInitialState {
  user: IUser;
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface IInitialState {
  todos: ITodosInitialState;
  auth: IAuthInitialState;
}

export type Message = string;

export interface ICredentials {
  name?: string;
  password: string;
  email: string;
}

export interface IAuthResponse {
  access_token: string;
  email: string;
  password: string;
  name: string;
  avatar: string;
  role: string;
  id: number;
}
