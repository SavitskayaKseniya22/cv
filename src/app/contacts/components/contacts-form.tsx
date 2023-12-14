/* eslint-disable react/jsx-props-no-spreading */

'use client';

import { StyledButton, StyledInput } from '@/components/styled-components';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';

const StyledContactsForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

type Inputs = {
  name: string;
  email: string;
  text: string;
};

function ContactsForm() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <StyledContactsForm onSubmit={handleSubmit(onSubmit)}>
      <h2>Contact me</h2>
      <StyledInput
        type="name"
        {...register('name', { required: true })}
        placeholder="Enter name"
      />
      <StyledInput
        type="email"
        {...register('email', { required: true })}
        placeholder="Enter your email"
      />
      <StyledInput
        type="text"
        {...register('text', { required: true })}
        placeholder="Enter the text you want to send"
      />

      <StyledButton type="submit" value="Send" />
    </StyledContactsForm>
  );
}

export default ContactsForm;
