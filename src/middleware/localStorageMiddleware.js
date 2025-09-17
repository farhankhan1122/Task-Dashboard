
export const LOCALSTORAGE_KEY = 'task_dashboard_v1';

export const localStorageMiddleware = storeAPI => next => action => {
  const result = next(action);
  const persistActions = [
    'tasks/addTaskOptimistic',
    'tasks/updateTaskOptimistic',
    'tasks/deleteTaskOptimistic',
    'tasks/loadTasks',
    'tasks/setFilter',
    'tasks/setSort'
  ];
  if (persistActions.includes(action.type)) {
    try {
      const state = storeAPI.getState();
      const toSave = {
        tasks: state.tasks.tasks,
        filters: state.tasks.filters,
        sortBy: state.tasks.sortBy
      };
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(toSave));
    } catch (e) {
      console.error('localStorage write failed', e);
    }
  }
  return result;
};
