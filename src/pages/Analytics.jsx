import React from 'react';

export default function Analytics({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Task Analytics</h2>
      <div className="space-y-4">
        <div className="flex justify-between p-3 bg-gray-50 rounded">
          <span>Total Tasks:</span>
          <span className="font-bold text-blue-600">{totalTasks}</span>
        </div>
        <div className="flex justify-between p-3 bg-green-50 rounded">
          <span>Completed Tasks:</span>
          <span className="font-bold text-green-600">{completedTasks}</span>
        </div>
        <div className="flex justify-between p-3 bg-yellow-50 rounded">
          <span>Pending Tasks:</span>
          <span className="font-bold text-yellow-600">{pendingTasks}</span>
        </div>
      </div>
    </div>
  );
}
