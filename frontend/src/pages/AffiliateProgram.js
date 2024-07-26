import React, { useState } from 'react';

const AffiliateProgram = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = () => {
    setMessage('Subscription successful!');
    setEmail('');
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '2.5rem',
      color: '#333',
      textAlign: 'center',
      marginBottom: '20px',
    },
    description: {
      fontSize: '1.2rem',
      color: '#666',
      textAlign: 'center',
      marginBottom: '30px',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    info: {
      flex: '1',
    },
    infoTitle: {
      fontSize: '2rem',
      color: '#333',
      marginBottom: '15px',
    },
    infoList: {
      listStyleType: 'disc',
      paddingLeft: '20px',
    },
    infoListItem: {
      marginBottom: '10px',
    },
    subscription: {
      backgroundColor: '#e0f7fa',
      padding: '20px',
      borderRadius: '8px',
    },
    subscriptionTitle: {
      fontSize: '1.5rem',
      color: '#00796b',
      marginBottom: '15px',
    },
    emailInput: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '15px',
      fontSize: '1rem',
    },
    subscribeButton: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#00796b',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
    },
    subscribeButtonHover: {
      backgroundColor: '#004d40',
    },
    message: {
      color: '#00796b',
      textAlign: 'center',
      marginTop: '10px',
    },
  };

  return (
    <div style={{ backgroundColor: '#f7f7f7', padding: '50px 20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={styles.container}>
        <h1 style={styles.title}>Join Our Affiliate Program</h1>
        <p style={styles.description}>
          Become a part of our affiliate program and start earning commissions by promoting our products. It's easy to get started and you can earn up to 30% commission on every sale made through your referral.
        </p>

        <div style={styles.content}>
          <div style={styles.info}>
            <h2 style={styles.infoTitle}>Why Join Us?</h2>
            <ul style={styles.infoList}>
              <li style={styles.infoListItem}>High commission rates up to 30%</li>
              <li style={styles.infoListItem}>Easy-to-use tracking and reporting tools</li>
              <li style={styles.infoListItem}>Dedicated affiliate support team</li>
              <li style={styles.infoListItem}>Regular payouts and bonuses</li>
            </ul>
            <p>
              Our affiliate program is designed to be rewarding and straightforward. By joining, you will gain access to a wide range of marketing materials and resources to help you succeed.
            </p>
          </div>

          <div style={styles.subscription}>
            <h2 style={styles.subscriptionTitle}>Sign Up for Updates</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.emailInput}
            />
            <button
              onClick={handleSubscribe}
              style={{ ...styles.subscribeButton, ':hover': styles.subscribeButtonHover }}
            >
              Subscribe
            </button>
            {message && <p style={styles.message}>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateProgram;
