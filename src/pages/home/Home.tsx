import { ChangeEvent, useEffect, useState } from "react";
import AddTodoButton from "../../components/common/buttons/small/CustomSmallButton";
import { Todo } from "../../interfaces";
import { formatTime } from "../../logic";
import {
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from "../../services/todo";
import AddTodoModal from "./components/addTodoModal/AddTodoModal";
import TodoCard from "./components/cards/todoCard/TodoCard";

const Tasks = () => {
  const { data, refetch, isLoading } = useGetTodosQuery();
  const [createTodo] = useCreateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [todo, setTodo] = useState({
    task: "",
    description: "",
    priority: "",
  });

  const [todoStates, setTodoStates] = useState({
    isCreateTodo: false,
    isDeleteTodo: false,
  })

  const handleTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, task: event.target.value });
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, description: event.target.value });
  };

  const handlePriorityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, priority: event.target.value });
  };

  // Handlers for CRUD operations

  const handleAddTodo = () => {
    if (todo.task.length > 0) {
      const addedTodo = {
        task: todo.task,
        description: todo.description,
        priority: todo.priority,
        date: formatTime(),
      };
      createTodo(addedTodo);
      setTodoStates({...todoStates, isCreateTodo: !todoStates.isCreateTodo});
    }
    clearInputFields();
    setIsOpenModal(false);
  };

  const handleDeleteTodo = (todo: Todo) => {
    deleteTodo(todo.id);
    setTodoStates({...todoStates, isDeleteTodo: !todoStates.isDeleteTodo});
  };

  const handleCompleteTodo = (todo: Todo) => {
    const updatedTodo: Todo = {
      ...todo,
      completed: true,
    };
    updateTodo(updatedTodo);
    deleteTodo(todo.id);
  };

  const clearInputFields = () => {
    setTodo({
      task: "",
      description: "",
      priority: "",
    });
  }

  // Handle modal display

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    clearInputFields();
  }

  useEffect(() => {
    refetch();
  }, [data, refetch, todoStates.isCreateTodo, todoStates.isDeleteTodo]);

  return (
    <div className="mt-[150px]">
      <div className="flex justify-center">
        <AddTodoButton id="btn-add-todo" onClick={handleOpenModal}>
          Add to-do
        </AddTodoButton>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {isLoading ? (
          <p className="text-3xl">Loading...</p>
        ) : (
          data?.map((todo: Todo) => (
            <TodoCard
              task={todo.task}
              date={todo.date}
              priority={todo.priority}
              onCompleteTodo={() => handleCompleteTodo(todo)}
              onDeleteTodo={() => handleDeleteTodo(todo)}
              key={todo.id}
            />
          ))
        )}
      </div>
      {isOpenModal && (
        <AddTodoModal
          task={todo.task}
          description={todo.description}
          priority={todo.priority}
          isModalOpen={isOpenModal}
          onCloseModal={handleCloseModal}
          onAddTodo={handleAddTodo}
          onCancelAddTodo={handleCloseModal}
          onTaskChange={handleTaskChange}
          onDescriptionChange={handleDescriptionChange}
          onPriorityChange={handlePriorityChange}
        />
      )}
    </div>
  );
};

export default Tasks;
