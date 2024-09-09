import {
  IonAvatar,
  IonBadge,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonChip,
  IonCol,
  IonContent,
  IonDatetime,
  IonFab,
  IonFabButton,
  IonFabList,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNav,
  IonNavLink,
  IonNote,
  IonPage,
  IonPopover,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import {
  add,
  chevronForward,
  close,
  listCircle,
  pin,
  square,
} from "ionicons/icons";
import Tab3 from "./Tab3.js";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
          <IonNavLink routerDirection="forward" component={()=><Tab3 />}>
            <IonButton>Go to Tab 3</IonButton>
          </IonNavLink>
          <IonButton id="click-trigger"> Click Me</IonButton>
          <IonPopover trigger="click-trigger" triggerAction="hover">
            <IonContent >Hello, World!</IonContent>
          </IonPopover>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonCard color="success">
            <IonCardHeader>
              <IonCardTitle>Its Card</IonCardTitle>
            </IonCardHeader>
            <IonItem>
              <IonBadge color="tertiary" slot="start">
                11
              </IonBadge>
              <IonLabel>in start slot</IonLabel>
            </IonItem>
          </IonCard>
          <IonCard color="success">
            <IonCardHeader>
              <IonCardTitle class="ion-card-title">
                Its second Card
              </IonCardTitle>
              <IonCardSubtitle class="ion-card-subtitle">
                Its subtitle
              </IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
        </IonList>
        <IonList lines="inset">
          <IonItem button={true}>
            <IonIcon
              color="tertiary"
              slot="start"
              icon={listCircle}
              size="large"
            ></IonIcon>
            <IonLabel>Shopping</IonLabel>
            <IonNote slot="end">15</IonNote>
          </IonItem>
          <IonItem>
            <IonCheckbox mode="ios" labelPlacement="end">
              You wanna live in Kiev?
            </IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox justify="end" alignment="center">
              Its center aligment
            </IonCheckbox>
          </IonItem>
          <IonItem>
            <IonInput
              label="Its for your name with placeholder"
              placeholder="Enter your name"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonCheckbox indeterminate>its intermediate</IonCheckbox>
          </IonItem>
        </IonList>
        <IonChip outline>
          <IonAvatar>
            <IonIcon icon={pin}></IonIcon>
          </IonAvatar>
          <IonIcon icon={pin}></IonIcon>
          <IonLabel>hello its CHIP</IonLabel>
          <IonIcon size="large" color="primary" icon={close}></IonIcon>
        </IonChip>
      </IonContent>
      <IonContent>
        <IonCard>
          <IonDatetime></IonDatetime>
          <IonDatetime presentation="month-year"></IonDatetime>
          <IonDatetime presentation="date-time" preferWheel></IonDatetime>
        </IonCard>
      </IonContent>
      <IonContent>
        <IonFab>
          <IonFabButton>
            <IonIcon size="large" icon={add}></IonIcon>
          </IonFabButton>
          <IonFabList>
            <IonFabButton>
              <IonIcon icon={square}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={chevronForward}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
