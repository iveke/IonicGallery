import { useState, useEffect } from "react";
import { isPlatform } from "@ionic/react";

axios.defaults.baseURL = "http://localhost:3008/upload";

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

export interface awsFileRes {
  url: string;
  file: {};
  name: string;
}

export function usePhotoGallery() {
  const [photoList, setPhotoList] = useState<UserPhoto[]>([]);
  const savePicture = async (
    photo: Photo,
    fileName: string
  ): Promise<UserPhoto> => {
    const base64Data = await base64FromPath(photo.webPath!);
    const responseFile = await saveFileAWS(fileName, base64Data);

    return {
      filepath: fileName,
      webviewPath: responseFile?.url || photo.webPath,
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
    setPhotoList([...photoList, savedFileImage])
    // photoList.push(savedFileImage);
  };

  return {
    savePicture,
    takePhoto,
    photoList,
  };
}

export async function base64FromPath(path: string): Promise<Blob> {
  const response = await fetch(path);
  const blob = await response.blob();
  return blob;

}

const saveFileAWS = async (fileName: string, file: any) => {
  const formdata = new FormData();
  formdata.append("file", file, fileName);
  try {
    const res: awsFileRes = await axios.post("/", formdata);
    return res;
  } catch (error) {
    console.log(error);
  }
};
