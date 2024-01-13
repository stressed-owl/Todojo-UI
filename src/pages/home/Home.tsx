import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addTodo, fetchTodos } from "../../redux/todosSlice";
import TodoCard from "./components/cards/todoCard/card/TodoCard";
import AddTaskPanel from "./components/addTaskPanel/AddTaskPanel";

const Tasks = () => {
  const state = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  // Handlers for changes in text fields

  const handleTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleAddTodo = () => {
    if (task.length > 0 && description.length > 0) {
      const todo = {
        task: task,
        description: description,
        date: new Date().toLocaleDateString(),
      };
      dispatch(addTodo(todo));
    }
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="mt-[150px]">
      <div>
        <AddTaskPanel onAddTodo={handleAddTodo} todos={state.todos}/>
      </div>
    </div>
  );
};

export default Tasks;
