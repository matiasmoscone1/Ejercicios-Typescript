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