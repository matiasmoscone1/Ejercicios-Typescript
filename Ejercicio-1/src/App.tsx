import React, { useEffect, useRef, useState } from 'react'
import data from "../src/data/data.json";
import './App.css'
import Tasks from './Tasks';
import AddTask from './AddTask';
import { Task } from './types';

function App() {
  const [flagAddTask, setFlagAddTask] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(data.array);
  const [newTask, setNewTask] = useState<Task | null>(null);

  const popupRef = useRef<HTMLDivElement>(null);

  const closePopup = (e: React.MouseEvent) => {
    const target = e.target as Node;
    if(popupRef.current && !popupRef.current.contains(target)){
      setFlagAddTask(false);
    };
  };

  const toggleCompleted = (id: number) => {
    setTasks((prev: Task[]) => {
      return (prev.map((task) => {
        return(task.id === id ? {...task, completed: !task.completed} : task)
      }))
    });
  }

  const addTask = () => {
    if(!newTask)return;
    setTasks((prev) => [...prev, newTask]);
    setNewTask(null);
    setFlagAddTask(false);
  }

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }



  return (
    <>
      <header>
        <h1>Lista de tareas</h1>
      </header>
      <button id='btn-add-task' onClick={() => {setNewTask({id: Date.now(), title: "", completed: false });setFlagAddTask(true)}}>Agregar Tarea</button>
      <section>
        <AddTask flagAddTask={flagAddTask} newTask={newTask} 
        setNewTask={setNewTask} addTask={addTask}
        closePopup={closePopup} popupRef={popupRef}/>
      
        <div className='task-container'>
          <div className='task'>
            <span className='span-1'><strong>Id</strong></span>
            <span className='span-2'><strong>Title</strong></span>
            <span className='span-3'><strong>Completed</strong></span>
            <span><strong>Actions</strong></span>
          </div>
          <Tasks tasks={tasks} toggleCompleted={toggleCompleted} deleteTask={deleteTask}/>
        </div>
      </section>


    </>
  )
}

export default App
