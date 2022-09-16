import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type MiscState = {
  toast: boolean;
  popup: boolean;
  popupType: "single" | "bulk";
  singleDeletingId: string;
  deletingIds: string[];
  errorTitle: boolean;
  errorDuedate: boolean;
  searchKeyword: string;
};

const initialState: MiscState = {
  toast: false,
  popup: false,
  popupType: "single",
  singleDeletingId: "",
  deletingIds: [],
  errorTitle: false,
  errorDuedate: false,
  searchKeyword: "",
};

export const miscSlice = createSlice({
  name: "misc",
  initialState,
  reducers: {
    toggleToast: (state) => {
      state.toast = !state.toast;
    },
    togglePopup: (state, action: PayloadAction<"single" | "bulk">) => {
      state.popup = !state.popup;
      state.popupType = action.payload;
    },
    updateErrorTitle: (state, action: PayloadAction<boolean>) => {
      state.errorTitle = action.payload;
    },
    updateErrorDuedate: (state, action: PayloadAction<boolean>) => {
      state.errorDuedate = action.payload;
    },
    updateSingleDeletingId: (state, action: PayloadAction<string>) => {
      state.singleDeletingId = action.payload;
    },
    addDeletingIds: (state, action: PayloadAction<string>) => {
      state.deletingIds.push(action.payload);
    },
    removeDeletingIds: (state, action: PayloadAction<string>) => {
      state.deletingIds = state.deletingIds.filter((id) => {
        return id !== action.payload;
      });
    },
    clearDeletingIds: (state) => {
      state.deletingIds = [];
    },
    updateSearchKeyword: (state, action: PayloadAction<string>) => {
      state.searchKeyword = action.payload;
    },
  },
});

export const {
  toggleToast,
  togglePopup,
  updateErrorTitle,
  updateErrorDuedate,
  updateSingleDeletingId,
  addDeletingIds,
  removeDeletingIds,
  clearDeletingIds,
  updateSearchKeyword,
} = miscSlice.actions;

export default miscSlice.reducer;
