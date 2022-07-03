import React from 'react'
import { IonCard, IonIcon, IonItem, IonList, IonText, IonTitle } from '@ionic/react'
import { person, trashOutline } from 'ionicons/icons'

type propType = {
  taskId: number
  title: string
  date: string
  time: string
  action: (id: number) => void
}
const TaskItem = ({ taskId, title, date, time, action }: propType) => {
  return (
    <IonCard className='ion-padding-vertical'>
      <IonItem>
        <IonIcon icon={person} slot='start' />
        <IonText>{title}</IonText>
        <IonIcon
          icon={trashOutline}
          slot='end'
          color='danger'
          onClick={() => action(taskId)} />
      </IonItem>
    </IonCard>
  )
}

export default TaskItem