import { ChangeEvent, useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addTodo, fetchTodos } from "../../redux/todosSlice";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ChecklistIcon from "@mui/icons-material/Checklist";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import AddTodoDialog from "./components/dialog/AddTodoDialog";

const Tasks = () => {
  const state = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const overviewText = useRef(null);

  const upcomingTasks = useRef(0);
  const inProgressTasks = useRef(0);
  const completedTasks = useRef(0);

  // Handlers for opening and closing a dialog

  const handleOpen = () => {
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  console.log('DIALOG', isDialogOpen);

  // Handlers for changes in text fields
  
  const handleTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }

  const handleAddTodo = () => {
    if (task.length > 0 && description.length > 0) {
      const todo = {
        task: task,
        description: description,
        date: new Date().toLocaleDateString(),
      };
      dispatch(addTodo(todo));
    }
  };

  useEffect(() => {
    dispatch(fetchTodos());

    const typed = new Typed(overviewText.current, {
      strings: ["Overview"],
      typeSpeed: 50,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, [dispatch]);

  return (
    <div className="mt-[175px]">
      <p>&#47;&#47; To-dos</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-[68px]" ref={overviewText}></span>
        <button
          onClick={handleOpen}
          className="bg-black text-white px-8 py-2 rounded-[20px] font-semibold hover:bg-[#333] transition-all duration-300"
        >
          Add to-do
        </button>
      </div>
      <div>
        <hr className="mt-4 border-black" />
        <p className="mt-4 text-[13px]">
          HAVE A BIRD'S EYE VIEW OF ALL YOUR TASKS
        </p>
        <hr className="mt-16 border-black" />
      </div>
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-x-2">
          <ListAltIcon />
          <span className="font-medium text-[19px]">Upcoming Tasks: </span>
          <span className="text-[24px] font-bold">{upcomingTasks.current}</span>
        </div>
        <div className="flex items-center gap-x-2">
          <EventRepeatIcon />
          <span className="font-medium text-[19px]">In-Progress Tasks: </span>
          <span className="text-[24px] font-bold">
            {inProgressTasks.current}
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <ChecklistIcon />
          <span className="font-medium text-[19px]">Completed Tasks: </span>
          <span className="text-[24px] font-bold">
            {completedTasks.current}
          </span>
        </div>
      </div>
      {isDialogOpen && (
        <AddTodoDialog
          open={isDialogOpen}
          task={task}
          description={description}
          onOpenDialog={handleOpen}
          onCloseDialog={handleClose}
          onAddTodo={handleAddTodo}
          onTaskChange={handleTaskChange}
          onDescriptionChange={handleDescriptionChange}
        />
      )}
    </div>
  );
};

export default Tasks;
