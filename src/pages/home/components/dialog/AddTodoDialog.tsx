import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import StyledCustomTextField from "../../../../components/common/textFields/CustomTextField";
import StyledCustomSmallButton from "../../../../components/common/buttons/small/CustomSmallButton";

interface AddTodoDialogProps {
  open: boolean;
  task: string;
  description: string;
  onOpenDialog: React.MouseEventHandler<HTMLDivElement>;
  onCloseDialog: React.MouseEventHandler;
  onAddTodo: React.MouseEventHandler<HTMLButtonElement>;
  onTaskChange: React.ChangeEventHandler;
  onDescriptionChange: React.ChangeEventHandler;
}

const AddTodoDialog = ({
  open,
  task,
  description,
  onOpenDialog,
  onCloseDialog,
  onAddTodo,
  onTaskChange,
  onDescriptionChange
}: AddTodoDialogProps) => {
  console.log(open);
  return (
    <Dialog
      open={open}
      aria-labelledby="add-todo-dialog"
      aria-describedby="add todo dialog to add a new to-do"
      sx={{ minWidth: "480px", minHeight: "480px" }}
    >
      <DialogTitle id="alert-dialog-title" sx={{ fontFamily: "IBM Plex Mono" }}>
        Add to-do
      </DialogTitle>
      <DialogContent>
        <div className="flex flex-col gap-y-4 mt-4">
          <StyledCustomTextField
            id="todo-task"
            label="Task"
            helperText="The task itself"
            value={task}
            onChange={onTaskChange}
          />
          <StyledCustomTextField
            id="todo-description"
            label="Description"
            helperText="Additional info"
            value={description}
            onChange={onDescriptionChange}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <StyledCustomSmallButton
          id="close-dialog-button"
          onClick={onCloseDialog}
        >
          Close
        </StyledCustomSmallButton>
        <StyledCustomSmallButton id="add-todo-button" onClick={onAddTodo}>
          Add
        </StyledCustomSmallButton>
      </DialogActions>
    </Dialog>
  );
};

export default AddTodoDialog;
