import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "./authService";
import { FormFields } from "../../types/type";
//  Get user from local storage
const user = JSON.parse(localStorage.getItem("user")!);
// console.log(user.);
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (user: FormFields, thunkAPI) => {
    try {
      return await AuthService.register(user);
    } catch (error) {
      if (error instanceof Error) {
        const message = error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.user = null;
      });
  },
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;
