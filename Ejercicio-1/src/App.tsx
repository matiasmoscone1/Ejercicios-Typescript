import React, { useEffect, useRef, useState } from 'react'
import data from "../src/data/data.json";
import './App.css'

function App() {
  const [flagAddTask, setFlagAddTask] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(data.array);
  const [newTask, setNewTask] = useState<Task | null>(null);

  const popupRef = useRef<HTMLDivElement>(null);

  type Task = {
    id: number,
    title: string,
    completed: boolean
  }

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
      <button id='btn-add-task' onClick={() => {setNewTask({id: tasks.length + 1, title: "", completed: false });setFlagAddTask(true)}}>Agregar Tarea</button>
      <section>
        {flagAddTask ? <div className='popup-container' onClick={(e) => closePopup(e)}>
          <div className='popup' ref={popupRef}>
            <h3>Tarea nueva</h3>
            <div><label>Id: </label><span>{tasks.length}</span></div>
            <div><label>Titulo: </label><textarea cols={40} rows={2} value={newTask?.title || ""} 
              onChange={(e) => setNewTask((prev) => prev ? {...prev, title: e.target.value} : null)}/></div>
            <div><label>Estado: </label><input type='checkbox' onChange={() => setNewTask((prev) => prev ? {...prev, completed: !prev.completed} : null)} /></div>
            <button onClick={() => addTask()}>Agregar</button>
          </div>
        </div> : <></>}
        <div className='task-container'>
          <div className='task'>
            <span className='span-1'><strong>Id</strong></span>
            <span className='span-2'><strong>Title</strong></span>
            <span className='span-3'><strong>Completed</strong></span>
            <span><strong>Actions</strong></span>
          </div>
          {tasks.map((task) => {
            return(<div key={task.id} className='task'>
              <span className='span-1'>{task.id}</span>
              <span className='span-2'>{task.title}</span>
              <span className='span-3'><input type='checkbox' checked={task.completed} onChange={() => toggleCompleted(task.id)}/></span>
              <button onClick={() => deleteTask(task.id)}>Eliminar</button>
            </div>)
          })}
        </div>
      </section>


    </>
  )
}

export default App
