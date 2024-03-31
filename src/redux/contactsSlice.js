/*import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
];

const initialState = {
  items: initialContacts,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
    reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
      },
    prepare(values) {
      return {
        payload: {
          ...values,
          id: nanoid(),
      }
      }
    },
    deleteContact(state, action) {
      state.items = state.items.filter(contact => contact.id != action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
console.log(initialState);
export default contactsSlice.reducer;*/
import { createSlice} from "@reduxjs/toolkit";

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
];

const initialState = {
  items: initialContacts,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
console.log(initialState);
export default contactsSlice.reducer;

