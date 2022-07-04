import { IonButton, IonContent, IonIcon, IonItem, IonList, IonPage, IonText } from '@ionic/react'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { trashOutline } from 'ionicons/icons'
import { useParams } from 'react-router-dom'
import { TaskType } from '../../@types/tasks'
import Header from '../../components/Header'
import { TaskContext } from '../../contexts/TaskContext'


const TaskView = () => {
  const { id } = useParams<{ id: string }>()
  const { getTask } = useContext(TaskContext)
  const [task, setTask] = useState<TaskType>()
  
  console.log("🚀 ~ file: TaskView.tsx ~ line 14 ~ TaskView ~ task", task)

  useEffect(
    () => {
      // (async () => {
      //   const currentTask = await getTask(Number(id))
      //   setTask(currentTask)
      // })()
      console.log(id)
    },
    []
  )


  return (
    <IonPage>
      {/* <Header /> */}
      {/* <IonContent>
        <section>
          <section className="is-flex is-justify-content-between">
            <IonText>Hmmm</IonText>
            <IonIcon icon={trashOutline} color='danger' />
          </section>
          <IonList>
            <IonItem>
              <p>
                <IonText>Title</IonText>
                <IonText>{task?.title}</IonText>
              </p>
            </IonItem>
            <IonItem>
              <p>
                <IonText>Time</IonText>
                <IonText>{task?.time}</IonText>
              </p>
            </IonItem>
            <IonItem>
              <p>
                <IonText>Interval</IonText>
                <IonText>{task?.date}</IonText>
              </p>
            </IonItem>
            <IonItem>
              <p>
                <IonText>Title</IonText>
                <IonText>{task?.title}</IonText>
              </p>
            </IonItem>
          </IonList>
        </section>
        <section className="mt-4">
          <IonButton className='button' fill='clear' onClick={() => console.log('he')}>Edit</IonButton>
        </section> 
      </IonContent> */}
    </IonPage>
  )
}

export default TaskView