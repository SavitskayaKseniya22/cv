/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';

export const StyledInput = styled('input')`
  padding: 0.5rem;
  border: none;
  color: white;
  outline: 0;
  background-color: transparent;
  border-bottom: 2px solid #d62222;
`;

export const StyledButton = styled(StyledInput)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d62222;
  border: none;
  cursor: pointer;
`;

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
