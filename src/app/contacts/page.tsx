'use client';

import React from 'react';
import ContactsForm from './components/contacts-form';
import ContactsList from './components/contacts-list';
import { StyledMainContent } from '../components/main-layout';

function Contacts() {
  return (
    <StyledMainContent>
      <h1>Contacts</h1>
      <ContactsList />
      <ContactsForm />
    </StyledMainContent>
  );
}

export default Contacts;
