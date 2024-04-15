/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled, { css } from 'styled-components';
import emailjs from '@emailjs/browser';

const emailServiceId = 'service_h0yuidd';
const emailTemplateId = 'template_8fl60sd';
const emailPublickKey = 'SDGBlEDoTs9cNxtLw';

export const StyleForInput = css`
  padding: 0.5rem;
  border: none;
  color: white;
  outline: 0;
  background-color: transparent;
  border-bottom: 2px solid tan;
`;

export const StyledInput = styled('input')`
  ${StyleForInput}
`;

export const StyledButton = styled('button')`
  ${StyleForInput}
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d62222;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: rgba(128, 128, 128, 0.1);
    pointer-events: none;
  }
`;

const StyledContactsForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

type Inputs = {
  from_name: string;
  from_email: string;
  message: string;
};

function ContactsForm() {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const [status, setStatus] = useState<null | 'sent' | 'error'>(null);
  const [isSending, setIsSending] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (status !== null) {
      timerId = setTimeout(() => {
        setStatus(null);
      }, 3000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [status]);

  const onSubmit: SubmitHandler<Inputs> = () => {
    setIsSending(true);
    emailjs
      .sendForm(
        emailServiceId,
        emailTemplateId,
        form.current as HTMLFormElement,
        {
          publicKey: emailPublickKey,
        }
      )
      .then(() => {
        reset();
        setStatus('sent');
      })
      .catch((error) => {
        console.error(error);
        setStatus('error');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <StyledContactsForm onSubmit={handleSubmit(onSubmit)} ref={form}>
      <h2>Contact me</h2>
      <StyledInput
        type="name"
        {...register('from_name', { required: true })}
        placeholder="Enter name"
      />
      <StyledInput
        type="email"
        {...register('from_email', { required: true })}
        placeholder="Enter your email"
      />
      <StyledInput
        type="text"
        {...register('message', { required: true })}
        placeholder="Enter the text you want to send"
      />
      <StyledButton type="submit" disabled={status === 'sent'}>
        {isSending && 'Message in progress'}
        {status === 'sent' && 'Message sent successfully'}
        {status === 'error' && 'An error has occurred. Try again, please'}
        {status === null && !isSending && 'Send'}
      </StyledButton>
    </StyledContactsForm>
  );
}

export default ContactsForm;
