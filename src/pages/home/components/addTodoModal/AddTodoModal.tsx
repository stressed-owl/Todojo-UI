import React from "react";
import TextField from "../../../../components/common/textFields/CustomTextField";
import TodoButton from "../../../../components/common/buttons/small/CustomSmallButton";
import { Box, Modal } from "@mui/material";

interface AddTodoModalProps {
  task: string;
  description: string;
  priority: string;
  isModalOpen: boolean;
  onAddTodo: React.MouseEventHandler;
  onCancelAddTodo: React.MouseEventHandler;
  onTaskChange: React.ChangeEventHandler<HTMLInputElement>;
  onDescriptionChange: React.ChangeEventHandler<HTMLInputElement>;
  onPriorityChange: React.ChangeEventHandler<HTMLInputElement>;
  onCloseModal: React.MouseEventHandler;
  className?: string;
}

const AddTodo = (props: AddTodoModalProps) => {
  return (
    <Modal
      open={props.isModalOpen}
      onClose={props.onCloseModal}
      aria-labelledby="add to-do modal"
      aria-describedby="modal is used to add to-do"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          width: "100%",
          height: "100%",
          maxWidth: 500,
          maxHeight: 450,
          padding: 4,
          borderRadius: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 2
          }}
        >
          <TextField
            id={"todo-text-field"}
            label={"To-do"}
            helperText={"Type your to-do here"}
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
          <TextField
            id={"priority-text-field"}
            label={"Priority"}
            helperText={"Write a priority for your to-do"}
            value={props.priority}
            onChange={props.onPriorityChange}
            width="100%"
            maxWidth="450px"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            columnGap: 1.5,
            marginTop: 4,
          }}
        >
          <TodoButton id="btn-cancel-todo" onClick={props.onCancelAddTodo}>
            Cancel
          </TodoButton>
          <TodoButton id={"btn-add-todo"} onClick={props.onAddTodo}>
            Add to-do
          </TodoButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddTodo;
