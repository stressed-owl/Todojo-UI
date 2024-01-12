import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/API";
import { Contact, ContactState } from "../interfaces";

export const createContact = createAsyncThunk("addContact", async (contact: Contact) => {
  try {
    const response = await API.post("/contact", contact);
    return { contact: response.data };
  } catch (error) {
    return { error: error };
  }
});

const initialState = {
  contacts: [],
  loading: false,
} as ContactState;

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createContact.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts.push(action.payload.contact);
      })
      .addCase(createContact.rejected, (state, action) => {
        state.loading = false;
      })
  },
});

export default contactSlice.reducer;
