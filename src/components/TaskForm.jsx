import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskOptimistic, updateTaskOptimistic } from "../features/tasks/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import dayjs from "dayjs";

export default function TaskForm({ task, onSuccess }) {
  const dispatch = useDispatch();

  // Pre-fill if editing
  const [title, setTitle] = useState(task?.title || "");
  const [desc, setDesc] = useState(task?.desc || "");
  const [priority, setPriority] = useState(task?.priority || "low");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task) {
      // update existing
      dispatch(
        updateTaskOptimistic({
          ...task,
          title,
          desc,
          priority,
        })
      );
    } else {
      // add new
      const newTask = {
        id: nanoid(),
        title,
        desc,
        priority,
        status: "todo",
        createdAt: dayjs().toISOString(),
      };
      dispatch(addTaskOptimistic(newTask));
    }

    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        className="border p-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
      />
      <textarea
        className="border p-2 rounded"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Task description"
      />
      <select
        className="border p-2 rounded"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button className="bg-indigo-600 text-white px-4 py-2 rounded">
        {task ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}
