import { IonBackButton, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonItem, IonList, IonPage, IonText, IonToolbar } from '@ionic/react'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { arrowUpCircle, pencilOutline, trashOutline } from 'ionicons/icons'
import { useHistory, useParams } from 'react-router-dom'
import { TaskType } from '../../@types/tasks'
import Header from '../../components/Header'
import { TaskContext } from '../../contexts/TaskContext'
import './TaskView.css'


const TaskView = () => {
  const { id } = useParams<{ id: string }>()
  const { getTask, deleteTask } = useContext(TaskContext)
  const [task, setTask] = useState<TaskType>()
  const history = useHistory()

  const handleTaskDelete = () => {
    deleteTask(Number(id))
    history.push('/home')
  }

  useEffect(
    () => {
      (async () => {
        const currentTask = await getTask(Number(id))
        setTask(currentTask)
      })()
    },
    []
  )


  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>


        <IonFab horizontal='end' vertical='bottom'>
          <IonFabButton className='fab-btn'>
            <IonIcon icon={arrowUpCircle} />
          </IonFabButton>
          <IonFabList side='top'>
            <IonFabButton color='danger' onClick={handleTaskDelete}> {/* delete button */}
              <IonIcon icon={trashOutline} />
            </IonFabButton>
            <IonFabButton color='primary'>
              <IonIcon icon={pencilOutline} />
            </IonFabButton>
          </IonFabList>
        </IonFab>


        <section>
          <IonList>
            <IonItem className='py-2'>
              <IonText>
                <small className='is-1'>Title</small>
                <p>{task?.title}</p>
              </IonText>
            </IonItem>
            <IonItem className='py-2'>
              <IonText>
                <small className='is-1'>Time</small>
                <p>{task?.time}</p>
              </IonText>
            </IonItem>
            <IonItem className='py-2'>
              <IonText>
                <small className='is-1'>Interval</small>
                <p>{task?.date}</p>
              </IonText>
            </IonItem>
            <IonItem className='py-2'>
              <IonText>
                <small className='is-1'>Title</small>
                <p>{task?.title}</p>
              </IonText>
            </IonItem>
          </IonList>
        </section>
      </IonContent>
    </IonPage >
  )
}

export default TaskView