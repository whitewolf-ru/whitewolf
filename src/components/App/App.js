import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";

import styles from './App.module.css';
import { Header } from '../Header/Header';
import { Photos } from '../Photos/Photos';
import { Map } from '../Map/Map';
import { Tracks } from '../Tracks/Tracks';
import { Cities } from '../Cities/Cities';
import { Photo } from '../Photo';

import { photosLoad } from "../../services/actions/photos.js";

function App() {

   const dispatch = useDispatch();

   const { photos, loadRequest, loadFailed } = useSelector(state => state.photos);
   // console.log("Redux data", photos);

   const photosInit = async () => {
      //console.log("Вызов photosLoad()");
      dispatch(photosLoad());
   }

   const location = useLocation();
   const source = location.state && location.state.background;
   console.log("source",source);

   useEffect(() => { photosInit() }, []);

   return (
      <div className="App">

         <div className={styles.container}>
            <div className={`${styles.header} ${styles.g_header}`}> <Header /></div>

            <div className={styles.g_content_l}> padding left </div>
            <div className={styles.g_content}>

               <Routes>
                  <Route path="/" element={<Photos />} />
                  <Route path="/map" element={<Map />} />
                  <Route path="/tracks" element={<Tracks />} />
                  <Route path="/cities" element={<Cities />} />
                  <Route path="/photo/:id" element={<Photo test="not modal"/>} />
               </Routes>

            </div>
            <div className={styles.g_content_r}> padding right </div>

            <div className={styles.g_footer_l}> footer left </div>
            <div className={styles.g_footer}> footer </div>
            <div className={styles.g_footer_r}> footer right </div>
         </div>

         {
            source && (
               <Routes>
                  <Route path="/photo/:id"
                     element={
                        <Photo test="modal"/>
                     }
                  />
               </Routes>
            )
         }


      </div>
   );
}

export default App;
