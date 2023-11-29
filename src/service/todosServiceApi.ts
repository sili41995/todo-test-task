import initialState from 'redux/initialState';
import { IAuthResponse, ICredentials, ITodo } from 'types/types';

class TodosServiceApi {
  private TODOS_BASE_URL = 'https://jsonplaceholder.typicode.com';
  private AUTH_BASE_URL = 'https://api.escuelajs.co/api/v1';
  private TOKEN = initialState.auth.token;

  get token() {
    return this.TOKEN;
  }

  set token(newToken) {
    this.TOKEN = newToken;
  }

  registerUser(data: ICredentials): Promise<IAuthResponse> {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.AUTH_BASE_URL}/users/`, options).then((response) =>
      response.json()
    );
  }

  loginUser(data: ICredentials, signal: AbortSignal): Promise<IAuthResponse> {
    const options = {
      signal,
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.AUTH_BASE_URL}/auth/login`, options).then((response) =>
      response.json()
    );
  }

  refreshUser(): Promise<IAuthResponse> {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.AUTH_BASE_URL}/auth/profile`, options).then(
      (response) => response.json()
    );
  }

  fetchTodos(signal: AbortSignal): Promise<ITodo[]> {
    const options = {
      signal,
      method: 'GET',
    };

    return fetch(`${this.TODOS_BASE_URL}/todos`, options).then((response) => {
      if (!response.ok) {
        throw new Error('Loading Todos failed');
      }
      return response.json();
    });
  }

  addTodo(data: ITodo): Promise<ITodo> {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
    };
    return fetch(`${this.TODOS_BASE_URL}/todos`, options).then((response) => {
      if (!response.ok) {
        throw new Error('Adding a Todo failed');
      }
      return response.json();
    });
  }

  deleteTodo(id: number): Promise<ITodo> {
    const options = {
      method: 'DELETE',
    };
    return fetch(`${this.TODOS_BASE_URL}/todos/${id}`, options).then(
      (response) => {
        if (!response.ok) {
          throw new Error('Deleting a Todo failed');
        }
        return response.json();
      }
    );
  }

  updateTodo(data: ITodo): Promise<ITodo> {
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
    };
    return fetch(`${this.TODOS_BASE_URL}/todos/${data.id}`, options).then(
      (response) => {
        if (!response.ok) {
          throw new Error('Todo update failed');
        }
        return response.json();
      }
    );
  }
}

const todosServiceApi = new TodosServiceApi();

export default todosServiceApi;
