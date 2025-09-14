import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      addTask();
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center pt-12 px-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-indigo-600 mb-8 text-center">📝 ToDo List</h1>

        <div className="flex gap-2 mb-8">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter a task..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
          />

          <button
            onClick={addTask}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Add
          </button>
        </div>

        {tasks.length > 0 ? (
          <ul className="space-y-3">
            {tasks.map((t, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center hover:shadow-lg transition duration-200"
              >
                <span className="text-gray-800 font-medium">{t}</span>
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition duration-200"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-gray-500">No tasks yet. Add one above!</p>
          </div>
        )}

        {tasks.length > 0 && (
          <p className="mt-4 text-sm text-gray-500 text-center">
            You have {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;