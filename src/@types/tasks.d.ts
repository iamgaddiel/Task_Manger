export type TaskType = {
  id: number;
  title: string;
  time: string;
  date: string;
  active: boolean;
}

export type TaskContextType = {
  tasks: TaskType[];
  saveTask: (newTask: TaskType) => void;
  deleteTask: (id: string) => void;
};
