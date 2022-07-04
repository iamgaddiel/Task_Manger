import React from 'react'
import { IonCard, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonText, IonTitle } from '@ionic/react'
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
    <IonItemSliding>
      <IonItem
        routerDirection='forward'
        routerLink={`/task/${taskId}`}>
        <IonIcon icon={person} slot='start' />
        <IonText>{title}</IonText>
      </IonItem>
      <IonItemOptions slot='end' color='danger'>
        <IonItemOption onClick={() => action(taskId)}>
          <IonIcon
            icon={trashOutline}
            slot='end'
            color='light'
          />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  )
}

export default TaskItem