import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllTasks } from '../features/tasks/tasksSelectors';

export default function TaskPage() {
  const { id } = useParams();
  const tasks = useSelector(selectAllTasks);
  const task = tasks.find(t => t.id === id);
  if(!task) return <div className="p-6">Task not found</div>;
  return (
    <div className="p-6">
      <h2 className="text-2xl">{task.title}</h2>
      <p className="text-gray-700 mt-2">{task.desc}</p>
      <div className="mt-4">Priority: {task.priority}</div>
      <div>Status: {task.status}</div>
    </div>
  );
}
