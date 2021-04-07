import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.contacts;
const getFilter = state => state.contacts.filter;
const getLoader = state => state.contacts.loading;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export { getContacts, getFilter, getLoader, getVisibleContacts };
