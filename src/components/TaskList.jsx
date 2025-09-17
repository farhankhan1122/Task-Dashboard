import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredSortedTasks } from '../features/tasks/tasksSelectors';
import TaskItem from './TaskItem';
import FilterBar from './FilterBar';

export default function TaskList() {
  const tasks = useSelector(selectFilteredSortedTasks);

  return (
    <div>
      <FilterBar />
      <div className="mt-4 grid gap-3">
        {tasks.length === 0 && <div className="no_task_found text-gray-500">No tasks found.</div>}
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
