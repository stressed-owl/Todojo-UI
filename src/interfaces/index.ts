export interface Todo {
  id?: number;
  task: string;
  description?: string;
  status?: string;
  date: string;
}

export interface TodosState {
  todos: Todo[];
  loading: boolean;
}

export interface Vacancy {
  id?: number;
  category: string;
  job: string;
  city: string;
  responsibilities: string;
  requirements: string;
  position?: string;
}

export interface VacanciesState {
  vacancies: Vacancy[],
  loading: boolean;
}

export interface Contact {
  id?: number;
  name: string;
  email: string;
  message: string;
}

export interface ContactState {
  contacts: Contact[],
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