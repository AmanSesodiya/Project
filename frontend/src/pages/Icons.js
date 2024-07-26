import React from 'react';

const Icons = () => {
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
    icon: {
      fontSize: '3rem',
      marginBottom: '15px',
      color: '#00796b',
    },
  };

  return (
    <div style={{ backgroundColor: '#f7f7f7', padding: '50px 20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={styles.container}>
        <h1 style={styles.title}>Explore Our Icons</h1>
        <p style={styles.description}>
          Discover a variety of icon sets to enhance your user interface. Each set offers a wide range of icons designed to fit different themes and applications.
        </p>

        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.icon}>
              <i className="fa fa-cog" aria-hidden="true"></i>
            </div>
            <h2 style={styles.cardTitle}>Font Awesome Icons</h2>
            <p style={styles.cardDescription}>
              A comprehensive collection of icons that are easy to integrate and customize. Perfect for a range of applications from social media to user interface elements.
            </p>
            <a href="#learn-more" style={styles.button}>
              Learn More
            </a>
          </div>
          <div style={styles.card}>
            <div style={styles.icon}>
              <i className="fa fa-heart" aria-hidden="true"></i>
            </div>
            <h2 style={styles.cardTitle}>Material Icons</h2>
            <p style={styles.cardDescription}>
              Google's Material Design icons offer a clean and modern look. Ideal for integrating with material design-based applications and websites.
            </p>
            <a href="#learn-more" style={styles.button}>
              Learn More
            </a>
          </div>
          <div style={styles.card}>
            <div style={styles.icon}>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            <h2 style={styles.cardTitle}>Ionicons</h2>
            <p style={styles.cardDescription}>
              A set of high-quality icons designed for use with modern web and mobile applications. Includes a range of icons for various use cases.
            </p>
            <a href="#learn-more" style={styles.button}>
              Learn More
            </a>
          </div>
          <div style={styles.card}>
            <div style={styles.icon}>
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <h2 style={styles.cardTitle}>Feather Icons</h2>
            <p style={styles.cardDescription}>
              Feather icons are simple, elegant, and easily customizable. They offer a minimalistic style suitable for modern designs.
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

export default Icons;
