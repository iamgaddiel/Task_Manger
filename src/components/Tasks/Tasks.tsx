import { IonIcon, IonList, IonRouterLink, IonText } from '@ionic/react'
import { addCircleOutline } from 'ionicons/icons'
import './Task.css'
import TaskItem from '../TaskItem'
import { useEffect, useState } from 'react'
import { TaskType } from '../../utils/types'


const Tasks = () => {
    const [tasks, setTasks] = useState<TaskType[]>([])

    const handleTaskDelete = (id: string) => {
        console.log(id)
    }

    useEffect(
        () => {
            let res = localStorage.getItem('tasks')

            if (res !== null) {
                const allTasks: TaskType[] = JSON.parse(res)
                setTasks(allTasks)
            }
            else {
                setTasks([])
            }
        },
        []
    )

    return (
        <section className="mt-6">
            <div className="is-flex is-justify-content-space-between px-2 pt-3">
                <IonText>Today's tasks</IonText>
                <IonRouterLink routerDirection='forward' routerLink='/add-task'>
                    <IonIcon icon={addCircleOutline} className='has-text-primary' size='large' />
                </IonRouterLink>
            </div>

            <section className="task_list mt-3">
                <IonList lines='none'>
                    {
                        tasks.length === 0 ?
                            <div className="is-flex is-align-items-center is-justify-content-center">
                                <IonText color='dark'>You have no task saved</IonText>
                            </div> :
                            tasks.map((task, index) => (
                                <TaskItem
                                    taskId={`${index}`}
                                    action={handleTaskDelete}
                                    key={index}
                                    title={task.title}
                                    date={task.date}
                                    time={task.time}
                                />
                            ))
                    }
                </IonList>
            </section>
        </section>
    )
}

export default Tasks