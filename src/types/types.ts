export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodosInitialState {
  items: ITodo[];
  isLoading: boolean;
  isLoaded: boolean;
  error: string | null;
}

export interface ITodosInitialState {
  items: ITodo[];
  isLoading: boolean;
  isLoaded: boolean;
  error: string | null;
}

export interface IInitialState {
  todos: ITodosInitialState;
}

export type Message = string;

export interface ICredentials {
  name?: string;
  password: string;
  email: string;
}
