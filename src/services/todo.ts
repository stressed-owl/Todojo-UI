import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Contact, Todo, Vacancy } from '../interfaces';

const baseURL = 'http://localhost:3333';

export const todoAPI = createApi({
  reducerPath: 'todoAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => 'todos',
    }),
    createTodo: builder.mutation<Todo, Partial<Todo>>({
        query: (body) => ({
            url: 'todos',
            method: "POST",
            body
        })
    }),
    deleteTodo: builder.mutation<{ success: Boolean, id: number }, number | undefined>({
        query(id) {
            return {
                url: `todos/${id}`,
                method: 'DELETE'
            }
        }
    }),
    createContact: builder.mutation<Contact, Partial<Contact>>({
        query: (body) => ({
            url: 'contact',
            method: 'POST',
            body
        })
    }),
    getVacancies: builder.query<Vacancy[], void>({
        query: () => 'vacancy'
    })
  }),
})

export const { useGetTodosQuery, useCreateTodoMutation, useDeleteTodoMutation, useCreateContactMutation, useGetVacanciesQuery } = todoAPI