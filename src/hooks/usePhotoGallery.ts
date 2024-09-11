import { useState, useEffect } from "react";
import { isPlatform } from "@ionic/react";

axios.defaults.baseURL = "http://localhost:3009/upload";

import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from "@capacitor/camera";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Preferences } from "@capacitor/preferences";
import { Capacitor } from "@capacitor/core";
import axios from "axios";

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);
  const savePicture = async (
    photo: Photo,
    fileName: string
  ): Promise<UserPhoto> => {
    const base64Data = await base64FromPath(photo.webPath!);
    // const savedFile = await Filesystem.writeFile({
    //   path: fileName,
    //   data: base64Data,
    //   directory: Directory.Data,
    // });
    console.log(typeof base64Data);
    console.log(base64Data)

savePhotoAWS(fileName,base64Data)
    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  };

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const fileName = Date.now() + "tkach.jpeg";
    const savedFileImage = await savePicture(photo, fileName);
    const newPhotos = [savedFileImage,
      // {
      //   filepath: fileName,
      //   webviewPath: photo.webPath,
      // },
      ...photos,
    ];
    setPhotos(newPhotos);
    console.log(newPhotos)
    // savePhotoAWS(fileName, photo.webPath);
  };

  return {
    savePicture,
    takePhoto,
    photos,
  };
}

export async function base64FromPath(path: string): Promise<Blob> {
  const response = await fetch(path);
  const blob = await response.blob();
  return blob;
  // return new Promise((resolve, reject) => {
  //   const reader = new FileReader();
  //   reader.onerror = reject;
  //   reader.onload = () => {
  //     if (typeof reader.result === "string") {
  //       resolve(reader.result);
  //     } else {
  //       reject("method did not return a string");
  //     }
  //   };
  //   console.log( typeof blob)
  //   // reader.readAsDataURL(blob);
    
  // });
}

const savePhotoAWS = async (fileName: string, file: any) => {
  const formdata = new FormData();
  formdata.append("file", file, fileName);
  try {
    console.log(axios.defaults.baseURL)
    const res = await axios.post("/", formdata);
    return res;
  } catch (error) {
    console.log(error);
  }
};
