import { Button, Card, Input, Typography } from "@material-tailwind/react";
import AddIcon from "@mui/icons-material/Add";

interface TodoFormProps {
  onTaskValue: string;
  onDescriptionValue: string;
  onTaskChange: React.ChangeEventHandler<HTMLInputElement>;
  onDescriptionChange: React.ChangeEventHandler<HTMLInputElement>;
  onTodoAdd: React.MouseEventHandler;
}

const TodoForm = ({
  onTaskValue,
  onDescriptionValue,
  onTaskChange,
  onDescriptionChange,
  onTodoAdd,
}: TodoFormProps) => {
  return (
    <Card color="transparent">
      <div className="flex flex-col justify-center items-center">
        <Typography className="text-[20px] font-semibold">
          Add to-do down below
        </Typography>
        <form className="mt-4">
          <div>
            <Input
              variant="outlined"
              crossOrigin=""
              value={onTaskValue}
              onChange={onTaskChange}
              type="text"
              placeholder="Task"
              color="orange"
              className="py-3 !border !border-black px-4 text-[18px] w-[360px] max-w-[400px] rounded-md"
            />
            <Input
              variant="outlined"
              crossOrigin=""
              value={onDescriptionValue}
              onChange={onDescriptionChange}
              type="text"
              placeholder="Description"
              color="orange"
              className="py-3 mt-6 !border !border-black px-4 text-[18px] w-[360px] max-w-[400px] rounded-md"
            />
          </div>
          <div className="flex mt-8 items-center justify-center">
            <Button
              variant="gradient"
              size="lg"
              disabled={false}
              onClick={onTodoAdd}
              className="flex items-center gap-2 text-black text-lg hover:text-gray-600"
            >
              <AddIcon />
              Add to-do
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default TodoForm;
