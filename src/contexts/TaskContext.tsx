import { createContext, useEffect, useState } from "react";
import { TaskContextType, TaskType } from "../@types/tasks";
import { Storage } from '@capacitor/storage'




export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  task: { id: 1, active: true, date: "", time: "", title: "" },
  deleteTask: (id: number) => { },
  saveTask: (newTask: TaskType) => { },
  getTask: (async (id: number) => {
    return { id: 0, active: true, date: "", time: "", title: "" }
  })
})


export const TaskContextProvider = (props: any) => {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [task, setTask] = useState<TaskType>({ id: 0, active: true, date: "", time: "", title: "" })


  useEffect(
    () => {
      (
        async () => {
          const { value } = await Storage.get({ key: 'tasks' })
          setTasks(JSON.parse(value!))
        }
      )()
    },
    []
  )


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

    setTasks([...tasks, newTask].reverse()) // Update task state
  }

  async function deleteTask(id: number) {
    const newTasks = tasks.filter((task: TaskType) => task.id !== id)
    setTasks(newTasks)
    Storage.set({
      key: 'tasks',
      value: JSON.stringify(newTasks)
    })
  }

  async function getTask(id: number) {
    const newTask = tasks.find(task => task.id === id)!
    return newTask
  }


  return (
    <TaskContext.Provider value={{ tasks, task, saveTask, deleteTask, getTask }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider
