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
  IonProgressBar,
  IonRadio,
  IonRadioGroup,
  IonRefresher,
  IonRefresherContent,
  IonReorder,
  IonReorderGroup,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  ItemReorderEventDetail,
  RefresherEventDetail,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import {
  add,
  chevronForward,
  close,
  listCircle,
  pin,
  pizza,
  searchCircle,
  square,
  trash,
} from "ionicons/icons";
import Tab3 from "./Tab3.js";
import { useEffect, useState } from "react";

const Tab1: React.FC = () => {
  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      // Any calls to load data go here
      event.detail.complete();
    }, 2000);
  }
  function handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
          <IonNavLink routerDirection="forward" component={() => <Tab3 />}>
            <IonButton>Go to Tab 3</IonButton>
          </IonNavLink>
          <IonSearchbar color="danger" showCancelButton="focus"  cancelButtonIcon={trash} searchIcon={searchCircle} animated={true} placeholder="Animated search"></IonSearchbar>
          <IonProgressBar type="indeterminate" color="danger"></IonProgressBar>
          <IonButton id="click-trigger"> Click Me</IonButton>
          <IonPopover trigger="click-trigger" triggerAction="hover">
            <IonContent>Hello, World!</IonContent>
          </IonPopover>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent>
          </IonRefresherContent>
        </IonRefresher>
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
        <IonRadioGroup value="strawberries">
          <IonRadio value="grapes">Grapes</IonRadio>
          <br />
          <IonRadio value="strawberries">Strawberries</IonRadio>
          <br />
          <IonRadio value="pineapple">Pineapple</IonRadio>
          <br />
          <IonRadio value="cherries">Cherries</IonRadio>
        </IonRadioGroup>
        <IonList>
      {/* The reorder gesture is disabled by default, enable it to drag and drop items */}
      <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
        <IonItem>
          <IonLabel>Item 1</IonLabel>
          <IonReorder slot="end">
            <IonIcon icon={pizza}></IonIcon>
          </IonReorder>
        </IonItem>

        <IonItem>
          <IonLabel>Item 2</IonLabel>
          <IonReorder slot="end"></IonReorder>
        </IonItem>

        <IonItem>
          <IonLabel>Item 3</IonLabel>
          <IonReorder slot="end"></IonReorder>
        </IonItem>

        <IonItem>
          <IonLabel>Item 4</IonLabel>
          <IonReorder slot="end"></IonReorder>
        </IonItem>

        <IonItem>
          <IonLabel>Item 5</IonLabel>
          <IonReorder slot="end"></IonReorder>
        </IonItem>
      </IonReorderGroup>
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
