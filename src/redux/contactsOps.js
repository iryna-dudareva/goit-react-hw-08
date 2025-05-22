import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://682f0d36746f8ca4a47f94cc.mockapi.io/';

export const getContacts = createAsyncThunk(
    'contacts/getAll',
    async (__, thunkAPI) => {
        try {
            const res = await axios.get('/contacts');
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
            const res = await axios.post('/contacts', { name, number });
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
            await axios.delete(`/contacts/${id}`);
            return id;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);