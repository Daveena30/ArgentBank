// src/redux/reducers.js
import { createSlice } from '@reduxjs/toolkit';
import { login } from './actions'; // Assurez-vous que le chemin est correct

const initialState = {
  token: null,
  isAuthenticated: false,
  error: null,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null; // Réinitialiser le token lors de la déconnexion
      state.isAuthenticated = false; // Réinitialiser l'état d'authentification
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true; // Utilisateur connecté
        state.token = action.payload; // Stocker le token
        state.error = null; // Réinitialiser l'erreur
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false; // Utilisateur non connecté
        state.error = action.payload; // Gérer l'erreur
      });
  },
});

// Exporter le reducer et les actions
export const { logout } = authReducer.actions;
export default authReducer.reducer;



