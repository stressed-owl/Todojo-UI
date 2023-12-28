import {
  Card,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import DoneIcon from '@mui/icons-material/Done';

interface TodoCardProps {
  task: string;
  description?: string;
  date: string;
  onCompleteTodo: React.MouseEventHandler;
}

const TodoCard = ({ task, date, description, onCompleteTodo }: TodoCardProps) => {
  return (
    <Card className="mt-6 w-72 min-h-[240px] bg-black rounded-md flex flex-col justify-between p-4" placeholder={undefined}>
      <CardBody placeholder={undefined}>
        <Typography placeholder={undefined} color="white" className="mb-2 text-2xl font-medium">
          { date }
        </Typography>
        <Typography placeholder={undefined} className="text-[18px] font-bold text-white">
          { task }
        </Typography>
        <Typography placeholder={undefined} className="text-[15px] text-white mt-2">
          { description }
        </Typography>
      </CardBody>
      <CardFooter placeholder={undefined} divider={true} className="flex justify-center items-center">
        <Tooltip
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          content="Complete"
          placement="bottom"
          className="font-semibold bg-blue-300 p-2 rounded-sm"
        >
          <IconButton
            placeholder={undefined}
            onClick={ onCompleteTodo }
            className="text-white p-2 rounded-xl"
          >
            <DoneIcon />
          </IconButton>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default TodoCard;
