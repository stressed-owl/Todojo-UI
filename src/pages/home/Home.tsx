import { ChangeEvent, useState } from "react";
import TodoCard from "./components/cards/todoCard/TodoCard";
import AddTodo from "./components/addTodo/AddTodo";
import { useGetTodosQuery } from "../../services/todo";
import { Todo } from "../../interfaces";

const Tasks = () => {
  const { data, isLoading } = useGetTodosQuery();

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
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
    }
    setTask("");
    setDescription("");
  };

  const handleDeleteTodo = (todo: any) => {
    setIsDeleteTodo(prevState => !prevState);
  }

  console.log('TODOS', data);
  

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
        {/* {todos.map((todo: Todo) => (
          <TodoCard
            task={todo.task}
            description={todo.description}
            date={todo.date}
            onCompleteTodo={() => handleDeleteTodo(todo)}
            key={todo.id}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Tasks;
