import { AddTaskProps } from "./types";

const AddTask = ({flagAddTask, newTask, 
    setNewTask, addTask,
    closePopup, popupRef}: AddTaskProps) => {

    return(<>
        {flagAddTask ? <div className='popup-container' onClick={(e) => closePopup(e)}>
          <div className='popup' ref={popupRef}>
            <h3>Tarea nueva</h3>
            <div><label>Id: </label><span>{Date.now()}</span></div>
            <div><label>Titulo: </label><textarea cols={40} rows={2} value={newTask?.title || ""} 
              onChange={(e) => setNewTask((prev) => prev ? {...prev, title: e.target.value} : null)}/></div>
            <div><label>Estado: </label><input type='checkbox' onChange={() => setNewTask((prev) => prev ? {...prev, completed: !prev.completed} : null)} /></div>
            <button onClick={() => addTask()}>Agregar</button>
          </div>
        </div> : <></>}
    </>)
    

}

export default AddTask;