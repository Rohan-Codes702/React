import React from 'react'
import { useState} from 'react'


function App() {
  // useState hook to manage input value
  const [task, setTask] = useState('');
  // useState hook to manage list of tasks
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim('')) {
      // Add current task to tasks array     
      setTasks([...tasks, task]);
      setTask('');
    }
  };

 const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 To-Do List</h1>

        <div className="flex gap-2 mb-4">
          <input type="text"
            className="flex-1 border rounded p-2"
            placeholder='Enter Text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
          >Add</button>
        </div>

        <ul className="space-y-2">

          {tasks.map((item, index)=>(
          <li
            key={index}
            className="flex justify-between bg-gray-50 p-2 rounded shadow-sm"
          >
            <span>{item}</span>

            <button
              onClick={() =>
                deleteTask(index)
              }
              className="text-red-500 hover:text-red-700"
            >
              ❌

            </button>
          </li>
          ))}

        </ul>
      </div>
    </div>
  );
}

export default App
