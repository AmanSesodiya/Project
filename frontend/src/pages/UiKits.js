import React from 'react';

const UIKits = () => {
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
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
    },
    card: {
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      textAlign: 'center',
    },
    cardTitle: {
      fontSize: '1.5rem',
      color: '#333',
      marginBottom: '10px',
    },
    cardDescription: {
      fontSize: '1rem',
      color: '#666',
      marginBottom: '15px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#00796b',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    buttonHover: {
      backgroundColor: '#004d40',
    },
  };

  return (
    <div style={{ backgroundColor: '#f7f7f7', padding: '50px 20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={styles.container}>
        <h1 style={styles.title}>Explore Our UI Kits</h1>
        <p style={styles.description}>
          Discover a collection of beautifully designed UI kits to help you build stunning applications quickly. Each kit comes with a range of components and templates that are easy to customize and integrate.
        </p>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Material UI Kit</h2>
            <p style={styles.cardDescription}>
              A comprehensive collection of Material Design components for React. Ideal for building modern and stylish applications.
            </p>
            <a href="#learn-more" style={styles.button}>
              Learn More
            </a>
          </div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Bootstrap UI Kit</h2>
            <p style={styles.cardDescription}>
              A complete set of Bootstrap-based components for React. Perfect for creating responsive and functional user interfaces.
            </p>
            <a href="#learn-more" style={styles.button}>
              Learn More
            </a>
          </div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Ant Design Kit</h2>
            <p style={styles.cardDescription}>
              A collection of Ant Design components for React. Provides a rich set of high-quality components for enterprise applications.
            </p>
            <a href="#learn-more" style={styles.button}>
              Learn More
            </a>
          </div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Semantic UI Kit</h2>
            <p style={styles.cardDescription}>
              A versatile set of components built with Semantic UI. Ideal for creating sleek and semantic web applications.
            </p>
            <a href="#learn-more" style={styles.button}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIKits;
