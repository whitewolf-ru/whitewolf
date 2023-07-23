import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { PhotoPreview } from '../PhotoPreview/PhotoPreview';
import { Photo } from '../Photo';
import styles from "./Photos.module.css";

export const Photos = () => {
   const { photos, loadRequest, loadFailed } = useSelector(state => state.photos);
   const location = useLocation();
   return (
      <div className={styles.container}>
         {
            photos &&
            photos.map(photo =>
               <Link to={`/Photo/:${photo.id}`} state={{ background: location }} key={photo.id}>
                  <PhotoPreview photo={photo} key={photo.id} />
               </Link>
            )
         }
      </div>
   )
};


