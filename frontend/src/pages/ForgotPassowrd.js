import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email submitted:', email);
    setEmail(''); // Clear the input box
    setMessage('A reset link has been sent to your email address.');
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h2 style={styles.header}>Forgot Password</h2>
        <p style={styles.paragraph}>
          Enter your email address below and we will send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Send Reset Link
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  form: {
    background: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  },
  header: {
    marginBottom: '1rem',
    fontSize: '1.5rem',
  },
  paragraph: {
    marginBottom: '1.5rem',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  message: {
    marginTop: '1rem',
    color: 'green',
    fontSize: '1rem',
  },
};

export default ForgotPassword;
