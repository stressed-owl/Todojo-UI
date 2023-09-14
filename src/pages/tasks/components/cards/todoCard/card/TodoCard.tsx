import {
  Card,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoCardProps {
  task: string;
  description?: string;
  date: string;
  onDeleteToDo: React.MouseEventHandler;
}

const TodoCard = ({ task, date, description, onDeleteToDo }: TodoCardProps) => {
  return (
    <Card className="mt-6 w-72 min-h-[240px] bg-black rounded-md flex flex-col justify-between p-4 hover:duration-300 hover:bg-gray-800">
      <CardBody>
        <Typography
          color="white"
          className="mb-2 text-2xl font-medium"
        >
          {date}
        </Typography>
        <Typography className="text-[18px] font-bold text-white">
          {task}
        </Typography>
        <Typography className="text-[15px] text-white mt-2">
          {description}
        </Typography>
      </CardBody>
      <CardFooter divider={true} className="flex justify-center items-center">
        <Tooltip
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          content="Delete to-do"
          placement="bottom"
          className="font-semibold bg-blue-300 p-2 rounded-sm"
        >
          <IconButton
            onClick={onDeleteToDo}
            className="text-white p-2 rounded-xl"
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default TodoCard;
