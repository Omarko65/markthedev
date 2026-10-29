"use client"

import React, { useState }  from 'react'
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    setSending(true);
    setStatus('');
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      setStatus("Message sent successfully! I'll reach out soon.");
      form.reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  }

  return (
    <div className='border-y py-12 w-full'>
      <div className="layout flex flex-col items-center justify-center gap-6">
        <div className='text-center'>
          <p>Have an idea?</p>
          <h2>Let&apos;s talk!</h2>
        </div>
        <form onSubmit={handleSubmit} className='max-w-150 w-full' action="">
          <input 
            type="text" 
            name="name"
            required
            placeholder='Name' 
            className='block bg-white/22 border px-3 w-full h-10 text-sm font-light  focus:outline-none'  
          />
          <input
            type="email"
            name='email'
            required
            placeholder='Email'
            className='block bg-white/22 border px-3 my-5 w-full h-10 text-sm font-light  focus:outline-none'
          />
          <textarea
            placeholder='Message'
            name='message'
            required
            rows={10}
            className='block bg-white/22 border px-3 py-3 my-5 w-full text-sm font-light resize-none focus:outline-none'
          />
          <button className='bg-black disabled={sending} text-white text-sm cursor-pointer hover:scale-[0.96] transition font-light w-full h-10'>
            {sending ? 'SENDING...' : 'SEND'}
          </button>
          {status && (
            <p role="status" className="text-xs mt-5 text-center">
              {status}
            </p>
          )}
        </form>
      </div>  
    </div>
  )
}
