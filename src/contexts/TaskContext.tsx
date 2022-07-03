import { createContext, useState } from "react";
import { TaskContextType, TaskType } from "../@types/tasks";
import { Storage } from '@capacitor/storage'




export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  deleteTask: (id: string) => { },
  saveTask: (newTask: TaskType) => { }
})


export const TaskContextProvider = (props: any) => {
  const [tasks, setTasks] = useState<TaskType[]>([])


  async function saveTask(newTask: TaskType) {

    // Save Task to Storage
    let { value } = await Storage.get({ key: 'tasks' })

    // if tasks are found
    // get all task and append new task
    // save new set of tasks
    if (value !== null) {
      const currentTasks: TaskType[] = JSON.parse(value)
      await Storage.set({
        key: 'tasks',
        value: JSON.stringify([...currentTasks, newTask])
      })
    }
    else {
      //  if no task exits save current task
      await Storage.set({
        key: 'tasks',
        value: JSON.stringify([newTask])
      })
    }

    setTasks([...tasks, newTask]) // Update task state
  }

  async function deleteTask(id: string) {
    // ....
  }


  return (
    <TaskContext.Provider value={{ tasks, saveTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider