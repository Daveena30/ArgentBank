// src/redux/actions.js
import { createAsyncThunk } from '@reduxjs/toolkit';

// Thunk pour la connexion
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      return data.body.token; // Retourne le token pour utilisation ultérieure
    } catch (error) {
      return rejectWithValue(error.message); // Retourne l'erreur pour la gestion ultérieure
    }
  }
);


export const fetchUserProfile = createAsyncThunk(
    'auth/fetchUserProfile',
    async (token, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch user profile');
            }
            const data = await response.json();
            return data.body; // Retourne les données du profil
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);