// src/Newsletter.js
import React, { useState } from 'react';
import { Typography, Button } from '@material-tailwind/react';

const styles = {
  container: {
    backgroundColor: '#f7fafc', // Tailwind's gray-100
    padding: '4rem 0',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    backgroundColor: '#ffffff', // Tailwind's white
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '0.5rem', // Tailwind's rounded-lg
    padding: '2rem',
    maxWidth: '32rem', // Tailwind's max-w-lg
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #d1d5db', // Tailwind's border-gray-300
    borderRadius: '0.375rem', // Tailwind's rounded-md
    marginBottom: '1rem',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '0.375rem', // Tailwind's rounded-md
    backgroundColor: '#3b82f6', // Tailwind's bg-blue-600
    color: '#ffffff', // Tailwind's text-white
    border: 'none',
  },
  buttonHover: {
    backgroundColor: '#2563eb', // Tailwind's bg-blue-700
  },
  message: {
    marginBottom: '1rem',
    padding: '0.5rem',
    backgroundColor: '#d1fae5', // Tailwind's bg-green-100
    color: '#065f46', // Tailwind's text-green-800
    border: '1px solid #a3e635', // Tailwind's border-green-200
    borderRadius: '0.375rem', // Tailwind's rounded-md
  },
};

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate an API call or form submission
    setMessage('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div style={styles.container}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <Typography
            variant="h2"
            color="blue-gray"
            className="font-bold mb-4"
          >
            Subscribe to Our Newsletter
          </Typography>
          <Typography
            color="blue-gray"
            className="text-lg"
          >
            Stay updated with the latest news and special offers. Enter your email address below to subscribe.
          </Typography>
        </div>
        <div style={styles.formContainer}>
          <form onSubmit={handleSubmit} style={styles.form}>
            {message && (
              <div style={styles.message}>
                {message}
              </div>
            )}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                style={styles.input}
              />
            </div>
            <Button
              type="submit"
              variant="gradient"
              className="transition-colors duration-300"
              style={styles.button}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
