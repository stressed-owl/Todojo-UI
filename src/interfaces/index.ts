export interface Todo {
  id?: number;
  task: string;
  description?: string;
  priority?: string;
  date: string;
  completed: boolean;
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

export interface Contact {
  id?: number;
  name: string;
  email: string;
  message: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface ExtendedNavLink extends NavLink {
  id: string;
  icon: any;
  linkText: string;
}