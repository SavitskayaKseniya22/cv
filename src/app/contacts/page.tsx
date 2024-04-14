'use client';

import React from 'react';
import ContactsMap from './components/contacts-map';
import ContactsForm from './components/contacts-form';
import ContactsList from './components/contacts-list';
import { StyledMainContent } from '../components/main-layout';

function Contacts() {
  return (
    <StyledMainContent>
      <h1>Contacts</h1>

      <ContactsMap />
      <hr />
      <ContactsList />
      <hr />
      <ContactsForm />
    </StyledMainContent>
  );
}

export default Contacts;
