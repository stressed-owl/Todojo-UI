import React from "react";
import { Todo } from "../../../../../interfaces";
import TodoCard from "../../cards/todoCard/card/TodoCard";

interface MainPartProps {
  todos: Todo[];
}

const MainPart = ({ todos }: MainPartProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoCard
          task={todo.task}
          description={todo.description}
          date={todo.date}
          onCompleteTodo={() => console.log("ASDSA")}
        />
      ))}
    </div>
  );
};

export default MainPart;
