import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setSort } from '../features/tasks/tasksSlice';
import { selectTasksState } from '../features/tasks/tasksSelectors';

export default function FilterBar() {
  const dispatch = useDispatch();
  const state = useSelector(selectTasksState);

  const changeFilter = (k, v) => dispatch(setFilter({ [k]: v }));
  const changeSort = (field) => dispatch(setSort({ field, dir: state.sortBy.dir === 'asc' ? 'desc' : 'asc' }));

  return (
    <div className="filter_bar flex gap-2 items-center">
      <select value={state.filters.status} onChange={e=>changeFilter('status', e.target.value)} className="p-2 border rounded">
        <option value="all">All</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <select value={state.filters.priority} onChange={e=>changeFilter('priority', e.target.value)} className="p-2 border rounded">
        <option value="all">All priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={() => changeSort('createdAt')} className="p-2 border rounded">Sort by date</button>
      <button onClick={() => changeSort('priority')} className="p-2 border rounded">Sort by priority</button>
    </div>
  );
}
