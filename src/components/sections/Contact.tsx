'use client'
import React, { useState } from 'react'
import SectionContainer from '@/components/layout/SectionContainer'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        setSubmissionStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setSubmissionStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmissionStatus('error')
    }

    setIsSubmitting(false)
  }

  return (
    <SectionContainer id='contact'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          <span className='bg-gradient-to-r from-cyan to-purple text-transparent bg-clip-text'>
            Contact Us
          </span>
        </h2>
        <div className='max-w-lg mx-auto'>
          <form className='card-glass' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-white font-bold mb-2'>
                Name
              </label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className='w-full bg-black/30 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-white font-bold mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='w-full bg-black/30 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block text-white font-bold mb-2'>
                Message
              </label>
              <textarea
                id='message'
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className='w-full bg-black/30 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan'
              ></textarea>
            </div>
            <div className='text-center'>
              <button
                type='submit'
                className='btn-primary'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {submissionStatus === 'success' && (
              <p className='text-green-500 mt-4 text-center'>
                Your message has been sent successfully!
              </p>
            )}
            {submissionStatus === 'error' && (
              <p className='text-red-500 mt-4 text-center'>
                There was an error sending your message. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Contact
