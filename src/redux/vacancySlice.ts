import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/API";
import { VacanciesState } from "../interfaces";

export const fetchVacancies = createAsyncThunk("fetchVacancies", async () => {
  try {
    const response = await API.get("/vacancy");
    return { vacancies: response.data };
  } catch (error) {
    return { error: error };
  }
});

const initialState = {
  vacancies: [],
  loading: false,
  error: null,
} as VacanciesState;

const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVacancies.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchVacancies.fulfilled, (state, action) => {
        state.loading = false;
        state.vacancies = action.payload.vacancies;
      })
      .addCase(fetchVacancies.rejected, (state, action) => {
        state.loading = false;
      })
  },
});

export default vacanciesSlice.reducer;
