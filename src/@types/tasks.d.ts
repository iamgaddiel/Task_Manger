export type TaskType = {
  id: number;
  title: string;
  time: string;
  date: string;
  active: boolean;
};

export type TaskContextType = {
  tasks: TaskType[];
  task: TaskType;
  saveTask: (newTask: TaskType) => void;
  deleteTask: (id: number) => void;
  getTask: (id: number) => Promise<TaskType>;
};

