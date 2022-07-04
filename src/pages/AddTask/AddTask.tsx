import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react'
import { document } from 'ionicons/icons'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { uuid } from 'uuidv4'
import { TaskContext } from '../../contexts/TaskContext'
import { TaskType } from '../../@types/tasks'




const AddTask = () => {
    const [title, setTitle] = useState("")
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")
    const history = useHistory()
    const { saveTask } = useContext(TaskContext)


    const handleSaveTask = async () => {
        const data: TaskType = { id: Math.random(), title, time, date, active: true }
        saveTask(data)
        history.push("/")
    }

    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton />
                    </IonButtons>
                    <IonText className='is-centered ml-5'>Add Task</IonText>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='ion-padding'>
                <section className="form">
                    <div className="field">
                        <IonLabel>Title</IonLabel>
                        <div className="control mt-3">
                            <IonInput
                                type='text'
                                placeholder='Title'
                                className='input is-primary px-2'
                                required
                                onIonChange={e => setTitle(e.detail.value as string)}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <IonLabel>Time</IonLabel>
                        <div className="control mt-3">
                            <IonInput
                                type='time'
                                placeholder='12:00am'
                                className='input is-primary px-2'
                                required
                                onIonChange={e => setTime(e.detail.value as string)}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <IonLabel>Interval</IonLabel>
                        <div className="control mt-3">
                            <IonInput
                                type='date'
                                placeholder='12/20/2022'
                                className='input is-primary px-2'
                                required
                                onIonChange={e => setDate(e.detail.value as string)}
                            />
                        </div>
                    </div>
                    <div className="has-text-centered">
                        <IonButton
                            type='submit'
                            color='dark'
                            fill='clear'
                            size='small'
                            className='is-primary mt-5 p-0'
                            onClick={handleSaveTask}
                        >
                            Save
                        </IonButton>
                    </div>
                </section>
            </IonContent>
        </IonPage>
    )
}

export default AddTask