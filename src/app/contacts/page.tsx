'use client';

import React from 'react';
import ContactsMap from './components/contacts-map';
import ContactsForm from './components/contacts-form';
import ContactsList from './components/contacts-list';

function Contacts() {
  return (
    <>
      <h1>Contacts</h1>
      <hr />
      <ContactsMap />
      <hr />
      <ContactsList />
      <hr />
      <ContactsForm />
    </>
  );
}

export default Contacts;
