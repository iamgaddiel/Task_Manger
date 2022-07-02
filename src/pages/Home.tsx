import { IonAvatar, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonText, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import { menu } from 'ionicons/icons'
import { useEffect, useState } from 'react';
import Tasks from '../components/Tasks';
import { useCustomReducer } from '../hooks/useCustomReducer';
import Image from '../images/no_match_illustration_v3_darkmode.svg'
import './Home.css';


const Home: React.FC = () => {
  const [_, setSearchParams] = useCustomReducer()

  const handleSearch = (param: any) => {
    // setSearchParams(param)
    //....
  }

  return (
    <IonPage>
      <IonHeader collapse='fade' className='ion-no-border ion-padding-horizontal'>
        <IonToolbar>
          <IonAvatar slot='start'>
            <IonImg src={Image} alt='' />
          </IonAvatar>
          <IonIcon icon={menu} className='has-text-warning-dark' size='large' slot='end' />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <section>
          <IonText className='ion-padding-horizontal'>What are you looking for today?</IonText>
          <IonSearchbar
            autocorrect='on'
            placeholder='Search Contents'
            onIonChange={e => handleSearch(e.detail.value)}
          />
        </section>
        <Tasks />
      </IonContent>
    </IonPage>
  );
};

export default Home;
