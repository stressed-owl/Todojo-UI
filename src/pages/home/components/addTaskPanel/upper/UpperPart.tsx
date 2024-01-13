import { Tooltip } from "@material-tailwind/react";
import MoreVert from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import SmallButton from "../../../../../components/common/buttons/small/CustomSmallButton";
import { AddTask } from "@mui/icons-material";
import React from "react";

interface UpperPartProps {
  onAddTodo: React.MouseEventHandler;
}

const UpperPart = ({ onAddTodo }: UpperPartProps) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-[18px] font-semibold">My tasks</p>
        <Tooltip
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          content="Task options"
          placement="bottom"
          className="font-semibold bg-[#C5C6D0] p-2 rounded-sm"
        >
          <IconButton size="small" className="min-w-[48px] min-h-[48px]">
            <MoreVert fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>
      <div className="mt-1">
        <SmallButton id="todo-add-button" onClick={onAddTodo}>
          <AddTask />
          Add to-do
        </SmallButton>
      </div>
    </>
  );
};

export default UpperPart;
