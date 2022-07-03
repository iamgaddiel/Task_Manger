import { IonContent, IonPage, IonText, IonSearchbar } from '@ionic/react';
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import './Home.css';


const Home: React.FC = () => {
  // const [_, setSearchParams] = useCustomReducer()

  const handleSearch = (param: any) => {
    // setSearchParams(param)
    //....
  }

  return (
    <IonPage>
      <Header />
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
