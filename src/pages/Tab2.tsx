import { camera, trash, close } from "ionicons/icons";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonFooter,
  IonMenu,
  IonMenuButton,
  IonButtons,
  IonModal,
  IonButton,
  IonToast,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import { usePhotoGallery, UserPhoto } from "../hooks/usePhotoGallery";
import { useState } from "react";

const Tab2: React.FC = () => {
  const { takePhoto, photos } = usePhotoGallery();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IonMenu side="end" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <IonButton onClick={()=>setIsOpen(true)}>
            Open MOdal
          </IonButton>
          <IonButton id="open-toast">Its Toast</IonButton>
          <IonModal isOpen={isOpen}>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Modal</IonTitle>
                <IonButtons slot="end">
                  <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                illum quidem recusandae ducimus quos reprehenderit. Veniam,
                molestias quos, dolorum consequuntur nisi deserunt omnis id illo
                sit cum qui. Eaque, dicta.
              </p>
            </IonContent>
          </IonModal>
          This is the menu content.
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader translucent={true}>
          <IonToolbar>
            <IonTitle slot="start">Photo Gallery</IonTitle>
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle>PHOTO</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonGrid>
            <IonRow>
              {photos.map((photo, index) => (
                <IonCol size="6" key={photo.filepath}>
                  <IonImg src={photo.webviewPath} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
          <IonToast trigger="open-toast" message="This toast will disappear after 5 seconds" duration={5000}></IonToast>
          <IonFab vertical="bottom" horizontal="center" slot="fixed">
            <IonFabButton onClick={() => takePhoto()}>
              <IonIcon icon={camera}></IonIcon>
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab2;
