import { createSlice, nanoid } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const initialState = {
  tasks: [], // { id, title, desc, priority, status, createdAt, updatedAt }
  filters: { status: 'all', priority: 'all' },
  sortBy: { field: 'createdAt', dir: 'desc' }, // or 'priority'
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    loadTasks(state, action) {
      state.tasks = action.payload;
    },
    addTaskOptimistic: {
      reducer(state, action) {
        state.tasks.unshift(action.payload);
      },
      prepare(task) {
        return { payload: { ...task } };
      }
    },
    addTaskSuccess(state, action) {
      // in optimistic pattern, success might update server id — here ignored
    },
    addTaskFailed(state, action) {
      const id = action.payload.id;
      state.tasks = state.tasks.filter(t => t.id !== id);
      state.error = action.payload.error;
    },
    updateTaskOptimistic(state, action) {
      const updated = action.payload;
      state.tasks = state.tasks.map(t => t.id === updated.id ? { ...t, ...updated, updatedAt: dayjs().toISOString() } : t);
    },
    updateTaskFailed(state, action) {
      // optionally revert — we'd need the previous snapshot stored somewhere; keep simple
      state.error = action.payload.error;
    },
    deleteTaskOptimistic(state, action) {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
    setFilter(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSort(state, action) {
      state.sortBy = action.payload;
    },
  }
});

export const {
  loadTasks,
  addTaskOptimistic,
  addTaskSuccess,
  addTaskFailed,
  updateTaskOptimistic,
  updateTaskFailed,
  deleteTaskOptimistic,
  setFilter,
  setSort,
} = tasksSlice.actions;

export default tasksSlice.reducer;
