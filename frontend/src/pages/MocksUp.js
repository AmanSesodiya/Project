import React from 'react';
import Desktop from '../assest/Desktop.jpeg';
import Mobile  from '../assest/Mobile.jpeg'
import Tablet  from '../assest/Tablet.jpeg'
import Card  from '../assest/Card.jpeg'



const Mockups = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl text-gray-800 mb-4 font-bold">
          Explore Our Mockups
        </h1>
        <p className="text-lg text-gray-600">
          Check out our collection of high-quality mockups that can help bring your designs to life. Perfect for presentations and showcasing your work.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
          <img
            src={Desktop}
            alt="Desktop Mockup"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl text-gray-800 mb-2 font-semibold">
              Desktop Mockup
            </h2>
            <p className="text-gray-600 mb-4">
              A high-resolution desktop mockup ideal for showcasing your web designs or app interfaces. Features a clean and modern look.
            </p>
            <a
              href="#learn-more"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
          <img
            src={Mobile}
            alt="Mobile Mockup"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl text-gray-800 mb-2 font-semibold">
              Mobile Mockup
            </h2>
            <p className="text-gray-600 mb-4">
              A realistic mobile device mockup perfect for demonstrating your mobile app designs. Comes with a sleek and contemporary style.
            </p>
            <a
              href="#learn-more"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
          <img
            src={Tablet}
            alt="Tablet Mockup"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl text-gray-800 mb-2 font-semibold">
              Tablet Mockup
            </h2>
            <p className="text-gray-600 mb-4">
              Display your tablet UI designs with this high-quality mockup. Ideal for showcasing applications and websites on tablet devices.
            </p>
            <a
              href="#learn-more"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
          <img
            src={Card}
            alt="Card Mockup"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl text-gray-800 mb-2 font-semibold">
              Card Mockup
            </h2>
            <p className="text-gray-600 mb-4">
              Showcase your designs on a card mockup. Perfect for presenting business cards, invitations, or any other card-based designs.
            </p>
            <a
              href="#learn-more"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mockups;
