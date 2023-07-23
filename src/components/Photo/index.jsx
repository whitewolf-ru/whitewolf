import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import styles from "./Photo.module.css";

export const Photo = (props) => {
   console.log("Photo props", props);
   const WINDOW_ROOT = document.getElementById("react-windows");

   const { photos, loadRequest, loadFailed } = useSelector(state => state.photos);
   //console.log("photos", photos);

   const photo_id = useParams().id.substring(1);

   //console.log("Поиск", photo_id);
   // Проверка на случай, если список фотографий ещё не загружен
   const photo =
      photos.length>0 ?
         photos.filter((photo) => { return photo.id === photo_id })[0]
         :
         { id: 0, descroption: "" }
      ;
   //console.log("photo", photo);

   return ReactDOM.createPortal(
      <>
         <div className={styles.window}>

            {/*
            {photo.camera_model}
            <span style={{ "margin": "10px" }}>
               {photo.geo_country_code}
            </span>

            <span style={{ "margin": "10px" }}>
               {photo.lat}
               {photo.lon}
            </span>

            {photo.uploaded}
            */}

            <img src={`http://whitewolf.ru/showphoto.php?id=${photo.id}`} className={styles.image} alt={photo.description} />

            <div className={styles.title}>
               {photo.description}
               <div>
                  Снято {photo.date_original}
               </div>
            </div>

         </div>
      </>
      ,
      WINDOW_ROOT)
}