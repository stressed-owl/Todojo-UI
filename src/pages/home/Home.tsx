import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addTodo, deleteTodo, fetchTodos } from "../../redux/todosSlice";
import TodoCard from "./components/cards/todoCard/card/TodoCard";
import TodoForm from "./components/form/TodoForm";
import { descriptionExamples, taskExamples } from "../../data/Data";
import { Search } from "@mui/icons-material";

const Tasks = () => {
  const state = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const [_todo, _setTodo] = useState(
    taskExamples[Math.floor(Math.random() * taskExamples.length)]
  );

  const [description, setDescription] = useState(
    descriptionExamples[Math.floor(Math.random() * descriptionExamples.length)]
  );

  const [completeTodoState, setCompleteTodoState] = useState(false);

  const [searchTaskValue, setSearchTaskValue] = useState("");

  // Event handlers for task and description
  const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    _setTodo(event.target.value);
  };

  const handleChangeSearchTask = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTaskValue(event.target.value);
  };

  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  // When user hits 'Add to-do' button, input fields are cleared
  const clearInputFields = () => {
    _setTodo("");
    setDescription("");
  };

  const todo: Todo = {
    task: _todo,
    description: description,
    date: new Date().toLocaleDateString(),
  };

  const handleAddTodo = (todo: Todo) => {
    if (_todo.length > 0) {
      dispatch(addTodo(todo));
      clearInputFields();
    }
  };

  const handleCompleteTodo = (todo: Todo) => {
    dispatch(deleteTodo(todo));
    setCompleteTodoState((prevState) => !prevState);
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch, completeTodoState]);

  return (
    <div>
      <div className="max-w-7xl m-auto p-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search task"
            className="border-black border-[1px] w-full max-w-full p-3 rounded-[2px]"
            value={searchTaskValue}
            onChange={handleChangeSearchTask}
          />
          <button className="ml-[-50px] min-h-[48px] min-w-[48px]">
            <Search />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          <TodoForm
            taskValue={_todo}
            onTaskChange={handleChangeTask}
            onDescriptionChange={handleChangeDescription}
            descriptionValue={description}
            onTodoAdd={() => handleAddTodo(todo)}
          />
        </div>
        <div className="mt-6">
          <div className="flex items-center justify-center">
            <p className="text-[32px] font-semibold">Tasks</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            {state.todos.map((todo, id) => (
              <TodoCard
                key={id}
                {...todo}
                onCompleteTodo={() => handleCompleteTodo(todo)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
