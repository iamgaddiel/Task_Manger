import { IonIcon, IonList, IonRouterLink, IonText } from '@ionic/react'
import { addCircleOutline } from 'ionicons/icons'
import './Task.css'
import TaskItem from '../TaskItem'
import { useContext } from 'react'
import { TaskContext } from '../../contexts/TaskContext'



const Tasks = () => {
    // const [allTasks, setTasks] = useState<TaskType[]>([])
    const { tasks, deleteTask,  } = useContext(TaskContext)

    return (
        <section className="mt-6">
            <div className="is-flex is-justify-content-space-between px-2 pt-3">
                <IonText>Today's tasks</IonText>
                <IonRouterLink routerDirection='forward' routerLink='/add-task'>
                    <IonIcon icon={addCircleOutline} className='has-text-primary' size='large' />
                </IonRouterLink>
            </div>

            <section className="mt-3">
                <IonList lines='none'>
                    {
                        tasks.length === 0 ?
                            <div className="is-flex is-align-items-center is-justify-content-center">
                                <IonText color='dark'>You have no task saved</IonText>
                            </div> :
                            tasks.map((task, index) => (
                                <TaskItem
                                    taskId={task.id}
                                    action={deleteTask}
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