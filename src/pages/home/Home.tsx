import { ChangeEvent, useEffect, useState } from "react";
import TodoCard from "./components/cards/todoCard/TodoCard";
import AddTodo from "./components/addTodo/AddTodo";
import {
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
} from "../../services/todo";
import { Todo } from "../../interfaces";
import { months } from "../../data/Data";

const Tasks = () => {
  const { data, refetch, isLoading } = useGetTodosQuery();
  const [createTodo] = useCreateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [isCreateTodo, setIsCreateTodo] = useState(false);
  const [isDeleteTodo, setIsDeleteTodo] = useState(false);

  const date = new Date();

  const handleTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const formatTime = (date: Date) => {
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const month = months[monthIndex];
    let hour = date.getHours();
    const minute = date.getMinutes();

    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12;

    const formattedTime = `${day} ${month} ${hour}:${
      minute < 10 ? "0" + minute : minute
    } ${ampm}`;

    return formattedTime;
  };

  const handleAddTodo = () => {
    if (task.length > 0) {
      const todo = {
        task: task,
        description: description,
        date: formatTime(date),
      };
      createTodo(todo);
      setIsCreateTodo((prevState) => !prevState);
    }
    setTask("");
    setDescription("");
  };

  const handleDeleteTodo = (todo: Todo) => {
    deleteTodo(todo.id);
    setIsDeleteTodo((prevState) => !prevState);
  };

  useEffect(() => {
    refetch();
  }, [data, refetch, isCreateTodo, isDeleteTodo]);

  return (
    <div className="mt-[150px]">
      <div className="flex justify-center">
        <AddTodo
          onAddTodo={handleAddTodo}
          onTaskChange={handleTaskChange}
          onDescriptionChange={handleDescriptionChange}
          task={task}
          description={description}
        />
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {isLoading ? (
          <p className="text-3xl">Loading...</p>
        ) : (
          data?.map((todo: Todo) => (
            <TodoCard
              task={todo.task}
              date={todo.date}
              onCompleteTodo={() => handleDeleteTodo(todo)}
              key={todo.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Tasks;
