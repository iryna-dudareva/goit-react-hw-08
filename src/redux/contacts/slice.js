import { createSlice } from '@reduxjs/toolkit'
import { getContacts, addContact, deleteContact } from './operations'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },


  extraReducers: builder => {
    builder
    .addCase(getContacts.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    })
    .addCase(getContacts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(addContact.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.loading = false;
      state.items.push(action.payload);
    })
    .addCase(addContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(deleteContact.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = false;
      state.items = state.items.filter(item => item.id !== action.payload);
    })
    .addCase(deleteContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const contactsReducer = contactsSlice.reducer;