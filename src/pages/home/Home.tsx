import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchTodos } from "../../redux/todosSlice";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ChecklistIcon from "@mui/icons-material/Checklist";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";

const Tasks = () => {
  const state = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const overviewText = useRef(null);

  const upcomingTasks = useRef(0);
  const inProgressTasks = useRef(0);
  const completedTasks = useRef(0);

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
        <button className="bg-black text-white px-8 py-2 rounded-[20px] font-semibold hover:bg-[#333] transition-all duration-300">
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
    </div>
  );
};

export default Tasks;
