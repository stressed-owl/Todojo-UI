import { ChangeEvent, useEffect, useState } from "react";
import TodoCard from "./components/cards/todoCard/TodoCard";
import AddTodo from "./components/addTodo/AddTodo";
import { useCreateTodoMutation, useDeleteTodoMutation, useGetTodosQuery } from "../../services/todo";
import { Todo } from "../../interfaces";

const Tasks = () => {
  const { data, refetch, isLoading } = useGetTodosQuery();
  const [createTodo] = useCreateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [isCreateTodo, setIsCreateTodo] = useState(false);
  const [isDeleteTodo, setIsDeleteTodo] = useState(false);

  const handleTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleAddTodo = () => {
    if (task.length > 0) {
      const todo = {
        task: task,
        description: description,
        date: new Date().toLocaleDateString(),
      };
      createTodo(todo);
      setIsCreateTodo(prevState => !prevState);
    }
    setTask("");
    setDescription("");
  };

  const handleDeleteTodo = (todo: Todo) => {
    deleteTodo(todo.id);
    setIsDeleteTodo(prevState => !prevState);
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
              description={todo.description}
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
