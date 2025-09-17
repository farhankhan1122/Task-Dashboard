import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTaskOptimistic, deleteTaskOptimistic } from '../features/tasks/tasksSlice';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import TaskForm from './TaskForm';

dayjs.extend(relativeTime);

export default function TaskItem({ task }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);

  const handleStatusChange = (e) => {
    dispatch(updateTaskOptimistic({ id: task.id, status: e.target.value }));
  };

  const handleDelete = () => {
    dispatch(deleteTaskOptimistic(task.id));
  };

  return (
    <div className={`task-card ${task.status} bg-white p-4 rounded shadow`}>
      {editing ? (
        <TaskForm task={task} onSuccess={() => setEditing(false)} />
      ) : (
        <div className="flex justify-between items-center">
          <div>
            <Link to={`/task/${task.id}`} className="text-lg font-semibold">
              {task.title}
            </Link>
            <div className="text-sm text-gray-500">{task.desc}</div>
            <div className="text-xs text-gray-400">
              Created {dayjs(task.createdAt).fromNow()}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="task_priority px-2 py-1 rounded bg-gray-100">{task.priority}</div>

            <select
              value={task.status}
              onChange={handleStatusChange}
              className="task_status px-2 py-1 rounded border bg-gray-100"
            >
              <option value="todo">Todo</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>

            <button
              onClick={() => setEditing(true)}
              className="px-3 py-1 bg-blue-500 text-white rounded"
            >
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
