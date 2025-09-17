import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Sidebar from '../components/Sidebar';
import { loadTasks } from '../features/tasks/tasksSlice';
import { LOCALSTORAGE_KEY } from '../middleware/localStorageMiddleware';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import Modal from '../components/Modal';

export default function DashboardPage() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // hydrate from localStorage on app start
    const raw = localStorage.getItem(LOCALSTORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        dispatch(loadTasks(parsed.tasks || []));
      } catch (e) {
        console.error('hydration failed', e);
      }
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar onAddTask={() => setShowModal(true)} />
        <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900">
          <TaskList />
        </main>
      </div>

      {/* Popup Modal */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-xl font-bold mb-4">Add Task</h2>
        <TaskForm onSuccess={() => setShowModal(false)} />
      </Modal>
    </div>
  );
}
