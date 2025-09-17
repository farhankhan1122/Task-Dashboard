import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/tasks/tasksSlice';
import { localStorageMiddleware } from './middleware/localStorageMiddleware';
import { loggerMiddleware } from './middleware/loggerMiddleware';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware, localStorageMiddleware),
});
