import { api } from "../api.js";

export const PHOTOS_LOADING = 'PHOTOS_LOADING';
export const PHOTOS_OK = 'PHOTOS_OK';
export const PHOTOS_ERROR = 'PHOTOS_ERROR';

export function photosLoad() {
   // console.log("actions: photosLoad()");

   return function (dispatch) {
      dispatch({ type: PHOTOS_LOADING })
      // console.log("Загрузка");

      api("photos.load.php",
      )
         .then(res => {
            //console.log("Результат загрузки", res);
            //if (res && res.success) {
            if (res) {
               dispatch({
                  type: PHOTOS_OK,
                  photos: res
               })
            } else {
               dispatch({ type: PHOTOS_ERROR });
            }
         })

         .catch(err => {
            console.log("err", err);
            dispatch({ type: PHOTOS_ERROR });
         })
   }
}


