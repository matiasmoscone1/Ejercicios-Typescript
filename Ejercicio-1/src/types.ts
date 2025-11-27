import { RefObject } from "react";

export type Task = {
    id: number,
    title: string,
    completed: boolean
};

export type TasksProps = {
    tasks: Task[],
    toggleCompleted: (id: number) => void,
    deleteTask: (id: number) => void
};

export type AddTaskProps = {
    flagAddTask: boolean,
    newTask: Task | null,
    setNewTask: React.Dispatch<React.SetStateAction<Task | null>>,
    addTask: () => void,
    closePopup: (e: React.MouseEvent) => void,
    popupRef: RefObject<HTMLDivElement>,
}
