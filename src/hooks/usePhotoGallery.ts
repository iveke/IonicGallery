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

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const fileName = Date.now() + "tkach.jpeg";
    const newPhotos = [
      {
        filepath: fileName,
        webviewPath: photo.webPath,
      },
      ...photos,
    ];
    setPhotos(newPhotos);
    savePhotoAWS(fileName, photo.webPath);
  };

  return {
    takePhoto,
    photos,
  };
}

const savePhotoAWS = async (fileName: string, file: any) => {
  const formdata = new FormData();
  formdata.append("file", file, fileName);
  try {
    const res = await axios.post("/", formdata);
    return res;
  } catch (error) {
    console.log(error);
  }
};
