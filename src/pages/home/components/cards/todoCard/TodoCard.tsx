import {
  Card,
  CardBody,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import DoneIcon from "@mui/icons-material/Done";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Box } from "@mui/material";

interface TodoCardProps {
  task: string;
  description?: string;
  date: string;
  onCompleteTodo: React.MouseEventHandler;
}

const TodoCard = ({ task, date, onCompleteTodo }: TodoCardProps) => {
  return (
    <Card
      className="px-5 py-4 bg-[#111] w-full max-w-[575px] min-h-[320px]"
      placeholder={undefined}
    >
      <CardBody placeholder={undefined} className="h-full">
        <Box
          sx={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "space-between",
            height: '100%',
          }}
        >
          <Box sx={{
            backgroundColor: '#fff',
            width: '100%',
            maxWidth: '90px',
            display: 'flex',
            justifyContent: 'center',
            padding: '8px 6px',
            borderRadius: 10
          }}>
            <Typography placeholder={undefined} className="text-[14px] font-bold">
              High
            </Typography>
          </Box>
          <Box>
            <Typography
              placeholder={undefined}
              className="text-[28px] font-bold text-white"
            >
              {task}
            </Typography>
          </Box>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              columnGap: 1
            }}>
              <CalendarTodayIcon className="text-white"/>
              <Typography
                placeholder={undefined}
                className="text-[14px] font-bold text-white"
              >
                {date}
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
