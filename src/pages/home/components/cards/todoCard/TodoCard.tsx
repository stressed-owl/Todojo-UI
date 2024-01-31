import {
  Card,
  CardBody,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import DoneIcon from "@mui/icons-material/Done";
import { Box } from "@mui/material";

interface TodoCardProps {
  task: string;
  description?: string;
  date: string;
  onCompleteTodo: React.MouseEventHandler;
}

const TodoCard = ({
  task,
  date,
  description,
  onCompleteTodo,
}: TodoCardProps) => {
  return (
    <Card
      className="px-5 py-4 bg-black transition duration-500 hover:bg-[#111111] w-full max-w-[300px]"
      placeholder={undefined}
    >
      <CardBody placeholder={undefined}>
        <Box
          sx={{
            display: "flex",
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box>
            <Typography
              placeholder={undefined}
              color="white"
              className="mb-2 text-2xl font-medium"
            >
              {date}
            </Typography>
            <Typography
              placeholder={undefined}
              className="text-[18px] font-bold text-white"
            >
              {task}
            </Typography>
            <Typography
              placeholder={undefined}
              className="text-[15px] text-white mt-2"
            >
              {description}
            </Typography>
          </Box>
          <Box>
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
                onClick={onCompleteTodo}
                className="text-white p-2 rounded-xl"
              >
                <DoneIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};

export default TodoCard;
