import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const instance = axios.create({
    baseURL: 'https://connections-api.goit.global/',
  });

export const getContacts = createAsyncThunk(
    'contacts/getAll',
    async (__, thunkAPI) => {
        try {
            const res = await instance.get('/contacts');
            return res.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }, thunkAPI) => {
        try {
            const res = await instance.post('/contacts', { name, number });
            return res.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            await instance.delete(`/contacts/${id}`);
            return id;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);