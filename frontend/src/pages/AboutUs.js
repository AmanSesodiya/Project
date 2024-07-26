import React from 'react';
import { Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-feather'; // For using feather icons

// Import local image
import aboutUsImage from '../assest/AboutUs.jpg';
import pic1 from '../assest/pic1.jpeg'
import pic2 from '../assest/pic2.jpeg'
import pic3 from '../assest/pic3.jpeg'

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900">
            About Us
          </Typography>
          <Typography variant="lead" className="text-lg lg:text-xl text-gray-600">
            Discover who we are, our mission, and our commitment to making a difference.
          </Typography>
        </div>

        {/* Image and Intro Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center mb-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={aboutUsImage}
              alt="About Us"
              className="object-cover w-full h-80 rounded-lg shadow-lg"
            />
          </div>

          {/* Intro Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <Typography variant="h4" className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-6">
              Our Journey
            </Typography>
            <Typography className="text-base lg:text-lg text-gray-700 mb-6">
              From our humble beginnings to becoming a leader in the industry, our journey has been fueled by passion, dedication, and innovation. Explore our history and see how we’ve evolved over the years.
            </Typography>

            <Typography variant="h4" className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-6">
              Our Mission
            </Typography>
            <Typography className="text-base lg:text-lg text-gray-700 mb-6">
              We are committed to revolutionizing the industry with cutting-edge solutions that tackle tomorrow's challenges. Our mission is to deliver exceptional value to our customers and positively impact the communities we serve.
            </Typography>

            <Typography variant="h4" className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-6">
              Our Vision
            </Typography>
            <Typography className="text-base lg:text-lg text-gray-700 mb-6">
              We aspire to be recognized as a benchmark for quality and innovation. Our vision is to lead the industry with integrity and to be a trusted partner in our clients’ success, driving growth and excellence.
            </Typography>

            <Link to="/" className="mt-8 flex justify-center">
              <Button
                color="blue"
                size="lg"
                className="flex items-center gap-2 px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>


        {/* Values Section */}
        <div className="mb-16">
          <Typography variant="h4" className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-6 text-center">
            Our Values
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <Typography variant="h5" className="text-xl font-semibold text-gray-800 mb-4">
                Integrity
              </Typography>
              <Typography className="text-base lg:text-lg text-gray-700">
                We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our interactions.
              </Typography>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <Typography variant="h5" className="text-xl font-semibold text-gray-800 mb-4">
                Innovation
              </Typography>
              <Typography className="text-base lg:text-lg text-gray-700">
                We embrace creativity and encourage new ideas that drive progress and enhance our products and services.
              </Typography>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <Typography variant="h5" className="text-xl font-semibold text-gray-800 mb-4">
                Customer Focus
              </Typography>
              <Typography className="text-base lg:text-lg text-gray-700">
                Our customers are at the heart of everything we do. We are dedicated to meeting their needs and exceeding their expectations.
              </Typography>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <Typography variant="h4" className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-6 text-center">
            Meet Our Team
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <img
                src={pic1}
                alt="Team Member"
                className="w-32 h-32 rounded-full mb-4"
              />
              <Typography variant="h5" className="text-xl font-semibold text-gray-800 mb-2">
                John Doe
              </Typography>
              <Typography className="text-base lg:text-lg text-gray-700">
                CEO & Founder
              </Typography>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <img
                src={pic2}
                alt="Team Member"
                className="w-32 h-32 rounded-full mb-4"
              />
              <Typography variant="h5" className="text-xl font-semibold text-gray-800 mb-2">
                Jane Smith
              </Typography>
              <Typography className="text-base lg:text-lg text-gray-700">
                Chief Operating Officer
              </Typography>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <img
                src={pic3}
                alt="Team Member"
                className="w-32 h-32 rounded-full mb-4"
              />
              <Typography variant="h5" className="text-xl font-semibold text-gray-800 mb-2">
                Emily Johnson
              </Typography>
              <Typography className="text-base lg:text-lg text-gray-700">
                Chief Technology Officer
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
