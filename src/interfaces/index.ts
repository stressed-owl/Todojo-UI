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

export interface NavLink {
  name: string;
  path: string;
}

export interface ExtendedNavLink {
  id: string;
  name: string;
  path: string;
  icon: any;
  linkText: string;
}
