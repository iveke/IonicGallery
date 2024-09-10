import {
  IonActionSheet,
  IonAlert,
  IonAvatar,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import { useEffect, useState } from "react";

const Tab3: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const newItems = [];
    for (let i = 1; i < 51; i++) {
      newItems.push(`Item ${items.length + i}`);
    }
    setItems([...items, ...newItems]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton id="alert">Click me</IonButton>
        <IonAlert
          trigger="alert"
          header="HEllo its title"
          buttons={[
            {
              text: "Close",
              role: "cancel",
              handler: () => console.log("its cancel"),
            },
            {
              text: "submit",
              role: "submit",
              handler: () => console.log("its confirm"),
            },
          ]}
        ></IonAlert>
        <ExploreContainer name="Tab 3 page" />

        <IonGrid>
          <IonRow>
            <IonCol>1</IonCol>
            <IonCol>2</IonCol>
          </IonRow>
          {/* <IonGrid> */}
          <IonRow>
            <IonCol>3</IonCol>
            <IonCol>4</IonCol>
          </IonRow>
          {/* </IonGrid> */}
        </IonGrid>
      </IonContent>
      <IonContent>
        <IonList>
          {items.map((item, index) => (
            <IonItem key={item}>
              <IonAvatar slot="start">
                <img
                  src={"https://picsum.photos/80/80?random=" + index}
                  alt="avatar"
                />
              </IonAvatar>
              <IonLabel>{item}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonInfiniteScroll>
          <IonInfiniteScrollContent
            loadingText="Please wait..."
            loadingSpinner="bubbles"
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
      <IonContent>
        <IonButton onClick={() => setIsOpen(true)}>Its Sheet</IonButton>
        <IonActionSheet
          isOpen={isOpen}
          header="Its sheet)"
          className="my-custom-class"
          buttons={[
            {
              text: "Delete",
              role: "destructive",
              data: {
                action: "delete",
              },
            },
            {
              text: "Share with your friend",
              data: {
                action: "share",
              },
            },
            {
              text: "Cancel",
              role: "cancel",
              data: {
                action: "cancel",
              },
            },
          ]}
          onDidDismiss={() => setIsOpen(false)}
        ></IonActionSheet>
      </IonContent>
      <IonContent>
      <IonToggle enableOnOffLabels={true} aria-label="Warning toggle" color="warning">Enable Notifications</IonToggle>
        <IonSegment value="default">
          <IonSegmentButton value="default">
            <IonLabel>Default</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="segment">
            <IonLabel>Segment</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <IonSelect aria-label="fruit" interface="popover" placeholder="Select fruit">
          <IonSelectOption value="apples">Apples</IonSelectOption>
          <IonSelectOption value="oranges">Oranges</IonSelectOption>
          <IonSelectOption value="bananas">Bananas</IonSelectOption>
        </IonSelect>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonTitle>now I wanna tell my name</IonTitle>
          <IonButtons slot="start">
            <IonButton size="large" fill="solid" disabled>
              Hello
            </IonButton>
            <IonButton color="danger" fill="outline">
              It's second
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Tab3;
