import React from 'react';
import { Typography, Button } from '@material-tailwind/react';
import Business from '../assest/Business.jpeg'
import Portfolio from '../assest/Portfolio.jpeg'
import Ecommerce from '../assest/E-commerce.jpeg'
import Blog from '../assest/Blog.jpeg'




const templates = [
  {
    title: 'Business Template',
    description: 'A sleek and modern template tailored for businesses looking to establish a professional online presence.',
    imageUrl: Business,
    downloadLink: '#',
  },
  {
    title: 'Portfolio Template',
    description: 'A creative and visually engaging template for showcasing personal or professional portfolios.',
    imageUrl: Portfolio,
    downloadLink: '#',
  },
  {
    title: 'E-commerce Template',
    description: 'An optimized template designed specifically for e-commerce websites to enhance online shopping experiences.',
    imageUrl: Ecommerce,
    downloadLink: '#',
  },
  {
    title: 'Blog Template',
    description: 'A versatile template perfect for personal blogs or news websites with a focus on content and readability.',
    imageUrl: Blog,
    downloadLink: '#',
  },
];

const styles = {
  container: {
    backgroundColor: '#f4f4f5', // Tailwind's gray-100
    padding: '4rem 0',
  },
  templateCard: {
    backgroundColor: '#ffffff', // Tailwind's white
    borderRadius: '0.5rem', // Tailwind's rounded-lg
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
  },
  templateImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  templateContent: {
    padding: '1.5rem',
  },
  button: {
    backgroundColor: '#3b82f6', // Tailwind's bg-blue-600
    color: '#ffffff', // Tailwind's text-white
    borderRadius: '0.375rem', // Tailwind's rounded-md
    padding: '0.75rem 1.5rem',
    textAlign: 'center',
  },
  buttonHover: {
    backgroundColor: '#2563eb', // Tailwind's bg-blue-700
  },
};

const Templates = () => {
  return (
    <div style={styles.container}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <Typography
            variant="h2"
            color="blue-gray"
            className="font-bold mb-4"
          >
            Our Templates
          </Typography>
          <Typography
            color="blue-gray"
            className="text-lg"
          >
            Discover our range of high-quality templates designed to meet various needs. Download and customize them to fit your projects.
          </Typography>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {templates.map((template, index) => (
            <div
              key={index}
              style={styles.templateCard}
              className="transition-transform hover:scale-105"
            >
              <img
                src={template.imageUrl}
                alt={template.title}
                style={styles.templateImage}
              />
              <div style={styles.templateContent}>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-bold mb-2"
                >
                  {template.title}
                </Typography>
                <Typography color="blue-gray" className="mb-4">
                  {template.description}
                </Typography>
                <Button
                  variant="gradient"
                  className="w-full"
                  style={styles.button}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                  onClick={() => window.open(template.downloadLink, '_blank')}
                >
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;
