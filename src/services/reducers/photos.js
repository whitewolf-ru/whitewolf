
import { PHOTOS_LOADING, PHOTOS_OK, PHOTOS_ERROR } from '../actions/photos.js';


const initialState = { loaded: false, error: false, photos: [] };

const photosReducer = (state = initialState, action) => {
   switch (action.type) {
      
      case PHOTOS_OK: {
         // console.log("PHOTOS_OK",action.photos);
         return {
            ...state,
            loaded: true,
            error: false,
            photos: action.photos
         }
      }

      case PHOTOS_LOADING: {
         // console.log("PHOTOS_LOADING");
         return {
            ...state,
            loaded: false,
            error: false
         }
      }

      case PHOTOS_ERROR: {
         // console.log("PHOTOS_ERROR");
         return {
            ...state,
            loaded: false,
            error: true
         }
      }

      default: { return state }

   }
}

export { photosReducer };
