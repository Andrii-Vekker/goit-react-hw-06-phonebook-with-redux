import { createSlice } from "@reduxjs/toolkit";


export const contactsSlise = createSlice({
    name: "contacts",
    initialState: {
        contacts: []
    },
    reducers: {
        addContacts(state, action) { 

        },
        removeContacts(state, action) {
            
        }
    }
});

export const {addContacts, removeContacts} = contactsSlise.actions