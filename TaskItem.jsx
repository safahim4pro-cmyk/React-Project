import React from 'react';

export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="flex items-center justify-between p-3 bg-white mb-2 rounded shadow-sm border-l-4 border-blue-500">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="w-5 h-5 cursor-pointer"
        />
        <span className={`text-lg ${task.completed ? 'line-through text-gray-400' : ''}`}>
          {task.title}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 hover:text-red-700 font-medium"
      >
        Delete
      </button>
    </div>
  );
}