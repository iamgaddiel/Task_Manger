import { IonHeader, IonToolbar, IonAvatar, IonImg, IonIcon } from "@ionic/react";
import React from "react";
import { menu } from 'ionicons/icons'
import Image from '../../images/no_match_illustration_v3_darkmode.svg'
// import Image from '../images/no_match_illustration_v3_darkmode.svg'

const Header = () => {
  return <IonHeader collapse='fade' className='ion-no-border'>
    <IonToolbar className="px-4">
      <IonAvatar slot='start'>
        <IonImg src={Image} alt='' />
      </IonAvatar>
      <IonIcon icon={menu} className='has-text-warning-dark' size='large' slot='end' />
    </IonToolbar>
  </IonHeader>;
}
export default Header