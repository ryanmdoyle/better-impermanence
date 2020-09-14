import React from 'react';
import { css } from '@emotion/core'
import { useForm } from 'react-hook-form';

const form = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  input {
    height: 2rem;
    margin-bottom: 1rem;
  }
  
  textarea {
    min-height: 10rem;
    margin-bottom: 2rem;
  }

  input:focus, textarea:focus {
    border-radius: 0.2rem;
    border: 2px solid var(--blue);
    outline: none;
  }

  input[type='submit'] {
    background-color: var(--blue);
    border: 1px solid var(--blue);
    color: white;
  }
`

export default function App() {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form css={form} name='contact' method='POST' data-netlify='true' data-netlify-honeypot="bot-field" action='formSuccess'>
      <label htmlFor='name'>Name</label>
      <input type="text" placeholder="Name" name="name" ref={register({ required: true })} />

      <label htmlFor='email'>Email Address</label>
      <input type="text" placeholder="Email Address" name="email" ref={register({ required: true })} />

      <label htmlFor='message'>Message</label>
      <textarea name="message" ref={register} />
      <input type="hidden" name="form-name" value="contact" />
      <input type="submit" />
    </form>
  );
}