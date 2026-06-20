import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';

export default function Dashboard({ tasks, addTask, toggleTask, deleteTask }) {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">My Tasks</h2>
      <TaskForm addTask={addTask} />
      <div>
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet. Add some!</p>
        ) : (
          tasks.map(task => (
            <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
          ))
        )}
      </div>
    </div>
  );
}
