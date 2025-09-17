import { createSelector } from '@reduxjs/toolkit';

export const selectTasksState = state => state.tasks;

export const selectAllTasks = createSelector(
  selectTasksState,
  t => t.tasks
);

export const selectFilteredSortedTasks = createSelector(
  selectAllTasks,
  selectTasksState,
  (tasks, state) => {
    let res = tasks.slice();
    const { status, priority } = state.filters;
    if (status && status !== 'all') res = res.filter(t => t.status === status);
    if (priority && priority !== 'all') res = res.filter(t => t.priority === priority);
    const { field, dir } = state.sortBy;
    res.sort((a, b) => {
      if (field === 'priority') {
        const order = { high: 3, medium: 2, low: 1 };
        return (order[b.priority] - order[a.priority]) * (dir === 'asc' ? -1 : 1);
      } else {
        return (new Date(b.createdAt) - new Date(a.createdAt)) * (dir === 'asc' ? -1 : 1);
      }
    });
    return res;
  }
);
