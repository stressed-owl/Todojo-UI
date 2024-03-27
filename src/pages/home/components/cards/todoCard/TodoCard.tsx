import {
  Card,
  CardBody,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import DoneIcon from "@mui/icons-material/Done";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";

interface TodoCardProps {
  task: string;
  description?: string;
  priority?: string;
  date: string;
  onCompleteTodo: React.MouseEventHandler;
  onDeleteTodo: React.MouseEventHandler;
}

const TodoCard = ({
  task,
  description,
  priority,
  date,
  onCompleteTodo,
  onDeleteTodo,
}: TodoCardProps) => {
  return (
    <Card
      className="px-5 py-4 bg-[#111] w-full max-w-[535px] min-h-[260px]"
      placeholder={undefined}
    >
      <CardBody placeholder={undefined} className="h-full">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              width: "100%",
              maxWidth: "90px",
              display: "flex",
              justifyContent: "center",
              padding: "8px 6px",
              borderRadius: 10,
            }}
          >
            <Typography
              placeholder={undefined}
              className="text-[14px] font-bold sm:text-[12px]"
            >
              {priority}
            </Typography>
          </Box>
          <Box>
            <Typography
              placeholder={undefined}
              className="text-[28px] font-bold text-white sm:text-[22px]"
            >
              {task}
            </Typography>
            <Typography
              placeholder={undefined}
              className="text-[22px] font-bold text-white sm:text-[16px]"
            >
              {description}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: 1,
            }}
          >
            <CalendarTodayIcon className="text-white" />
            <Typography
              placeholder={undefined}
              className="text-[14px] font-bold text-white sm:text-[13px]"
            >
              {date}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: 2.5,
            }}
          >
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
            <Tooltip
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
              content="Delete"
              placement="bottom"
              className="font-semibold bg-blue-300 p-2 rounded-sm"
            >
              <IconButton
                placeholder={undefined}
                onClick={onDeleteTodo}
                className="text-white p-2 rounded-xl"
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};

export default TodoCard;
