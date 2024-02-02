import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addTodo, fetchTodos, deleteTodo } from "../../redux/todosSlice";
import TodoCard from "./components/cards/todoCard/TodoCard";
import AddTodo from "./components/addTodo/AddTodo";

const Tasks = () => {
  const state = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [isDeleteTodo, setIsDeleteTodo] = useState(false);

  // Handlers for changes in text fields

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
      dispatch(addTodo(todo));
    }
    setTask("");
    setDescription("");
  };

  const handleDeleteTodo = (todo: any) => {
    dispatch(deleteTodo(todo))
    setIsDeleteTodo(prevState => !prevState);
  }

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch, isDeleteTodo]);

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
        {state.todos.map((todo) => (
          <TodoCard
            task={todo.task}
            description={todo.description}
            date={todo.date}
            onCompleteTodo={() => handleDeleteTodo(todo)}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
