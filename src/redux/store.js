import { configureStore } from "@reduxjs/toolkit";
import { filterSlise } from "./filterSlise";
import { contactsSlise } from "./contactsSlise";


export const store = configureStore({
    reducer: {
        contacts: contactsSlise.reducer,
        filter: filterSlise.reducer
    }
});