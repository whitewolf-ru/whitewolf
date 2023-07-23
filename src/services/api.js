
import { API } from "../services/settings.js";

export const checkResponse = (response) => {
   console.log("response", response);
   if (response.ok) return response.json();
   return Promise.reject(`Ошибка ${response.status}`);
};

const checkSuccess = (response) => {
   if (response && response.success) {
      return response;
   }
   return Promise.reject(`Ответ не success: ${response}`);
};

export async function api(method, options) {
   console.log("api()", method);
   options = {
      //...options,
      method: 'GET',
      //mode: "no-cors",
      //cache: 'no-cache',
      //headers: { "Content-Type": "application/json" },  
      //redirect: 'follow',
      //referrerPolicy: 'no-referrer',
   }
   console.log("Calling", API + method);
   const response = await fetch(API + method, options);
   console.log("response", response);
   return checkResponse(response);
}

// to be updated
// const getIngredients =  () => request("ingredients")
export const api_request = async (method, options) => {
   const response = await fetch(API + method, options);
   const response_1 = await checkResponse(response);
   return checkSuccess(response_1);
};

export const login = async data => {
   return await fetch(`${API}/auth/login`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ email: data.email, password: data.password })
   });
};
