import React from "react";
import TextField from "../../../../components/common/textFields/CustomTextField";
import AddTodoButton from "../../../../components/common/buttons/small/CustomSmallButton";

interface AddTodoProps {
  onAddTodo: React.MouseEventHandler;
  task: string;
  description: string;
  onTaskChange: React.ChangeEventHandler<HTMLInputElement>;
  onDescriptionChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

const AddTodo = (props: AddTodoProps) => {
  return (
    <div className="mt-7 max-w-[400px] w-full">
      <div className="flex flex-col gap-y-4 !w-[100%]">
        <TextField
          id={"todo-text-field"}
          label={"To-do"}
          helperText={"Add your to-do here"}
          value={props.task}
          onChange={props.onTaskChange}
          width="100%"
          maxWidth="450px"
        />
        <TextField
          id={"description-text-field"}
          label={"Description"}
          helperText={"Add your description here"}
          value={props.description}
          onChange={props.onDescriptionChange}
          width="100%"
          maxWidth="450px"
        />
      </div>
      <div className="mt-5 flex justify-center">
        <AddTodoButton id={"btn-add-todo"} onClick={props.onAddTodo}>
          Add to-do
        </AddTodoButton>
      </div>
    </div>
  );
};

export default AddTodo;
