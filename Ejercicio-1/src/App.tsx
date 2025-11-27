import React, { useRef, useState } from 'react'
import data from "../src/data/data.json";
import './App.css'

function App() {
  const [flagAddTask, setFlagAddTask] = useState(false);

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


  return (
    <>
      <header>
        <h1>Lista de tareas</h1>
      </header>
      <button id='btn-add-task' onClick={() => setFlagAddTask(true)}>Agregar Tarea</button>
      <section>
        {flagAddTask ? <div className='popup-container' onClick={(e) => closePopup(e)}>
          <div className='popup' ref={popupRef}>

          </div>
        </div> : <></>}
        <div className='task-container'>
          <div className='task'>
            <span className='span-1'><strong>Id</strong></span>
            <span className='span-2'><strong>Title</strong></span>
            <span className='span-3'><strong>Completed</strong></span>
            <span><strong>Actions</strong></span>
          </div>
          {data.array.map((task) => {
            return(<div key={task.id} className='task'>
              <span className='span-1'>{task.id}</span>
              <span className='span-2'>{task.title}</span>
              <span className='span-3'>{task.completed === true ? "completada" : "no"}</span>
              <button>Eliminar</button>
            </div>)
          })}
        </div>
      </section>


    </>
  )
}

export default App
