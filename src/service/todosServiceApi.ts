import { ITodo } from 'types/types';

class TodosServiceApi {
  private BASE_URL = 'https://jsonplaceholder.typicode.com';

  fetchTodos(signal: AbortSignal): Promise<ITodo[]> {
    const options = {
      signal,
      method: 'GET',
    };

    return fetch(`${this.BASE_URL}/todos`, options).then((response) => {
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
    return fetch(`${this.BASE_URL}/todos`, options).then((response) => {
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
    return fetch(`${this.BASE_URL}/todos/${id}`, options).then((response) => {
      if (!response.ok) {
        throw new Error('Deleting a Todo failed');
      }
      return response.json();
    });
  }

  updateTodo(data: ITodo): Promise<ITodo> {
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
    };
    return fetch(`${this.BASE_URL}/todos/${data.id}`, options).then(
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
