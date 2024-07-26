import React from 'react';
import { Typography, Button } from '@material-tailwind/react';
import Free1 from '../assest/Free1.jpeg';
import Free2 from '../assest/Free2.jpeg';
import Icon from '../assest/Icon.jpeg';
import Mockup from '../assest/Mockup.jpeg';

const freeProducts = [
  {
    title: 'Free Template 1',
    description: 'A modern and responsive template perfect for personal blogs and portfolios.',
    imageUrl: Free1,
    downloadLink: '#',
  },
  {
    title: 'Free Template 2',
    description: 'An elegant template with a clean design ideal for business websites and landing pages.',
    imageUrl: Free2,
    downloadLink: '#',
  },
  {
    title: 'Free Icon Set',
    description: 'A collection of high-quality icons for use in web and mobile projects.',
    imageUrl: Icon,
    downloadLink: '#',
  },
  {
    title: 'Free Mockup',
    description: 'A versatile mockup template for showcasing your designs in a professional manner.',
    imageUrl: Mockup,
    downloadLink: '#',
  },
];

const FreeProducts = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <Typography
            variant="h2"
            color="blue-gray"
            className="font-bold mb-4"
          >
            Free Products
          </Typography>
          <Typography
            color="blue-gray"
            className="text-lg"
          >
            Explore our collection of free products designed to help you with your projects. Download and use them for your personal or professional needs.
          </Typography>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {freeProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-bold mb-2"
                >
                  {product.title}
                </Typography>
                <Typography color="blue-gray" className="mb-4">
                  {product.description}
                </Typography>
                <Button
                  color="blue"
                  className="w-full mt-4"
                  onClick={() => window.open(product.downloadLink, '_blank')}
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

export default FreeProducts;
