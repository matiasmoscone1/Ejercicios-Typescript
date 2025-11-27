import { TasksProps } from "./types";

const Tasks = ({tasks, toggleCompleted, deleteTask}: TasksProps) => {

    return(<>
    {tasks.map((task) => {
            return(<div key={task.id} className='task'>
              <span className='span-1'>{task.id}</span>
              <span className='span-2'>{task.title}</span>
              <span className='span-3'><input type='checkbox' checked={task.completed} onChange={() => toggleCompleted(task.id)}/></span>
              <button onClick={() => deleteTask(task.id)}>Eliminar</button>
            </div>)
          })}
    </>)
}

export default Tasks;