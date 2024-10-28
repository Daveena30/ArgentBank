// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers'; // Assurez-vous que le chemin est correct

const store = configureStore({
  reducer: {
    auth: authReducer, // Ajouter le reducer d'authentification ici
  },
});

export default store;




