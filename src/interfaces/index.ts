export interface Todo {
  id?: number;
  task: string;
  description?: string;
  date: string;
}

export interface TodosState {
  todos: Todo[];
  loading: boolean;
}
