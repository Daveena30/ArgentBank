import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      console.log(data);
      const token = data.body.token;
      const user = data.body.user;

      return { token, user }; // On retourne le token pour le sauvegarder dans le store

    } catch (error) {
      return rejectWithValue(error.message); // Rejette avec le message d'erreur
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { fulfillWithValue }) => {
    try {
      return fulfillWithValue(null); // On retourne `null` pour vider le token
    } catch (error) {
      console.error('Logout failed:', error);
      return fulfillWithValue(null);
    }
  }
);


export const getProfile = createAsyncThunk(
  'auth/getProfile',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.token; // On récupère le token depuis le store

      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // On ajoute le token dans l'en-tête
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch profile, status: ${response.status}`);
      }

      const data = await response.json();

      return data.body; // On retourne les données du profil utilisateur

    } catch (error) {
      return rejectWithValue(error.message); // Rejette avec le message d'erreur
    }
  }
);

export const editUsername = createAsyncThunk(
  'auth/editUsername',
  async (userName, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.token;

      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName }), // Envoie le nouveau nom d'utilisateur
      });

      if (!response.ok) {
        throw new Error('Failed to update username');
      }

      const data = await response.json();

      return data.body.userName; // On retourne le nouveau nom d'utilisateur

    } catch (error) {
      return rejectWithValue(error.message); // Rejette avec le message d'erreur
    }
  }
);




