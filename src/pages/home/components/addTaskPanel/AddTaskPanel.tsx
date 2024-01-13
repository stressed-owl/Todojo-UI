import React from 'react';
import UpperPart from './upper/UpperPart';
import MainPart from './main/MainPart';
import { Todo } from '../../../../interfaces';

interface AddTaskPanelProps {
    onAddTodo: React.MouseEventHandler;
    todos: Todo[];
}

const AddTaskPanel = ({ onAddTodo, todos }: AddTaskPanelProps) => {
  return (
    <div className="shadow-sm border-[1px] rounded-xl max-w-[670px] w-full m-auto pl-4 py-3 pr-1 hover:shadow-md hover:border-[#C5C6D0]">
        <UpperPart onAddTodo={onAddTodo} />
        <MainPart todos={todos}/>
    </div>
  )
}

export default AddTaskPanel;