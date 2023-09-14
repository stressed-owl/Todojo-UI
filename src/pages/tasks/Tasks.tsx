import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addTodo, deleteTodo, fetchTodos } from "../../redux/todosSlice";
import TodoCard from "./components/cards/todoCard/card/TodoCard";
import TodoForm from "./components/form/TodoForm";
import { Snackbar } from "@mui/material";
import { Todo } from "../../interfaces";

const Tasks = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const [task, setTask] = useState("Take out the trash");
  const [description, setDescription] = useState("My mom asked me");
  const [isTaskAddedSnackShown, setIsTaskAddedSnackShown] = useState(false);
  const [isTaskDeletedSnackShown, setIsTaskDeletedSnackShown] = useState(false);

  const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const clearInputFields = () => {
    setTask("");
    setDescription("");
  };

  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const todo: Todo = {
    task: task,
    description: description,
    date: new Date().toLocaleDateString(),
  };

  const addTask = (todo: Todo) => {
    if (task.length > 0) {
      dispatch(addTodo(todo));
      setIsTaskAddedSnackShown(true);
      clearInputFields();
    }
  };

  const deleteToDo = (todoID: number) => {
    dispatch(deleteTodo(todoID));
    setIsTaskDeletedSnackShown(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setIsTaskAddedSnackShown(false);
    setIsTaskDeletedSnackShown(false);
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [isTaskAddedSnackShown, isTaskDeletedSnackShown]);

  return (
    <div>
      <div className="max-w-7xl m-auto p-4">
        <div className="flex justify-center mt-3">
          <TodoForm
            onTaskValue={task}
            onTaskChange={handleChangeTask}
            onDescriptionChange={handleChangeDescription}
            onDescriptionValue={description}
            onTodoAdd={() => addTask(todo)}
          />
        </div>

        <div className="mt-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {todos.map((todo, id) => (
              <TodoCard
                key={id}
                date={todo["date"]}
                task={todo["task"]}
                description={todo["description"]}
                onDeleteToDo={() => deleteToDo(todo.id!)}
              />
            ))}
          </div>
        </div>
      </div>

      {isTaskAddedSnackShown && (
        <Snackbar
          open={isTaskAddedSnackShown}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Task added"
        />
      )}

      {isTaskDeletedSnackShown && (
        <Snackbar
          open={isTaskDeletedSnackShown}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Task deleted"
        />
      )}
    </div>
  );
};

export default Tasks;
