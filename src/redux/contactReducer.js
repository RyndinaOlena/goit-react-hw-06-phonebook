import { createSlice } from "@reduxjs/toolkit";
const INISIAL_STATE = {
    contacts: [],
    filter: ''
}

const phoneBookSlise = createSlice({
    name: 'phoneBook',
    initialState: INISIAL_STATE,
    reducers: {
        setContacts(state, action) {
            state.contacts.push(action.payload)
        },
        setFilter(state, action) {
            state.filter = action.payload
        },
        setContactsDel(state, action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        }

    }
})
export const { setContacts, setFilter, setContactsDel } = phoneBookSlise.actions
export const phoneBookReducer = phoneBookSlise.reducer