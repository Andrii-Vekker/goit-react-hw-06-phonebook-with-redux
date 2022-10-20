import { createSlice } from "@reduxjs/toolkit";

export const filterSlise = createSlice({
    name: "filter",
    initialState: { filter: "" },
    reducers: {
        filteredContacts(state, action) {

        }
    }
});

export const {filteredContacts} = filterSlise.actions