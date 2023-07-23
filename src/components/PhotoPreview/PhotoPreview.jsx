import styles from "./PhotoPreview.module.css";

export const PhotoPreview = ({ photo }) => {
   //console.log(photo);
   return (
      <div>
         <div className={styles.preview_container}>

            <div className={styles.label_date}>{photo.date_original}</div>

            {photo.geo_country_code &&
               <div className={styles.label_country}>
                  <img src={`http://whitewolf.ru/images/flags/${photo.geo_country_code.toLowerCase()}.png`} alt={photo.geo_country_code} />
               </div>
            }

            <img src={`http://whitewolf.ru/showphoto.php?id=${photo.id}&m=p`} className={styles.image} alt={photo.description} />

            <div className={styles.description}>
               {photo.description}
            </div>

         </div>

         {/*
         <span style={{ color: "#777", fontSize: "7pt" }}>{photo.lat} {photo.lon}</span>
         <div className={styles.label_camera}>{photo.camera_model}</div>
         */}

      </div>
   )
}